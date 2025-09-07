// components/SjcChart.tsx
"use client";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {useEffect, useState} from "react";
import {ApiResponseData, sjcApi} from "@/services/sjcApi";
import {ChartOptions, GoldSeries, SjcChartData} from "@/models/sjcChartData";

Highcharts.setOptions({
  lang: {
    loading: "Đang tải...",
    months: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    weekdays: [
      "Thứ 2",
      "Thứ 3",
      "Thứ 4",
      "Thứ 5",
      "Thứ 6",
      "Thứ 7",
      "Chủ Nhật",
    ],
    shortMonths: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
  },
});

export default function SjcChart() {
  const [options, setOptions] = useState<ChartOptions | null>(null);


  useEffect(() => {
    sjcApi.getSJCChartData().then((response: ApiResponseData<SjcChartData>) => {
      if (response.success) {
        const series = response.data.seriesOptions;
        const optionsValue = response.data.chartOptions;
        optionsValue.yAxis.labels.formatter =  eval("(" + "function () {\n" +
          "          return this.value + \"\";\n" +
          "        }" + ")");
        setOptions({
          ...optionsValue,
          series: series
        });
      }
    });
  }, []);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={options}
    />
  );
}
