import apiClient from "./appClient";
import {GoldCommonPrice} from "@/models/goldCommonPrice";
import {ApiResponseData} from "@/models/response";

export const pnjApi = {
  getCommonData: (): Promise<ApiResponseData<GoldCommonPrice>> => apiClient.get(`/gold_price/getInfoGoldPNJPrice`),
}
