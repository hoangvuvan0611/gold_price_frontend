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
    <div>
      <div className={'flex items-center align-center'}>
        <div className={'text-2xl font-bold mr-4'}>
          *Giá vàng {title}
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
                src={urlGoldBar}
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
                      <span className={'font-bold'}> {item.sellPrice + ".000"}</span>
                      <span className={'text-sm'}> VNĐ/Lượng</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            : <div key={item.title} className="flex gap-6 p-4 ">
              <Image
                src={urlGoldRing}
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
                      <span className={'font-bold'}> {item.sellPrice + ".000"}</span>
                      <span className={'text-sm'}> VNĐ/Lượng</span>
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
