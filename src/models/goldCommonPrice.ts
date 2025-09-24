export interface GoldCommonPrice {
  goldPrices: GoldPrice[];
  goldRegionPrice: GoldRegionPrice;
  timeUpdateStr: string;
}

export interface GoldPrice {
  title: string;
  unit: string;
  buyPrice: string;
  sellPrice: string;
  sellDescription: string;
  buyDescription: string;
  updateTime: string;
}

export interface GoldRegionPrice {
  goldRegionMap: Record<string, GoldRegionDetailPrice[]>;
}


export interface GoldRegionDetailPrice {
  region: string;
  title: string;
  buy: string;
  sell: string;
}
