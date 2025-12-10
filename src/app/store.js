import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../store/ProdutCart/Cart'
 
export const store = configureStore({
    reducer:cartReducer,
})