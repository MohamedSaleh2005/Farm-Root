import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    SortBy: ""    /* Most Disc || Less Price */
}

const filterslice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.SortBy = action.payload
        }
    }
})

export const { setSortBy } = filterslice.actions
export default filterslice.reducer