import type { MediaSlotKey } from "./media";

export interface Capability {
  index: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  media: MediaSlotKey;
  span: "wide" | "narrow";
}

export const capabilities: Capability[] = [
  {
    index: "01",
    label: "機械設計與動力學",
    title: "機械設計與動力學",
    description:
      "研究機械結構、關節配置、執行器、動力學與機械人運動的物理基礎。",
    tags: ["機構", "執行器", "動力學"],
    media: "mechanicalDesign",
    span: "wide",
  },
  {
    index: "02",
    label: "運動控制",
    title: "運動控制",
    description:
      "透過控制器設計、平衡控制、步態規劃及回饋系統，研究如何讓機械人穩定地執行指定動作。",
    tags: ["平衡", "步態", "回饋控制"],
    media: "robotControl",
    span: "narrow",
  },
  {
    index: "03",
    label: "強化學習",
    title: "強化學習",
    description:
      "建立訓練環境、學習控制策略及評估機械人在不同條件下的運動表現。",
    tags: ["訓練環境", "控制策略", "評估"],
    media: "reinforcementLearning",
    span: "narrow",
  },
  {
    index: "04",
    label: "模擬到實機與系統整合",
    title: "模擬到實機與系統整合",
    description:
      "將模擬中的控制策略部署到真實機械人，整合感測器、嵌入式控制、通訊與實機測試。",
    tags: ["部署", "嵌入式", "實機測試"],
    media: "simToReal",
    span: "wide",
  },
];
