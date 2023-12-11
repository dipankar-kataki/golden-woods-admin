import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        showSidebar: false,
    },
    reducers:{
        toggleSidebar(state){
            state.showSidebar = !state.showSidebar;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;