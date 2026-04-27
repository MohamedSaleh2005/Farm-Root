import { createSlice } from "@reduxjs/toolkit";

const SaveCart = localStorage.getItem("cartItems")

const initialState = {
    cartItems: SaveCart ? JSON.parse(SaveCart) : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart : (state , action) => {
            const item = action.payload
            const exists = state.cartItems.find((i) => i.id === item.id)
            if (!exists) {state.cartItems.push({...item , Quan: 1})}
            localStorage.setItem("cartItems" , JSON.stringify(state.cartItems));
        },
        
        
        RemoveItem: (state , action) => {
            const id = action.payload
            state.cartItems = state.cartItems.filter((i) => i.id !== id)
            localStorage.setItem("cartItems" , JSON.stringify(state.cartItems));

        }
    } 
    
})


export const {addToCart , RemoveItem} = cartSlice.actions;

export default cartSlice.reducer;