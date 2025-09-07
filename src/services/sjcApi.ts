import apiClient from "./appClient";
import {SjcChartData} from "@/models/sjcChartData";

export interface ApiResponseDataList<T> {
  dataList: T[];
  success: boolean;
  message: string;
  total: number;
}


export interface ApiResponseData<T> {
  data: T;
  success: boolean;
  message: string;
  errorCode: string;
}

export const sjcApi = {
  getSJCChartData: (): Promise<ApiResponseData<SjcChartData>> => apiClient.get(`/gold_price/sjcChartData`),
}
