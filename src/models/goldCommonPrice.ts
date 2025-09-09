export interface GoldCommonPrice {
  goldPrices: GoldPrice[];
  goldRegionPrice: GoldRegionPrice;
}

export interface GoldPrice {
  title: string;
  unit: string;
  buyPrice: string;
  sellPrice: string;
}

export interface GoldRegionPrice {
  goldRegionMap: Record<string, GoldRegionDetailPrice[]>;
}


export interface GoldRegionDetailPrice {
  title: string;
  buy: string;
  sell: string;
}
