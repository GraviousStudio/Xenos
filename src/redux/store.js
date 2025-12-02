import { configureStore } from "@reduxjs/toolkit";
import faAccountSlice from './faAccountsSlice'
import nfaAccountSlice from './nfaAccountsSlice'
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        faAccountReducer: faAccountSlice,
        nfaAccountReducer: nfaAccountSlice,
        cartReducer: cartSlice,
    }
})

export default store