'use client';
import GoldRegionPriceTable from "@/components/layout/table/goldRegionPriceTable";
import {useEffect, useState} from "react";
import {GoldCommonPrice, GoldPrice, GoldRegionPrice} from "@/models/goldCommonPrice";
import {ApiResponseData} from "@/models/response";
import {toast} from "sonner";
import {btmcApi} from "@/services/btmcApi";
import GoldPriceHero from "@/components/custom/goldPriceHero";

export default function BTMCPage() {

  const [goldPrices, setGoldPrices] = useState<GoldPrice[]>([]);
  const [regionPrice, setRegionPrice] = useState<GoldRegionPrice>({goldRegionMap: {}});
  const [timeUpdateStr, setTimeUpdateStr] = useState<string>("");

  useEffect(() => {
    btmcApi.getCommonData().then((response: ApiResponseData<GoldCommonPrice>) => {
      debugger
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
    <div className="min-h-screen mt-16">

      <GoldPriceHero
        goldPrices={goldPrices}
        timeUpdateStr={timeUpdateStr}
        title={"Bảo Tín Minh Châu"}
        urlGoldBar={'/gold_logo.png'}
        urlGoldRing={'/gold_ring.png'}
      />

      <div className={'mt-12 sm:mt-16 lg:mt-36'}>
        <GoldRegionPriceTable titleTable={'BẢO TÍN MINH CHÂU'} goldRegionPrice={regionPrice} timeUpdateStr={timeUpdateStr}/>
      </div>

      <div className={'h-20 sm:h-40'}></div>
    </div>
  );
}
