import apiClient from "./appClient";
import {GoldCommonPrice} from "@/models/goldCommonPrice";
import {ApiResponseData} from "@/models/response";

export const dojiApi = {
  getCommonData: (): Promise<ApiResponseData<GoldCommonPrice>> => apiClient.get(`/gold_price/getInfoGoldDOJIPrice`),
}
