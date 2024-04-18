import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isActivateAppointmentSearchBar: boolean;
  searchText: string;
};

const initialState: InitialState = {
  isActivateAppointmentSearchBar: false,
  searchText: "",
};

const navbarSlice = createSlice({
  name: "appNavigation",
  initialState,
  reducers: {
    toggleActivationAppointmentSearchBar: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isActivateAppointmentSearchBar = action.payload;
    },
    onSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { toggleActivationAppointmentSearchBar, onSearchText } =
  navbarSlice.actions;

export default navbarSlice.reducer;
