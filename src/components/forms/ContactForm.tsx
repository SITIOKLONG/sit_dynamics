"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Copy, Mail } from "lucide-react";
import { budgetRanges, projectTypes } from "@/data/enquiry";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormValues {
  name: string;
  organisation: string;
  email: string;
  projectType: string;
  budget: string;
  description: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

type ResultStatus = "sent" | "prepared" | "setup" | "error";

interface Result {
  status: ResultStatus;
  copy: string;
}

const initialValues: FormValues = {
  name: "",
  organisation: "",
  email: "",
  projectType: "",
  budget: "",
  description: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resultContent: Record<
  ResultStatus,
  { tag: string; title: string; message: string }
> = {
  sent: {
    tag: "查詢已傳送",
    title: "已收到你的查詢。",
    message:
      "已配置的傳送端點接受了此查詢。我們將使用你提供的聯絡資料回覆。",
  },
  prepared: {
    tag: "已準備，尚未寄出",
    title: "查詢內容已準備。",
    message:
      "請透過電郵應用程式寄出，或複製下方查詢內容。系統沒有自動寄出任何訊息。",
  },
  setup: {
    tag: "未寄出 — 尚未配置傳送方式",
    title: "此表單尚未連接傳送服務。",
    message:
      "此部署未配置傳送端點，查詢內容沒有被傳送。請複製下方內容，並透過你已取得的聯絡渠道發送。",
  },
  error: {
    tag: "傳送失敗",
    title: "查詢未能傳送。",
    message:
      "已配置的端點沒有接受請求，沒有任何內容被寄出。請複製下方內容，稍後再試。",
  },
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "請輸入姓名。";
  if (!values.organisation.trim())
    errors.organisation = "請輸入機構名稱。";
  if (!values.email.trim()) {
    errors.email = "請輸入電郵地址。";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "請輸入有效的電郵地址。";
  }
  if (!values.projectType) errors.projectType = "請選擇項目類型。";
  if (!values.description.trim())
    errors.description = "請簡述項目或工程挑戰。";

  return errors;
}

function buildSummary(values: FormValues): string {
  return [
    "SIT Dynamics — 項目查詢",
    "",
    `姓名：${values.name.trim()}`,
    `機構名稱：${values.organisation.trim()}`,
    `電郵：${values.email.trim()}`,
    `項目類型：${values.projectType}`,
    `預算範圍：${values.budget || "未指定"}`,
    "",
    "項目描述：",
    values.description.trim(),
  ].join("\n");
}

async function writeClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy selection-based copy path.
    }
  }

  const previousFocus =
    document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.inset = "0";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);

  let copied = false;
  try {
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  } finally {
    textarea.remove();
    previousFocus?.focus();
  }

  return copied;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-[11px] leading-relaxed text-signal-light">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState<Result | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const endpoint = siteConfig.contact.endpoint;
  const contactEmail = siteConfig.contact.email;

  useEffect(() => {
    const handleEnquiryType = (event: Event) => {
      const projectType = (event as CustomEvent<string>).detail;
      if (typeof projectType === "string" && projectType.length > 0) {
        setValues((current) => ({ ...current, projectType }));
        setErrors((current) => ({ ...current, projectType: undefined }));
      }
    };

    window.addEventListener("sit:enquiry-type", handleEnquiryType);
    return () =>
      window.removeEventListener("sit:enquiry-type", handleEnquiryType);
  }, []);

  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({ block: "nearest" });
    }
  }, [result]);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) =>
      current[field] ? { ...current, [field]: undefined } : current,
    );
    if (result) setResult(null);
    setCopied(false);
    setCopyError(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`field-${firstField}`)?.focus();
      return;
    }

    const summary = buildSummary(values);
    setSubmitting(true);
    setCopied(false);
    setCopyError(false);

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            submittedAt: new Date().toISOString(),
            source: "SIT Dynamics 官方網站",
          }),
        });

        if (!response.ok) {
          throw new Error(`Enquiry endpoint returned ${response.status}`);
        }

        setResult({ status: "sent", copy: summary });
      } else if (contactEmail) {
        setResult({ status: "prepared", copy: summary });
      } else {
        setResult({ status: "setup", copy: summary });
      }
    } catch {
      setResult({ status: "error", copy: summary });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    const copied = await writeClipboard(result.copy);
    setCopied(copied);
    setCopyError(!copied);
  };

  const deliveryNote = endpoint
    ? "提交後，查詢內容將傳送至已配置的端點。"
    : contactEmail
      ? "提交後，系統會準備電郵內容，讓你在電郵應用程式中寄出。"
      : "此部署尚未配置傳送端點。提交後只會整理可複製的查詢內容，不會自動寄出。";

  const mailtoHref = contactEmail
    ? `mailto:${contactEmail}?subject=${encodeURIComponent(
        `項目查詢 — ${values.projectType || "SIT Dynamics"}`,
      )}&body=${encodeURIComponent(result?.copy ?? buildSummary(values))}`
    : null;

  const content = result ? resultContent[result.status] : null;

  return (
    <div className="border border-line bg-surface/60 p-6 sm:p-8 lg:p-10">
      <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
        <p className="font-mono text-[9px] uppercase tracking-technical text-muted/80">
          項目查詢
        </p>
        <p className="font-mono text-[9px] uppercase tracking-technical text-muted/80">
          表格 / 01
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-7">
        <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="field-name"
              className="font-mono text-[10px] uppercase tracking-technical text-muted"
            >
              姓名 <span className="text-signal-light">*</span>
            </label>
            <input
              id="field-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "field-name-error" : undefined}
              className="mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[15px] text-fg transition-colors focus:border-signal"
            />
            <FieldError id="field-name-error" message={errors.name} />
          </div>

          <div>
            <label
              htmlFor="field-organisation"
              className="font-mono text-[10px] uppercase tracking-technical text-muted"
            >
              機構名稱 <span className="text-signal-light">*</span>
            </label>
            <input
              id="field-organisation"
              name="organisation"
              type="text"
              autoComplete="organization"
              required
              value={values.organisation}
              onChange={(event) =>
                updateField("organisation", event.target.value)
              }
              aria-invalid={Boolean(errors.organisation)}
              aria-describedby={
                errors.organisation ? "field-organisation-error" : undefined
              }
              className="mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[15px] text-fg transition-colors focus:border-signal"
            />
            <FieldError
              id="field-organisation-error"
              message={errors.organisation}
            />
          </div>

          <div>
            <label
              htmlFor="field-email"
              className="font-mono text-[10px] uppercase tracking-technical text-muted"
            >
              電郵 <span className="text-signal-light">*</span>
            </label>
            <input
              id="field-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "field-email-error" : undefined}
              className="mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[15px] text-fg transition-colors focus:border-signal"
            />
            <FieldError id="field-email-error" message={errors.email} />
          </div>

          <div>
            <label
              htmlFor="field-projectType"
              className="font-mono text-[10px] uppercase tracking-technical text-muted"
            >
              項目類型 <span className="text-signal-light">*</span>
            </label>
            <div className="relative">
              <select
                id="field-projectType"
                name="projectType"
                required
                value={values.projectType}
                onChange={(event) =>
                  updateField("projectType", event.target.value)
                }
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={
                  errors.projectType ? "field-projectType-error" : undefined
                }
                className={cn(
                  "mt-2 w-full appearance-none border-0 border-b border-line bg-transparent py-3 pr-8 text-[15px] text-fg transition-colors focus:border-signal",
                  !values.projectType && "text-muted/80",
                )}
              >
                <option value="" disabled>
                  請選擇項目類型
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-surface text-fg">
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute bottom-3.5 right-0 size-4 text-muted"
                aria-hidden="true"
              />
            </div>
            <FieldError
              id="field-projectType-error"
              message={errors.projectType}
            />
          </div>

          <div>
            <label
              htmlFor="field-budget"
              className="font-mono text-[10px] uppercase tracking-technical text-muted"
            >
              預算範圍
            </label>
            <div className="relative">
              <select
                id="field-budget"
                name="budget"
                value={values.budget}
                onChange={(event) =>
                  updateField("budget", event.target.value)
                }
                className={cn(
                  "mt-2 w-full appearance-none border-0 border-b border-line bg-transparent py-3 pr-8 text-[15px] text-fg transition-colors focus:border-signal",
                  !values.budget && "text-muted/80",
                )}
              >
                <option value="" disabled>
                  請選擇預算範圍
                </option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="bg-surface text-fg">
                    {range}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute bottom-3.5 right-0 size-4 text-muted"
                aria-hidden="true"
              />
            </div>
          </div>

          <p className="self-end pb-3 text-[11px] leading-relaxed text-muted/80">
            預算範圍僅供參考；最終範圍及價格將於書面報價中確認。
          </p>
        </div>

        <div className="mt-7">
          <label
            htmlFor="field-description"
            className="font-mono text-[10px] uppercase tracking-technical text-muted"
          >
            項目描述 <span className="text-signal-light">*</span>
          </label>
          <textarea
            id="field-description"
            name="description"
            rows={5}
            required
            value={values.description}
            onChange={(event) =>
              updateField("description", event.target.value)
            }
            aria-invalid={Boolean(errors.description)}
            aria-describedby={
              errors.description ? "field-description-error" : undefined
            }
            placeholder="目標、現有平台或技術能力、參與者、時間表，以及任何技術限制。"
            className="mt-2 w-full resize-y border-0 border-b border-line bg-transparent px-0 py-3 text-[15px] text-fg transition-colors focus:border-signal"
          />
          <FieldError
            id="field-description-error"
            message={errors.description}
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xs font-mono text-[9.5px] uppercase leading-relaxed tracking-technical text-muted/80">
            {deliveryNote}
          </p>
          <Button type="submit" disabled={submitting} className="shrink-0">
            {submitting ? "提交中…" : "提交項目查詢"}
          </Button>
        </div>
      </form>

      {result && content && (
        <div
          ref={resultRef}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className={cn(
            "mt-8 border p-5",
            result.status === "sent"
              ? "border-signal/60 bg-signal/[0.06]"
              : "border-line bg-panel",
          )}
        >
          <p className="font-mono text-[9px] uppercase tracking-technical text-signal-light">
            {content.tag}
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-fg">
            {content.title}
          </p>
          <p className="mt-2 max-w-lg text-sm leading-[1.8] text-muted">
            {content.message}
          </p>

          {(result.status === "setup" || result.status === "error") && (
            <p className="mt-4 border border-line px-3 py-2 font-mono text-[9px] uppercase leading-relaxed tracking-technical text-muted/80">
              {siteConfig.contact.adminHint}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCopy}
            >
              {copied ? (
                <Check className="size-3.5" aria-hidden="true" />
              ) : (
                <Copy className="size-3.5" aria-hidden="true" />
              )}
              {copied ? "已複製" : "複製查詢內容"}
            </Button>

            {mailtoHref && result.status !== "sent" && (
              <a
                href={mailtoHref}
                className="inline-flex h-9 items-center justify-center gap-2 border border-line px-4 text-[13px] font-medium text-fg transition-colors hover:border-muted hover:bg-fg/[0.04]"
              >
                <Mail className="size-3.5" aria-hidden="true" />
                開啟電郵應用程式
              </a>
            )}

            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setResult(null)}
            >
              修改查詢
            </Button>
          </div>

          {copyError && (
            <p className="mt-3 text-[11px] leading-relaxed text-signal-light">
              複製失敗。請選取下方預覽文字並手動複製。
            </p>
          )}

          <details className="mt-5">
            <summary className="cursor-pointer font-mono text-[9px] uppercase tracking-technical text-muted/80 transition-colors hover:text-muted">
              預覽查詢內容
            </summary>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap border border-line bg-surface p-4 text-[11px] leading-relaxed text-muted">
              {result.copy}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
