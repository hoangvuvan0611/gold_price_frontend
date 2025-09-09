'use client';
import Image from "next/image";
import TradingViewWidget from "@/components/partner/tradingview";
import {useEffect, useState} from "react";
import {GoldCommonPrice, GoldPrice} from "@/models/goldCommonPrice";
import {sjcApi} from "@/services/sjcApi";
import {ApiResponseData} from "@/models/response";
import {toast} from "sonner";

export default function Home() {

  const [goldPrices, setGoldPrices] = useState<GoldPrice[]>([]);
  const [timeUpdateStr, setTimeUpdateStr] = useState<string>("");

  useEffect(() => {
    sjcApi.getCommonData().then((response: ApiResponseData<GoldCommonPrice>) => {
      if (response.success) {
        const data = response.data;
        console.log(data);
        setGoldPrices(data.goldPrices);
        setTimeUpdateStr(data.timeUpdateStr);
      } else {
        toast("Lỗi tải dữ liệu");
      }
    });
  }, []);

  return (
    <div className="min-h-screen mt-16">
      {/* Common price gold SJC*/}
      <div className={'flex items-center align-center'}>
        <div className={'text-2xl font-bold mr-4'}>
          *Giá vàng SJC
        </div>
        <div className={'font-normal text-sm text-lime-600 p-2 bg-gray-200 rounded-lg'}>
          {timeUpdateStr}
        </div>
      </div>

      <div className={'flex justify-between mb-10'}>
        {goldPrices?.map((item) => {
          return item.title === "Giá vàng Miếng"
            ? <div key={item.title} className="flex gap-6 p-4 ">
              <Image
                src="/gold_fine_sjc.png"
                alt="test"
                width={100}
                height={100}
                priority
                className="bg-gray-100 rounded-2xl p-2"
              />
              <div className="flex flex-col justify-between flex-1 py-4">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <div className="text-lg">
                  <div className="flex items-center space-x-2 cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                    <p>Mua vào:
                      <span className={'font-bold'}> {item.buyPrice + ".000"}</span>
                      <span className={'text-sm'}> VNĐ/Lượng</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                    <p>Bán ra:
                      <span className={'font-bold'}> {item.buyPrice + ".000"}</span>
                      <span className={'text-sm'}> VNĐ/Lượng</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            : <div key={item.title} className="flex gap-6 p-4 ">
              <Image
                src="/gold_ring_sjc.png"
                alt="test"
                width={100}
                height={100}
                priority
                className="bg-gray-100 rounded-2xl p-2"
              />
              <div className="flex flex-col justify-between flex-1 py-4">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <div className="text-lg">
                  <div className="flex items-center space-x-2 cursor-pointer">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p>Mua vào:
                    <span className={'font-bold'}> {item.buyPrice + ".000"}</span>
                    <span className={'text-sm'}> VNĐ/Lượng</span>
                  </p>
                </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <p>Bán ra:
                      <span className={'font-bold'}> {item.buyPrice + ".000"}</span>
                      <span className={'text-sm'}> VNĐ/Lượng</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>;
        })}
      </div>

      {/* XAUUSD */}
      <div className={'my-24'}>
        <div className={'text-2xl font-bold'}>
          *Biểu đồ xu hướng giá vàng thế giới
        </div>
        <TradingViewWidget symbol={"OANDA:XAUUSD|1D"}/>
      </div>


      {/* XAUUSD */}
      <div className={'my-24'}>
        <div className={'text-2xl font-bold'}>
          *Biểu đồ FOREX xu hướng tỷ giá VNĐ/USD
        </div>
        <TradingViewWidget symbol={"FX_IDC:USDVND|1D"}/>
      </div>

      <div className={'h-80'}>

      </div>
    </div>
  );
}
