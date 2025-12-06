import {configureStore} from '@reduxjs/toolkit'
import { cart } from '../store/ProdutCart/Cart'
 
export const store = configureStore({
    reducer:cart,
})