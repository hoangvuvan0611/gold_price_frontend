export interface GoldWorldPrice {
  currentPrice: string;
  unit: string;
  change: string;
  changePercent: string;
  lastUpdate: string;
  priceInVND: string;
  pricePerTael: string;
  descriptions: string[];
  charts: Record<string, string>;
}
