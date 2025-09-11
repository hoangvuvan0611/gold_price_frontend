"use client";
import React, {useEffect, useState} from "react";
import {GoldRegionDetailPrice, GoldRegionPrice} from "@/models/goldCommonPrice";

interface Props {
  titleTable: string;
  goldRegionPrice: GoldRegionPrice,
  timeUpdateStr: string;
}

export default function GoldRegionPriceTable({ titleTable, goldRegionPrice, timeUpdateStr }: Props) {

  const [regionPriceList, setRegionPriceList] = useState<GoldRegionDetailPrice[]>([]);
  const [isMobile, setIsMobile] = useState(false);

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

    // Kiểm tra kích thước màn hình
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, [goldRegionPrice]);

  // Hàm định dạng số tiền cho dễ đọc
  const formatPrice = (price: string, isMobile: boolean) => {
    if (!isMobile) {
      return price + '.000';
    }

    // Chuyển đổi thành triệu và làm tròn 2 chữ số thập phân
    const numValue = parseInt(price.replace(/\./g, ''));
    if (isNaN(numValue)) return price;

    const millionValue = numValue / 100;
    return millionValue.toFixed(2).replace('.', ',') + 'tr';
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-3 sm:px-6 py-3 sm:py-5 bg-gray-50 border-b border-gray-200">
          <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 text-center">
            BẢNG GIÁ VÀNG
            <span className="text-lime-600 font-bold"> {titleTable} </span>
            TẠI CÁC KHU VỰC
          </h1>
          <p className="text-xs text-gray-500 mt-1 text-center">{timeUpdateStr}</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-gray-700 min-w-full">
            <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-600 text-xs sm:text-sm whitespace-nowrap">Khu vực</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-600 text-xs sm:text-sm whitespace-nowrap">Loại vàng</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-600 text-right text-xs sm:text-sm whitespace-nowrap">Mua vào</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-600 text-right text-xs sm:text-sm whitespace-nowrap">Bán ra</th>
            </tr>
            </thead>
            <tbody>
            {regionPriceList?.map((item, i) => (
              <tr
                key={i}
                className={`hover:bg-gray-50 transition-colors ${
                  i !== regionPriceList.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <td className={`px-2 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm ${item.region ? "text-blue-600" : "text-gray-500"} whitespace-nowrap`}>
                  {item.region}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                  {item.title}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-red-500 font-medium text-right text-xs sm:text-sm whitespace-nowrap">
                  {item.buy + ".000"}
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-green-600 font-medium text-right text-xs sm:text-sm whitespace-nowrap">
                  {item.sell + ".000"}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-3 sm:px-6 py-2 sm:py-3 bg-gray-50 border-t border-gray-200 text-center text-xs text-gray-500">
          Đơn vị: {isMobile ? "nghìn/lượng" : "VNĐ / lượng"} | Giá chỉ mang tính tham khảo
        </div>
      </div>
    </div>
  );
}
