import { configureStore } from "@reduxjs/toolkit";

import staffReducer from "./staff/slice";
import serviceReducer from "./services/slice";
import roleReducer from "./roles/slice";

const store = configureStore({
  reducer: {
    staff: staffReducer,
    services: serviceReducer,
    roles: roleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
