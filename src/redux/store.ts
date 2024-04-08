import { configureStore } from "@reduxjs/toolkit";

import staffReducer from "./staff/slice";
import serviceReducer from "./services/slice";

const store = configureStore({
  reducer: {
    staff: staffReducer,
    services: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
