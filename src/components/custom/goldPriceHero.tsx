import Image from "next/image";
import {GoldPrice} from "@/models/goldCommonPrice";

interface Props {
  title: string;
  timeUpdateStr: string;
  goldPrices: GoldPrice[];
  urlGoldBar: string;
  urlGoldRing: string;
}

export default function GoldPriceHero({ title, timeUpdateStr, goldPrices, urlGoldRing, urlGoldBar }: Props ) {
  return (
    <div className="">
      <div className={'flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-6'}>
        <div className={'text-xl sm:text-2xl font-bold'}>
          *Giá vàng {title}
        </div>
        <div className={'font-normal text-xs sm:text-sm text-lime-600 p-2 bg-gray-200 rounded-lg'}>
          {timeUpdateStr}
        </div>
      </div>

      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-10'}>
        {goldPrices?.map((item) => {
          return item.title === "Giá vàng Miếng"
            ? <div key={item.title} className="flex sm:flex-row gap-4 bg-white rounded-2xl">
              <Image
                src={urlGoldBar}
                alt="test"
                width={100}
                height={100}
                priority
                className="bg-gray-100 rounded-2xl p-2 mx-auto sm:mx-0"
              />
              <div className="flex flex-col justify-between flex-1 py-1">
                <h1 className="text-xl sm:text-2xl font-bold text-left">{item.title}</h1>
                <div className="text-base sm:text-lg space-y-2">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-sm sm:text-base">Mua vào:
                      <span className={'font-bold'}> {item.buyPrice + ".000"}</span>
                      <span className={'text-xs sm:text-sm'}> VNĐ/Lượng</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <p className="text-sm sm:text-base">Bán ra:
                      <span className={'font-bold'}> {item.sellPrice + ".000"}</span>
                      <span className={'text-xs sm:text-sm'}> VNĐ/Lượng</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            : <div key={item.title} className="flex sm:flex-row gap-4 bg-white rounded-2xl">
              <Image
                src={urlGoldRing}
                alt="test"
                width={100}
                height={100}
                priority
                className="bg-gray-100 rounded-2xl p-2 mx-auto sm:mx-0"
              />
              <div className="flex flex-col justify-between flex-1 py-1">
                <h1 className="text-xl sm:text-2xl font-bold text-left">{item.title}</h1>
                <div className="text-base sm:text-lg space-y-2">
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-sm sm:text-base">Mua vào:
                      <span className={'font-bold'}> {item.buyPrice + ".000"}</span>
                      <span className={'text-xs sm:text-sm'}> VNĐ/Lượng</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <p className="text-sm sm:text-base">Bán ra:
                      <span className={'font-bold'}> {item.sellPrice + ".000"}</span>
                      <span className={'text-xs sm:text-sm'}> VNĐ/Lượng</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>;
        })}
      </div>
    </div>
  );
}
