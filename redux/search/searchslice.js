import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    SearchTrim: ""
}

const searchslice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchTrim: (state, action) => {
            state.SearchTrim = action.payload
        }
    }
})

export const { setSearchTrim } = searchslice.actions

export default searchslice.reducer 
