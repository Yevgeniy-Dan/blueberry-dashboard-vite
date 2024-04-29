import { configureStore } from "@reduxjs/toolkit";

import navbarReducer from "./appNavigation/slice";
import calendarReducer from "./calendar/slice";

const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    calendar: calendarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
