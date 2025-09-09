import apiClient from "./appClient";
import {ApiResponseData} from "@/models/response";
import {GoldWorldPrice} from "@/models/goldWorldPrice";

export const goldWorldApi = {
  getCommonData: (): Promise<ApiResponseData<GoldWorldPrice>> => apiClient.get(`/gold_price/infoGoldWorld?ts=${Date.now()}`),
}
