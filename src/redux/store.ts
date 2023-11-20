import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice
    }
})

export type DispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>