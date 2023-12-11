import {Service} from "../../config/commonFetch";
import {  LOGIN_URL } from "../../constant/api_url";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const login = createAsyncThunk(
    'login',
    async (loginDetails:any) => {
    const {email, password} = loginDetails;
      const response = await Service.commonPost(LOGIN_URL, {email:email, password: password})
      console.log("response", response)
      return response.data;
    }
  )