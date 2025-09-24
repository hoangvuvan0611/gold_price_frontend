import apiClient from "./appClient";
import {SjcChartData} from "@/models/sjcChartData";
import {GoldCommonPrice} from "@/models/goldCommonPrice";
import {ApiResponseData} from "@/models/response";

export const sjcApi = {
  getSJCChartData: (): Promise<ApiResponseData<SjcChartData>> => apiClient.get(`/gold_price/sjcChartData`),
  getCommonData: (): Promise<ApiResponseData<GoldCommonPrice>> => apiClient.get(`/gold_price/getInfoGoldSJCPrice`),
  getInfoGoldHomePrice: (): Promise<ApiResponseData<GoldCommonPrice>> => apiClient.get(`/gold_price/getInfoHomePrice`),
}
