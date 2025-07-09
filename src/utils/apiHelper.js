import axios from "axios";
import { toast } from 'react-toastify';
import { ENV } from "../config/config";

let baseUrl = process.env.REACT_APP_BASE_API

async function apiHelper(apiType, path, data, params) {
   if (baseUrl === undefined || !baseUrl) {
      baseUrl = ""
   }

   if (apiType === "post" || apiType === "put" || apiType === "get" || apiType === "delete" || apiType === "patch") {
      try {
         let response = await axios({
            method: apiType,
            url: `${baseUrl + path}`,
            data,
         })
         return response
      } catch (error) {
         if (error.response?.data?.message) {
            let message = error.response?.data?.message;
            toast.error(message)
         }
      }
   }
}

export { apiHelper };
