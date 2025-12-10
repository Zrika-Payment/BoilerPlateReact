import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
}

export const cart = createSlice({
    name: 'cartDetails',
    initialState,
    reducers: {
        addCart: (state, action) => {

            state.cart.push(action.payload);
        },
        removeCart: (state, action) => {
            
            state.cart = state.cart?.filter((list) => {
                list.id !== action.payload.id

            })
        },
        
        deleteCart:
            (state) => {
                state.cart.length = 0;
            }

    }
})


export const { addCart, removeCart } = cart.actions;

export default cart.reducer;
