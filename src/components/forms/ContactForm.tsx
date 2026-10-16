"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Mail, RotateCcw, Send } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const projectTypes = [
  { id: "workshop", label: "MOP 20,000 體驗工作坊" },
  { id: "pilot", label: "MOP 80,000 工程體驗試點" },
  { id: "platform", label: "MOP 200,000 研發教學平台" },
  { id: "annual", label: "MOP 500,000 年度工程研發項目" },
  { id: "custom", label: "客製化工程" },
  { id: "platform-select", label: "機械人租借／平台選型" },
  { id: "visit", label: "深圳 InnoX／創新產業參訪" },
  { id: "other", label: "其他" },
] as const;

const budgetOptions = [
  "MOP 20,000 以下",
  "MOP 20,000–80,000",
  "MOP 80,000–200,000",
  "MOP 200,000–500,000",
  "MOP 500,000 以上",
  "尚未確定",
] as const;

interface FormValues {
  org: string;
  name: string;
  contact: string;
  projectType: string;
  platform: string;
  participants: string;
  budget: string;
  startTime: string;
  goals: string;
}

const initialValues: FormValues = {
  org: "",
  name: "",
  contact: "",
  projectType: "",
  platform: "",
  participants: "",
  budget: "",
  startTime: "",
  goals: "",
};

const inputClass =
  "w-full border-b border-white/20 bg-transparent py-3 text-sm text-bone outline-none transition-colors placeholder:text-steel/50 focus:border-signal";

const labelClass =
  "block font-mono text-[10.5px] tracking-technical text-steel uppercase";

interface ContactFormProps {
  initialProjectType?: string;
  initialGoals?: string;
}

export function ContactForm({
  initialProjectType = "",
  initialGoals = "",
}: ContactFormProps) {
  const email = siteConfig.contact.email;

  const [values, setValues] = useState<FormValues>({
    ...initialValues,
    projectType: projectTypes.some((p) => p.id === initialProjectType)
      ? initialProjectType
      : "",
    goals: initialGoals,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const setValue = (key: keyof FormValues, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.org.trim()) next.org = "請填寫學校或機構名稱。";
    if (!values.name.trim()) next.name = "請填寫聯絡人。";
    if (!values.contact.trim())
      next.contact = "請填寫電郵或其他聯絡方法。";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const summary = useMemo(() => {
    const lines = [
      `【${siteConfig.brand.name} 項目諮詢】`,
      "",
      `學校／機構名稱：${values.org || "（未填寫）"}`,
      `聯絡人：${values.name || "（未填寫）"}`,
      `電郵或聯絡方法：${values.contact || "（未填寫）"}`,
      `項目類型：${
        projectTypes.find((p) => p.id === values.projectType)?.label ??
        "（未選擇）"
      }`,
      `現有機械人平台：${values.platform || "（未填寫）"}`,
      `學生／參與者人數：${values.participants || "（未填寫）"}`,
      `預算範圍：${values.budget || "（未填寫）"}`,
      `希望開始的時間：${values.startTime || "（未填寫）"}`,
      "",
      "項目目標及備註：",
      values.goals || "（未填寫）",
    ];
    return lines.join("\n");
  }, [values]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const mailtoHref = email
    ? `mailto:${email}?subject=${encodeURIComponent(
        `項目諮詢 — ${values.org || "未填機構名稱"}`,
      )}&body=${encodeURIComponent(summary)}`
    : null;

  if (submitted) {
    return (
      <div
        className="rounded-[2px] border border-white/15 bg-graphite-soft p-6 lg:p-8"
        aria-live="polite"
      >
        <p className="font-mono text-[10.5px] tracking-technical text-signal uppercase">
          STEP 02 / REVIEW & SEND
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold text-bone">
          項目諮詢摘要（尚未傳送）
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-steel">
          {email
            ? "表單已完成整理。請按「以電郵傳送」開啟你的電郵程式，或複製內容以其他方式傳送。"
            : "網站尚未配置聯絡電郵，此內容不會自動寄出。請複製以下摘要並以電郵或你慣用的方式傳送；亦可請網站管理員設定 NEXT_PUBLIC_CONTACT_EMAIL 後重試。"}
        </p>

        <pre className="mt-6 max-h-72 overflow-y-auto border border-white/10 bg-void p-4 font-mono text-[12px] leading-relaxed whitespace-pre-wrap text-steel">
          {summary}
        </pre>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={handleCopy} size="md">
            {copied ? (
              <>
                <Check className="size-4" aria-hidden="true" />
                已複製
              </>
            ) : (
              <>
                <Copy className="size-4" aria-hidden="true" />
                複製諮詢內容
              </>
            )}
          </Button>
          {mailtoHref && (
            <Button href={mailtoHref} variant="outline-dark" size="md">
              <Mail className="size-4" aria-hidden="true" />
              以電郵傳送
            </Button>
          )}
          <Button
            variant="ghost-dark"
            size="md"
            onClick={() => setSubmitted(false)}
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            返回修改
          </Button>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4">
          <p className="font-mono text-[10px] leading-relaxed tracking-technical text-steel/60 uppercase">
            {email
              ? `CONNECTED TO — ${email}`
              : "ADMIN — 未偵測到 NEXT_PUBLIC_CONTACT_EMAIL；於 .env.local 設定後重新啟動即可啟用電郵傳送功能。"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="org" className={labelClass}>
            學校／機構名稱 *
          </label>
          <input
            id="org"
            name="org"
            value={values.org}
            onChange={(e) => setValue("org", e.target.value)}
            className={cn(inputClass, errors.org && "border-signal")}
            placeholder="例：某某中學"
          />
          {errors.org && (
            <p className="mt-2 text-[12px] text-signal">{errors.org}</p>
          )}
        </div>
        <div>
          <label htmlFor="name" className={labelClass}>
            聯絡人 *
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={(e) => setValue("name", e.target.value)}
            className={cn(inputClass, errors.name && "border-signal")}
            placeholder="姓名及職位（如有）"
          />
          {errors.name && (
            <p className="mt-2 text-[12px] text-signal">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact" className={labelClass}>
            電郵或聯絡方法 *
          </label>
          <input
            id="contact"
            name="contact"
            value={values.contact}
            onChange={(e) => setValue("contact", e.target.value)}
            className={cn(inputClass, errors.contact && "border-signal")}
            placeholder="電郵、電話或 WhatsApp"
          />
          {errors.contact && (
            <p className="mt-2 text-[12px] text-signal">{errors.contact}</p>
          )}
        </div>
        <div>
          <label htmlFor="participants" className={labelClass}>
            學生／參與者人數
          </label>
          <input
            id="participants"
            name="participants"
            value={values.participants}
            onChange={(e) => setValue("participants", e.target.value)}
            className={inputClass}
            placeholder="例：約 30 人"
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>
            項目類型
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => setValue("projectType", e.target.value)}
            className={cn(inputClass, "appearance-none bg-void")}
          >
            <option value="">請選擇</option>
            {projectTypes.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            預算範圍
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) => setValue("budget", e.target.value)}
            className={cn(inputClass, "appearance-none bg-void")}
          >
            <option value="">請選擇</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="platform" className={labelClass}>
            現有機械人平台
          </label>
          <input
            id="platform"
            name="platform"
            value={values.platform}
            onChange={(e) => setValue("platform", e.target.value)}
            className={inputClass}
            placeholder="例：Unitree G1 EDU／未有平台"
          />
        </div>
        <div>
          <label htmlFor="startTime" className={labelClass}>
            希望開始的時間
          </label>
          <input
            id="startTime"
            name="startTime"
            value={values.startTime}
            onChange={(e) => setValue("startTime", e.target.value)}
            className={inputClass}
            placeholder="例：2026 年 9 月"
          />
        </div>
      </div>
      <div>
        <label htmlFor="goals" className={labelClass}>
          項目目標及備註
        </label>
        <textarea
          id="goals"
          name="goals"
          value={values.goals}
          onChange={(e) => setValue("goals", e.target.value)}
          rows={5}
          className={cn(inputClass, "resize-y")}
          placeholder="想解決的問題、現有條件、期望成果等"
        />
      </div>
      <div className="flex flex-col gap-3">
        <Button type="submit" size="lg" className="sm:self-start">
          <Send className="size-4" aria-hidden="true" />
          整理諮詢內容
        </Button>
        <p className="text-[12px] leading-relaxed text-steel/80">
          此步驟會整理你填寫的內容；在你自行複製或以電郵傳送之前，我們不會收到任何資料。
        </p>
      </div>
    </form>
  );
}
