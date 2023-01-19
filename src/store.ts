import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import logger from "redux-logger";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch