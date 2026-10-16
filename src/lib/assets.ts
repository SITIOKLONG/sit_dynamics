import { existsSync } from "node:fs";
import path from "node:path";

export function publicAssetExists(
  publicPath: string | null | undefined,
): boolean {
  if (!publicPath) return false;
  const cleaned = publicPath.replace(/^\//, "");
  if (cleaned.includes("..")) return false;
  return existsSync(path.join(process.cwd(), "public", cleaned));
}
