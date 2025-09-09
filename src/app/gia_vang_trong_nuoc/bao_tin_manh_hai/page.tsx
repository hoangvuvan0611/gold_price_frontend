'use client';
import GoldRegionPriceTable from "@/components/layout/table/goldRegionPriceTable";
import {useEffect, useState} from "react";
import {GoldCommonPrice, GoldPrice, GoldRegionPrice} from "@/models/goldCommonPrice";
import {ApiResponseData} from "@/models/response";
import {toast} from "sonner";
import {btmhApi} from "@/services/btmhApi";
import GoldPriceHero from "@/components/custom/goldPriceHero";

export default function BTMHPage() {

  const [goldPrices, setGoldPrices] = useState<GoldPrice[]>([]);
  const [regionPrice, setRegionPrice] = useState<GoldRegionPrice>({goldRegionMap: {}});
  const [timeUpdateStr, setTimeUpdateStr] = useState<string>("");

  useEffect(() => {
    btmhApi.getCommonData().then((response: ApiResponseData<GoldCommonPrice>) => {
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
        title={"Bảo Tín Mạnh Hải"}
        urlGoldBar={'/gold_logo.png'}
        urlGoldRing={'/gold_ring.png'}
      />

      <div className={'mt-36'}>
        <GoldRegionPriceTable titleTable={'BẢO TÍN MẠNH HẢI'} goldRegionPrice={regionPrice} timeUpdateStr={timeUpdateStr}/>
      </div>

      <div className={'h-40'}></div>
    </div>
  );
}
