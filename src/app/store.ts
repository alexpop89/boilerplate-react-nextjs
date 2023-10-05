import userReducer from '@features/user/user-slice';
import {configureStore} from '@reduxjs/toolkit';
import * as services from "services";

const apiReducers = Object.keys(services).reduce((acc, key) => {
    // @ts-ignore
    const service = services[key];
    if (service.reducer) {
        // @ts-ignore
        acc[key] = service.reducer;
    }
    return acc;
}, {});


export const store = configureStore({
    reducer: {
        user: userReducer,
        ...apiReducers
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;