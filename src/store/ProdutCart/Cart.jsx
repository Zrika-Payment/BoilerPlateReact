import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
    cart: [{ id: 1, text: "Cart Details" }],
}

export const cart = createSlice({
    name: 'cartDetails',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const add = {
                id: nanoid(),
                text: action.payload

            }
            state.cart.push(add);
        },
        removeCart: (state, action) => {
            state.cart = state.cart?.filter((list) => {
                list.id !== action.payload
            })
        }
    }
})


export const { addCart, removeCart } = cart.actions;

export default cart.reducer;
