'use client';
import Image from "next/image";
import SjcChart from "@/components/partner/webgia/sjcChar";
import GoldRegionPriceTable from "@/components/layout/table/goldRegionPriceTable";
import {GoldCommonPrice, GoldPrice, GoldRegionDetailPrice} from "@/models/goldCommonPrice";
import {useEffect, useState} from "react";
import {ApiResponseData, sjcApi} from "@/services/sjcApi";

export default function GoldDomestic() {

  const [goldPrices, setGoldPrices] = useState<GoldPrice[]>([]);
  const [regionPrices, setRegionPrices] = useState<GoldRegionDetailPrice[]>([]);

  useEffect(() => {
    sjcApi.getCommonData().then((response: ApiResponseData<GoldCommonPrice>) => {
      debugger
      if (response.success) {
        const data = response.data;
        console.log(data);
        setGoldPrices(data.goldPrices);

      } else {

      }
    })
  }, []);

  return (
    <div className="min-h-screen mt-16">

      {/* Common price gold SJC*/}
      <div className={'text-2xl font-bold'}>
        *Giá vàng SJC
      </div>
      <div className={'flex justify-between mb-10'}>
        {goldPrices?.map((item) => {
          return item.title === "Giá vàng Miếng"
            ? <div className="flex gap-6 p-4 ">
            <Image
              src="/gold_fine_sjc.png"
              alt="test"
              width={120}
              height={120}
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
                  <p>Mua vào: {item.buyPrice}</p>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
                  <p>Bán ra: {item.sellPrice}</p>
                </div>
                <p className="text-xs text-gray-500">Giá được cập nhật lúc: 12h</p>
              </div>
            </div>
          </div>
            : <div className="flex gap-6 p-4 ">
            <Image
              src="/gold_ring_sjc.png"
              alt="test"
              width={120}
              height={120}
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
                  <p>Mua vào: {item.buyPrice}</p>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
                  <p>Bán ra: {item.sellPrice}</p>
                </div>
                <p className="text-xs text-gray-500">Giá được cập nhật lúc: 12h</p>
              </div>
            </div>
          </div>;
        })}
      </div>
      {/*<div className={'flex justify-between mb-10'}>*/}
      {/*  <div className="flex gap-6 p-4 ">*/}
      {/*    <Image*/}
      {/*      src="/gold_fine_sjc.png"*/}
      {/*      alt="test"*/}
      {/*      width={120}*/}
      {/*      height={120}*/}
      {/*      priority*/}
      {/*      className="bg-gray-100 rounded-2xl p-2"*/}
      {/*    />*/}
      {/*    <div className="flex flex-col justify-between flex-1 py-4">*/}
      {/*      <h1 className="text-3xl font-bold">Vàng miếng SJC</h1>*/}
      {/*      <div className="text-lg">*/}
      {/*        <div className="flex items-center space-x-2 cursor-pointer">*/}
      {/*        <span className="relative flex h-3 w-3">*/}
      {/*          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>*/}
      {/*          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>*/}
      {/*        </span>*/}
      {/*          <p>Mua vào: 123.000.000đ</p>*/}
      {/*        </div>*/}
      {/*        <div className="flex items-center space-x-2 cursor-pointer">*/}
      {/*        <span className="relative flex h-3 w-3">*/}
      {/*          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>*/}
      {/*          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>*/}
      {/*        </span>*/}
      {/*          <p>Bán ra: 123.000.000đ</p>*/}
      {/*        </div>*/}
      {/*        <p className="text-xs text-gray-500">Giá được cập nhật lúc: 12h</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="flex gap-6 p-4 ">*/}
      {/*    <Image*/}
      {/*      src="/gold_ring_sjc.png"*/}
      {/*      alt="test"*/}
      {/*      width={120}*/}
      {/*      height={120}*/}
      {/*      priority*/}
      {/*      className="bg-gray-100 rounded-2xl p-2"*/}
      {/*    />*/}
      {/*    <div className="flex flex-col justify-between flex-1 py-4">*/}
      {/*      <h1 className="text-3xl font-bold">Vàng nhẫn SJC</h1>*/}
      {/*      <div className="text-lg">*/}
      {/*        <div className="flex items-center space-x-2 cursor-pointer">*/}
      {/*        <span className="relative flex h-3 w-3">*/}
      {/*          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>*/}
      {/*          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>*/}
      {/*        </span>*/}
      {/*          <p>Mua vào: 123.000.000đ</p>*/}
      {/*        </div>*/}
      {/*        <div className="flex items-center space-x-2 cursor-pointer">*/}
      {/*        <span className="relative flex h-3 w-3">*/}
      {/*          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>*/}
      {/*          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>*/}
      {/*        </span>*/}
      {/*          <p>Bán ra: 123.000.000đ</p>*/}
      {/*        </div>*/}
      {/*        <p className="text-xs text-gray-500">Giá được cập nhật lúc: 12h</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="mt-36">
        <div className={'text-2xl font-bold mb-12'}>
          *Biểu đồ giá vàng SJC
        </div>
        <SjcChart/>
      </div>

      <div className={'mt-36'}>
        <GoldRegionPriceTable/>
      </div>

      <div className={'h-40'}></div>
    </div>
  );
}
