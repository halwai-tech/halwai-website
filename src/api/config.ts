import axios, {
  AxiosRequestConfig,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { ApiUrl } from "./serverConstant";
import Cookies from "js-cookie";



export const authApi = axios.create({
  baseURL: ApiUrl.authenticationUrl,
});



// public api for non-token api
export const publicEventApi=axios.create({
  baseURL:ApiUrl.eventUrl
})

export const publicEnquiryApi=axios.create({
  baseURL:ApiUrl.enquiryUrl
})




