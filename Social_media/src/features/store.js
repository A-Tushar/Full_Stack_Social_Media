import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/authSlice"

const store = configureStore({
    reducer:{
        registration : authslice

    }
})