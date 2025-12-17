import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    SelectedSize :''
}

const SizeSlice = createSlice({
    name:'size',
    initialState,
    reducers:{
        SetSize:(state , action) =>{
            state.SelectedSize = action.payload
        },
    }
})

export const {SetSize} = SizeSlice.actions

export default SizeSlice.reducer