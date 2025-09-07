export interface SjcChartData {
  seriesOptions: GoldSeries[];
  chartOptions: ChartOptions;
}

// types/gold.ts
export interface GoldPricePoint {
  timestamp: number;
  price: number;
}

export interface GoldSeries {
  name: string;
  data: [number, number][]; // [timestamp, price]
  tooltip: {
    valueDecimals: number;
  };
  shadow: boolean;
}

export interface ChartOptions {
  rangeSelector: {
    selected: number;
  };
  xAxis: {
    dateTimeLabelFormats: Record<string, string>;
  };
  yAxis: {
    labels: {
      formatter: () => string;
    };
    plotLines: Array<{
      value: number;
      width: number;
      color: string;
    }>;
  };
  plotOptions: {
    series: {
      showInNavigator: boolean;
    };
    line: {
      dataLabels: {
        enabled: boolean;
      };
    };
  };
  title: {
    text: string;
  };
  subtitle: {
    text: string;
    useHTML: boolean;
  };
  tooltip: {
    pointFormat: string;
    valueDecimals: number;
    dateTimeLabelFormats: Record<string, string>;
    split: boolean;
  };
  colors: string[];
  data: {
    dateFormat: string;
  };
  series: GoldSeries[];
}
