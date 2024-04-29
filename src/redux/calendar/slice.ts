import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isSizeChanged: boolean;
};

const initialState: InitialState = {
  isSizeChanged: false,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    onChangeCalendarSize: (state, action: PayloadAction<boolean>) => {
      state.isSizeChanged = action.payload;
    },
  },
});

export const { onChangeCalendarSize } = calendarSlice.actions;

export default calendarSlice.reducer;
