'use client';
import GoldRegionPriceTable from "@/components/layout/table/goldRegionPriceTable";
import {useEffect, useState} from "react";
import {GoldCommonPrice, GoldPrice, GoldRegionPrice} from "@/models/goldCommonPrice";
import {ApiResponseData} from "@/models/response";
import {toast} from "sonner";
import {pnjApi} from "@/services/pnjApi";
import GoldPriceHero from "@/components/custom/goldPriceHero";

export default function PNJPage() {

  const [goldPrices, setGoldPrices] = useState<GoldPrice[]>([]);
  const [regionPrice, setRegionPrice] = useState<GoldRegionPrice>({goldRegionMap: {}});
  const [timeUpdateStr, setTimeUpdateStr] = useState<string>("");

  useEffect(() => {
    pnjApi.getCommonData().then((response: ApiResponseData<GoldCommonPrice>) => {
      if (response.success) {
        const data = response.data;
        console.log(data);
        setGoldPrices(data.goldPrices);
        setTimeUpdateStr(data.timeUpdateStr);
        setRegionPrice(data.goldRegionPrice);
      } else {
        toast("Lỗi tải dữ liệu")
      }
    });
  }, []);

  return (
    <div className="min-h-screen mt-5 sm:mt-16">

      <GoldPriceHero
        goldPrices={goldPrices}
        timeUpdateStr={timeUpdateStr}
        title={"PNJ"}
        urlGoldBar={'/gold_logo.png'}
        urlGoldRing={'/gold_ring.png'}
      />

      <div className={'mt-12 sm:mt-16 lg:mt-36'}>
        <GoldRegionPriceTable titleTable={'PNJ'} goldRegionPrice={regionPrice} timeUpdateStr={timeUpdateStr}/>
      </div>

      <div className={'h-20 sm:h-40'}></div>
    </div>
  );
}
