// components/SjcChart.tsx
"use client";

import Highcharts, {SeriesOptionsType, YAxisOptions} from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import {useEffect, useState} from "react";
import {sjcApi} from "@/services/sjcApi";
import {GoldSeries, SjcChartData} from "@/models/sjcChartData";
import {ApiResponseData} from "@/models/response";

// Thiết lập ngôn ngữ tiếng Việt toàn diện
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
      "Chủ Nhật",
      "Thứ 2",
      "Thứ 3",
      "Thứ 4",
      "Thứ 5",
      "Thứ 6",
      "Thứ 7",
    ],
    shortMonths: [
      "Thg 1",
      "Thg 2",
      "Thg 3",
      "Thg 4",
      "Thg 5",
      "Thg 6",
      "Thg 7",
      "Thg 8",
      "Thg 9",
      "Thg 10",
      "Thg 11",
      "Thg 12",
    ],
    shortWeekdays: [
      "CN",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7",
    ],
    // Cài đặt cho datepicker
    rangeSelectorFrom: "Từ",
    rangeSelectorTo: "Đến",

    // Tooltip và các text khác
    noData: "Không có dữ liệu",
    resetZoom: "Đặt lại thu phóng",
    resetZoomTitle: "Đặt lại thu phóng về 1:1",
    thousandsSep: ".",
    decimalPoint: ",",

    // Navigation và buttons
    printChart: "In biểu đồ",
    downloadPNG: "Tải PNG",
    downloadJPEG: "Tải JPEG",
    downloadPDF: "Tải PDF",
    downloadSVG: "Tải SVG",
    viewFullscreen: "Xem toàn màn hình"
  }
});

const CUSTOM_COLORS = [
  // '#FF6B6B', // Đỏ cam
  // '#4ECDC4', // Xanh ngọc
  // '#45B7D1', // Xanh dương
  // '#FFA07A', // Cam nhạt
  // '#98D8C8', // Xanh lá nhạt
  // '#F7DC6F', // Vàng
  // '#BB8FCE', // Tím
  // '#85C1E9', // Xanh dương nhạt
  // '#F8C471', // Cam
  // '#82E0AA', // Xanh lá
];

export default function SjcChart() {
  const [isMobile, setIsMobile] = useState(false);
  const [options, setOptions] = useState<Highcharts.Options>({
    chart: {
      height: 600,
      spacingRight: 60,
    }
  });

  // Hàm kiểm tra kích thước màn hình
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    sjcApi.getSJCChartData().then((response: ApiResponseData<SjcChartData>) => {
      if (response.success) {
        const series = response.data.seriesOptions;
        const optionsValue = response.data.chartOptions;

        // CẤU HÌNH MÀU SẮC VÀ KÍCH THƯỚC ĐƯỜNG LINE
        const customizedSeries = series.map((serie: GoldSeries, index: number) => ({
          ...serie,
          // Chọn màu từ mảng custom colors, nếu hết màu thì dùng màu mặc định
          // color: CUSTOM_COLORS[index] || serie.color,

          // Điều chỉnh độ dày đường line
          lineWidth: isMobile ? 1 : 2, // Dày hơn trên desktop

          // Tuỳ chỉnh marker (điểm trên line)
          marker: {
            enabled: false, // Tắt marker cho tất cả điểm
            radius: isMobile ? 0.5 : 1, // Kích thước marker
            symbol: 'circle', // Hình dạng marker
            lineWidth: 0.5,
            lineColor: '#ffffff',
            // fillColor: CUSTOM_COLORS[index] || serie.color,
          },

          // Tuỳ chỉnh trạng thái khi hover
          states: {
            hover: {
              lineWidth: isMobile ? 1.5 : 2.5, // Đường line dày hơn khi hover
              marker: {
                enabled: true,
                radius: isMobile ? 2.5 : 3.5, // Marker to hơn khi hover
              }
            }
          },

          // Tuỳ chỉnh tooltip cho từng series
          tooltip: {
            valueDecimals: 2,
            valueSuffix: ' triệu',
          }
        }));

        // Xác định khoảng thời gian mặc định
        const defaultRange = isMobile ? 1 : 5;

        // Tạo buttons cho range selector
        const buttons = [
          {
            type: 'month' as const,
            count: 1,
            text: '1 tháng',
          },
          {
            type: 'month' as const,
            count: 2,
            text: '2 tháng',
          },
          {
            type: 'month' as const,
            count: 3,
            text: '3 tháng',
          },
          {
            type: 'month' as const,
            count: 6,
            text: '6 tháng',
          },
          {
            type: 'year' as const,
            count: 12,
            text: '1 năm',
          },
          {
            type: 'all' as const,
            text: 'Tất cả',
          },
        ];

        // Cấu hình range selector với datepicker tiếng Việt
        const rangeSelectorConfig = {
          ...optionsValue.rangeSelector,
          selected: defaultRange,
          buttonSpacing: isMobile ? 10 : 20,
          buttonTheme: {
            width: isMobile ? 60 : 70,
            r: 4,
          },
          buttons: buttons,
          inputEnabled: true, // Bật datepicker
          inputDateFormat: '%d/%m/%Y', // Định dạng ngày tháng Việt Nam
          inputEditDateFormat: '%d/%m/%Y', // Định dạng khi chỉnh sửa
        };

        // Cấu hình tooltip với định dạng ngày tháng tiếng Việt
        const tooltipConfig = {
          ...optionsValue.tooltip,
          xDateFormat: '%A, %d/%m/%Y', // Thứ, ngày/tháng/năm
        };

        setOptions({
          chart: {
            height: 600,
            spacingRight: isMobile ? 35 : 60,
            events: {
              load: function () {
                const series = this.series[0];
                const lastPoint = series.data[series.data.length - 1];

                // Bật marker cho point cuối
                lastPoint.update({
                  marker: {
                    enabled: true,
                    radius: 6,
                    fillColor: 'red',
                    lineWidth: 2,
                    lineColor: '#fff'
                  }
                });
              }
            }
          },
          rangeSelector: rangeSelectorConfig,
          navigator: {
            xAxis: {
              overscroll: 10 * 24 * 3600 * 1000 // Đồng bộ với main chart
            }
          },
          xAxis: {
            ...optionsValue.xAxis,
            overscroll: 10 * 24 * 3600 * 1000, // 10 ngày khoảng trống
            minRange: 7 * 24 * 3600 * 1000, // Tối thiểu 7 ngày
            dateTimeLabelFormats: {
              day: '%d/%m',
              week: '%d/%m/%Y',
              month: '%m/%Y',
              year: '%Y'
            },
            tickAmount: 1,
            tickInterval: 5,
            labels: {
              style: {
                fontSize: isMobile ? '9px' : '11px'
              },
            }
          },
          yAxis: {
            ...optionsValue.yAxis as YAxisOptions,
            tickAmount: 5,
            tickInterval: 5,
            opposite: true,
            minPadding: 0,
            labels: {
              align: "right",
              x: isMobile ? 35 : 60,
              formatter: eval("(" + "function () {\n" +
                "          return this.value + '" + (isMobile ? "tr" : " triệu") + "';\n" +
                "        }" + ")")
            }
          },
          legend: {
            enabled: false,
            verticalAlign: 'top',
            layout: 'vertical',
          },
          plotOptions: {
            ...optionsValue.plotOptions,
            series: {
              ...optionsValue.plotOptions?.series,
              marker: {
                enabled: true,
                enabledThreshold: 1, // Chỉ hiển thị marker cho điểm cuối
              }
            }
          },
          title: optionsValue.title,
          subtitle: optionsValue.subtitle,
          tooltip: tooltipConfig,
          colors: optionsValue.colors,
          series: customizedSeries as unknown as SeriesOptionsType[],
        });
      }
    });
  }, [isMobile]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={options}
    />
  );
}
