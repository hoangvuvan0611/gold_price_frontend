"use client";
import React from "react";

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

export default function GoldRegionPriceTable() {
  return (
    <div className="flex flex-col items-center justify-center p-6 ">
      <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-gray-50 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">BẢNG GIÁ VÀNG</h1>
          <p className="text-sm text-gray-500 mt-1">Cập nhật lúc 10:30 AM - 09/09/2025</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-gray-700">
            <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-6 py-4 font-medium text-gray-600">Khu vực</th>
              <th className="px-6 py-4 font-medium text-gray-600">Loại vàng</th>
              <th className="px-6 py-4 font-medium text-gray-600 text-right">Mua vào</th>
              <th className="px-6 py-4 font-medium text-gray-600 text-right">Bán ra</th>
            </tr>
            </thead>
            <tbody>
            {goldPrices.map((item, i) => (
              <tr
                key={i}
                className={`hover:bg-gray-50 transition-colors ${
                  i !== goldPrices.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <td className={`px-6 py-4 font-medium ${item.region ? "text-blue-600" : "text-gray-500"}`}>
                  {item.region}
                </td>
                <td className="px-6 py-4 flex items-center">
                  {/*<span className="text-blue-500 mr-2">{item.icon}</span>*/}
                  {item.type}
                </td>
                <td className="px-6 py-4 text-red-500 font-medium text-right">{item.buy}</td>
                <td className="px-6 py-4 text-green-600 font-medium text-right">{item.sell}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-500">
          Đơn vị: x1000đ/lượng | Giá chỉ mang tính tham khảo
        </div>
      </div>
    </div>
  );
}
