import {Service} from "../../config/commonFetch";
import {  GET_PROJECT_DETAIL_BY_ID, GET_PROJECT_LIST } from "../../constant/api_url";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
export const fetchProjectList = createAsyncThunk(
    'project/fetchProjectList',
    async () => {
      const response = await Service.commonFetch(GET_PROJECT_LIST)
      return response.data;
    }
  )
  
  export const fetchProjectListById = createAsyncThunk(
    'project/fetchProjectDetailsById',
    async (id) => {
      const response = await Service.commonFetch(GET_PROJECT_DETAIL_BY_ID, {params: id})
      return response.data;
    }
  )

  export const resetProjectState = createAction('project/resetState');