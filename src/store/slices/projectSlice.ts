import { createSlice } from "@reduxjs/toolkit";
import { fetchProjectList, fetchProjectListById, resetProjectState } from "../action/projectAction";

const initialState = {
    projects: [],
    status: 'idle',
    error: null,
  };
const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers:{
      
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProjectList.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProjectList.fulfilled, (state:any, action) => {
            state.status = 'succeeded';
            state.projects = action.payload;
          })
          .addCase(fetchProjectList.rejected, (state:any, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          //fetching single project by Id
          .addCase(fetchProjectListById.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProjectListById.fulfilled, (state:any, action) => {
            state.status = 'succeeded';
            state.projects = action.payload;
          })
          .addCase(fetchProjectListById.rejected, (state:any, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          //reset state
          .addCase(resetProjectState, (state:any) => {
            state.projects = [];
          })
      },
})

export const uiActions = projectSlice.actions;

export default projectSlice.reducer;