import { configureStore } from "@reduxjs/toolkit";

import staffReducer from "./staff/slice";

const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
