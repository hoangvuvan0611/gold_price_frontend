// components/SjcChart.tsx
"use client";

import Highcharts, {SeriesOptionsType, YAxisOptions} from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {useEffect, useRef, useState} from "react";
import {ApiResponseData, sjcApi} from "@/services/sjcApi";
import {ChartOptions, SjcChartData} from "@/models/sjcChartData";

Highcharts.setOptions({
  lang: {
    loading: "Đang tải...",
    rangeSelectorZoom: "Khoảng: ",
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
  const [options, setOptions] = useState<Highcharts.Options>({
    chart: {
      height: 600,
      spacingRight: 60,
    }
  });

  useEffect(() => {
    sjcApi.getSJCChartData().then((response: ApiResponseData<SjcChartData>) => {
      if (response.success) {
        const series = response.data.seriesOptions;
        const optionsValue = response.data.chartOptions;
        optionsValue.yAxis.labels.formatter =  eval("(" + "function () {\n" +
          "          return this.value + ' triệu';\n" +
          "        }" + ")");

        // So luong gia tri hien thi o truc y
        optionsValue.yAxis.tickAmount = 5;
        optionsValue.yAxis.tickInterval = 5;
        optionsValue.yAxis.opposite = true;
        optionsValue.yAxis.reserveSpace = true;
        optionsValue.yAxis.labels.align = 'right';
        optionsValue.yAxis.labels.x = 60;
        optionsValue.series = series;

        // optionsValue.chart.marginRight = 30;

        setOptions({
          ...options,
          rangeSelector: {
            ...optionsValue.rangeSelector,
            buttonSpacing: 20,
            buttonTheme: {
              width: 70,
              r: 4,
            },
            buttons: [
              {
                type: 'month',
                count: 1,
                text: '1 tháng', // tiếng Việt
              },
              {
                type: 'month',
                count: 3,
                text: '3 tháng',
              },
              {
                type: 'month',
                count: 6,
                text: '6 tháng',
              },
              {
                type: 'year',
                count: 12,
                text: '1 năm',
              },
              {
                type: 'all',
                text: 'Tất cả',
              },
            ],
          },
          xAxis: optionsValue.xAxis,
          yAxis: optionsValue.yAxis as YAxisOptions,
          plotOptions: optionsValue.plotOptions,
          title: optionsValue.title,
          subtitle: optionsValue.subtitle,
          tooltip: optionsValue.tooltip,
          colors: optionsValue.colors,
          series: series as SeriesOptionsType[],
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
