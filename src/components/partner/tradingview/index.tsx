"use client";

import { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  symbol: string; // ví dụ "OANDA:USDVND" hoặc "OANDA:XAUUSD"
}

function TradingViewWidget({symbol}: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    // Clear container để tránh load trùng nhiều lần
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "lineWidth": 2,
        "lineType": 0,
        "chartType": "area",
        "fontColor": "rgb(106, 109, 120)",
        "gridLineColor": "rgba(46, 46, 46, 0.06)",
        "volumeUpColor": "rgba(34, 171, 148, 0.5)",
        "volumeDownColor": "rgba(247, 82, 95, 0.5)",
        "backgroundColor": "#ffffff",
        "widgetFontColor": "#0F0F0F",
        "upColor": "#22ab94",
        "downColor": "#f7525f",
        "borderUpColor": "#22ab94",
        "borderDownColor": "#f7525f",
        "wickUpColor": "#22ab94",
        "wickDownColor": "#f7525f",
        "colorTheme": "light",
        "isTransparent": true,
        "locale": "vi_VN",
        "chartOnly": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "Roboto, -apple-system, BlinkMacSystemFont, Trebuchet MS, Ubuntu, sans-serif",
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "symbols": [
          [
            "${symbol}"
          ]
        ],
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ],
        "fontSize": "10",
        "headerFontSize": "medium",
        "autosize": false,
        "dateFormat": "dd/MM/yyyy",
        "width": "100%",
        "height": "600",
        "noTimeScale": false,
        "hideDateRanges": false,
        "hideMarketStatus": true,
        "hideSymbolLogo": false
      }`;

    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container w-full h-[1000px]" // 👈 set chiều cao
      ref={container}
    >
      <div className="tradingview-widget-container__widget" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://vn.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-blue-500">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
