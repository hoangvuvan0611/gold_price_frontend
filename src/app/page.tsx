import Image from "next/image";
import TradingViewWidget from "@/components/partner/tradingview";

export default function Home() {
  return (
    <div className="min-h-screen mt-16">
      {/* Common price gold SJC*/}
      <div className={'flex justify-between mb-10'}>
        <div className="flex gap-6 p-4 ">
          <Image
            src="/gold_fine_sjc.png"
            alt="test"
            width={120}
            height={120}
            priority
            className="bg-gray-100 rounded-2xl p-2"
          />
          <div className="flex flex-col justify-between flex-1 py-4">
            <h1 className="text-3xl font-bold">Vàng miếng SJC</h1>
            <div className="text-lg">
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p>Mua vào: 123.000.000đ</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <p>Bán ra: 123.000.000đ</p>
              </div>
              <p className="text-xs text-gray-500">Giá được cập nhật lúc: 12h</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6 p-4 ">
          <Image
            src="/gold_ring_sjc.png"
            alt="test"
            width={120}
            height={120}
            priority
            className="bg-gray-100 rounded-2xl p-2"
          />
          <div className="flex flex-col justify-between flex-1 py-4">
            <h1 className="text-3xl font-bold">Vàng nhẫn SJC</h1>
            <div className="text-lg">
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p>Mua vào: 123.000.000đ</p>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <p>Bán ra: 123.000.000đ</p>
              </div>
              <p className="text-xs text-gray-500">Giá được cập nhật lúc: 12h</p>
            </div>
          </div>
        </div>
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
