"use client";
import React, {useEffect, useState} from "react";
import {GoldRegionDetailPrice, GoldRegionPrice} from "@/models/goldCommonPrice";

const goldPrices = [
  { region: "Hà Nội", type: "SJC Lẻ", buy: "133.100", sell: "135.100" },
  { region: "", type: "AVPL", buy: "133.100", sell: "135.100" },
  { region: "", type: "Nhẫn tròn 999 Hưng Thịnh Vượng", buy: "127.700", sell: "130.700" },
  { region: "", type: "Nữ trang 99.99", buy: "126.200", sell: "129.200" },
  { region: "", type: "Nữ trang 99.9", buy: "126.100", sell: "129.100" },
  { region: "", type: "Nữ trang 99", buy: "125.400", sell: "128.750" },

  { region: "Đà Nẵng", type: "SJC Lẻ", buy: "133.100", sell: "135.100" },
  { region: "", type: "AVPL", buy: "133.100", sell: "135.100" },
  { region: "", type: "Nhẫn tròn 999 Hưng Thịnh Vượng", buy: "127.700", sell: "130.700" },
  { region: "", type: "Nữ trang 99.99", buy: "126.200", sell: "129.200" },
];

interface Props {
  titleTable: string;
  goldRegionPrice: GoldRegionPrice,
  timeUpdateStr: string;
}

export default function GoldRegionPriceTable({ titleTable, goldRegionPrice, timeUpdateStr }: Props) {

  const [regionPriceList, setRegionPriceList] = useState<GoldRegionDetailPrice[]>([]);

  useEffect(() => {
    const regionList: GoldRegionDetailPrice[] = [];

    Object.entries(goldRegionPrice.goldRegionMap).forEach(([region, prices]) => {
      prices.forEach((p, idx) => {
        regionList.push({
          region: idx === 0 ? region : "", // chỉ hiện tên khu vực ở dòng đầu
          title: p.title,
          buy: p.buy,
          sell: p.sell,
        });
      });
    });

    setRegionPriceList(regionList);
  }, [goldRegionPrice]);

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full bg-white rounded-2xl  overflow-hidden">
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-gray-50 border-b border-gray-200">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 text-center sm:text-left">
            BẢNG GIÁ VÀNG
             <span className={'text-lime-600 font-bold'}> {titleTable} </span>
            TẠI CÁC KHU VỰC TRÊN CẢ NƯỚC
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 text-center sm:text-left">{timeUpdateStr}</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-gray-700 min-w-[600px]">
            <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-600 text-xs sm:text-sm">Khu vực</th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-600 text-xs sm:text-sm">Loại vàng</th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-600 text-right text-xs sm:text-sm">Mua vào</th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-600 text-right text-xs sm:text-sm">Bán ra</th>
            </tr>
            </thead>
            <tbody>
            {regionPriceList?.map((item, i) => (
              <tr
                key={i}
                className={`hover:bg-gray-50 transition-colors ${
                  i !== goldPrices.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <td className={`px-3 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm ${item.region ? "text-blue-600" : "text-gray-500"}`}>
                  {item.region}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                  {item.title}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-red-500 font-medium text-right text-xs sm:text-sm">{item.buy + '.000'}</td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 text-green-600 font-medium text-right text-xs sm:text-sm">{item.sell + '.000'}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200 text-center text-xs sm:text-sm text-gray-500">
          Đơn vị: Việt Nam đồng / lượng | Giá chỉ mang tính tham khảo
        </div>
      </div>
    </div>
  );
}
