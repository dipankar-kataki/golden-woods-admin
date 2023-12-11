import { createSlice } from "@reduxjs/toolkit";
import { login } from "../action/loginAction";


const initialState = {
   loginDetails:{},
    status: 'idle',
    error: null,
  };
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
      
    },
    extraReducers: (builder) => {
        builder
          .addCase(login.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.loginDetails = action.payload;
          })
          .addCase(login.rejected, (state:any, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})



export default loginSlice.reducer;