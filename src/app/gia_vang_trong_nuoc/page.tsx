'use client'
import Image from "next/image";
import {useState} from "react";

type TabItem = {
  id: string;
  title: string;
  image: string;
};

const tabs: TabItem[] = [
  { id: "sjc", title: "SJC", image: "/domestic_logo/SJC_logo.png" },
  { id: "doji", title: "DOJI", image: "/domestic_logo/DOJI_logo.png" },
  { id: "pnj", title: "PNJ", image: "/domestic_logo/PNJ_logo.png" },
  { id: "btmc", title: "Bảo Tín Minh Châu", image: "/domestic_logo/BTMC_logo.png" },
  { id: "btmh", title: "Bảo Tín Mạnh Hải", image: "/domestic_logo/BTMH_logo.png" },
  { id: "pq", title: "Phú Quý", image: "/domestic_logo/PQ_logo.png" },
  { id: "mh", title: "Mi Hồng", image: "/domestic_logo/MH_logo.png" },
  { id: "nt", title: "Ngọc Thẩm", image: "/domestic_logo/NT_logo.png" },
];



export default function GoldDomestic() {

  const [active, setActive] = useState("sjc");

    return (
      <div className="min-h-screen mt-16">

        {/* Danh sach cac tab thuong hieu vang trong nuoc */}
        <div className="w-full max-w-5xl mx-auto mb-24">
          {/* Danh sách tab */}
          <div className="flex gap-4 border-b border-gray-200 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center px-4 py-2 rounded-lg transition 
              ${active === tab.id ? "bg-gray-100 border-b-2 border-blue-500" : "hover:bg-gray-50"}`}
              >
                <Image src={tab.image} alt={tab.title} width={40} height={40} className={'w-10 h-10 object-contain rounded-sm'} />
                <span className="text-sm font-bold mt-1">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Common price gold SJC*/}
        <div className={'text-2xl font-bold'}>
          *Giá vàng SJC
        </div>
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

        <div className={'h-80'}>

        </div>
      </div>
    );
}
