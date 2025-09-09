'use client';

import {memo, useEffect, useRef} from "react";

function TradingViewAdvanceWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    // Clear container để tránh load trùng nhiều lần
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "allow_symbol_change": true,
        "calendar": false,
        "details": false,
        "hide_side_toolbar": true,
        "hide_top_toolbar": false,
        "hide_legend": false,
        "hide_volume": false,
        "hotlist": false,
        "interval": "D",
        "locale": "vi_VN",
        "save_image": true,
        "style": "1",
        "symbol": "OANDA:XAUUSD",
        "theme": "light",
        "timezone": "Etc/UTC",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "gridColor": "rgba(156, 156, 156, 0.06)",
        "watchlist": [],
        "withdateranges": false,
        "compareSymbols": [],
        "studies": [],
        "autosize": true,
        "width": "100%",
        "height": "600"
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

export default memo(TradingViewAdvanceWidget);
