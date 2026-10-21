export const projectTypes = [
  "工作坊與示範",
  "工程試點",
  "雙足開發套件",
  "研發教育計劃",
  "旗艦研發項目",
  "其他",
] as const;

export const budgetRanges = [
  "50,000 港元以下",
  "50,000–100,000 港元",
  "100,000–300,000 港元",
  "300,000–1,000,000 港元",
  "1,000,000 港元或以上",
  "尚未確定",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type BudgetRange = (typeof budgetRanges)[number];
