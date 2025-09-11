'use client';
import TradingViewWidget from "@/components/partner/tradingview";
import TradingViewAdvanceWidget from "@/components/partner/tradingviewAdvance";
import {useEffect, useState, useCallback} from "react";
import {GoldWorldPrice} from "@/models/goldWorldPrice";
import {ApiResponseData} from "@/models/response";
import {toast} from "sonner";
import {goldWorldApi} from "@/services/goldWorldApi";

export default function GoldWorld() {
  const [priceCommonInfo, setPriceCommonInfo] = useState<GoldWorldPrice>({
    change: "",
    charts: {},
    changePercent: "",
    currentPrice: "",
    descriptions: [],
    lastUpdate: "",
    priceInVND: "",
    unit: "",
    pricePerTael: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Hàm fetch data
  const fetchData = useCallback(async () => {
    try {
      const response: ApiResponseData<GoldWorldPrice> = await goldWorldApi.getCommonData();
      if (response.success) {
        setPriceCommonInfo(response.data);
      } else {
        toast.error("Lỗi tải dữ liệu");
      }
    } catch (error) {
      console.error("Error fetching gold data:", error);
      toast.error("Lỗi kết nối");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Gọi API ngay lần đầu
    fetchData();

    // Thiết lập interval để gọi API mỗi giây
    const intervalId = setInterval(fetchData, 10000);

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(intervalId);
  }, [fetchData]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isPositive = !priceCommonInfo.change.startsWith('-');

  // Format số tiền VNĐ
  const formatVND = (value: string) => {
    if (!value) return "0";
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="min-h-screen mt-5 sm:mt-16 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
          Giá Vàng Thế Giới
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">{priceCommonInfo.lastUpdate}</p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <>
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Price Info Card */}
            <div className="lg:col-span-1 bg-white rounded-2xl p-4 sm:p-6 border border-gray-100">
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex justify-center items-baseline">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">{priceCommonInfo.currentPrice}</span>
                  <span className="text-sm sm:text-lg text-gray-500 ml-2">{priceCommonInfo.unit}</span>
                </div>

                <div className={`inline-flex items-center mt-3 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm ${isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  <span className={`mr-2 ${isPositive ? '↑' : '↓'}`}>
                    {isPositive ? '↗' : '↘'}
                  </span>
                  <span className="font-medium">
                    {priceCommonInfo.change} ({priceCommonInfo.changePercent})
                  </span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="justify-between items-center p-3 sm:p-4 bg-blue-50 rounded-xl">
                  <div className="text-gray-700 font-medium text-sm sm:text-base mb-1">1 Ounce:</div>
                  <div className="text-sm sm:text-base font-semibold text-blue-700">{formatVND(priceCommonInfo.priceInVND)}</div>
                </div>

                <div className="flex justify-between items-center p-3 sm:p-4 bg-amber-50 rounded-xl">
                  <div className="text-gray-700 font-medium text-sm sm:text-base">1 Lượng:</div>
                  <div className="text-sm sm:text-base font-semibold text-amber-700">{formatVND(priceCommonInfo.pricePerTael)}</div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-200 text-center">
                <p className="text-xs sm:text-sm text-gray-500">Thời gian hiện tại:</p>
                <p className="font-medium text-gray-700 text-xs sm:text-sm">
                  {currentTime.toLocaleTimeString('vi-VN')} {currentTime.toLocaleDateString('vi-VN')}
                </p>
                <p className="text-xs text-gray-400 mt-1">Dữ liệu được cập nhật mỗi 10 giây</p>
              </div>
            </div>

            {/* Charts Section */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Gold Price Chart */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Biểu đồ xu hướng giá vàng thế giới</h2>
                <TradingViewAdvanceWidget/>
              </div>

              {/* Forex Chart */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Biểu đồ FOREX xu hướng tỷ giá VNĐ/USD</h2>
                <TradingViewWidget symbol={"FX_IDC:USDVND|1D"}/>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 sm:mt-8 bg-white rounded-2xl p-4 sm:p-6 border border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">Thông tin bổ sung</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-600">
              <div>
                <p className="font-medium mb-2">Về đơn vị tính:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>1 ounce = 31.1034768 grams</li>
                  <li>1 lượng = 37.5 grams</li>
                  <li>1 chỉ = 3.75 grams</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Lưu ý:</p>
                <p>Giá trên được cập nhật tự động và chỉ mang tính chất tham khảo. Tỷ giá chuyển đổi dựa trên tỷ giá Vietcombank.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
