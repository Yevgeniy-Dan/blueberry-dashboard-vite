import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isActivateSearchBar: boolean;
};

const initialState: InitialState = {
  isActivateSearchBar: false,
};

const navbarSlice = createSlice({
  name: "appNavigation",
  initialState,
  reducers: {
    toggleActivationSearchBar: (state, action: PayloadAction<boolean>) => {
      state.isActivateSearchBar = action.payload;
    },
  },
});

export const { toggleActivationSearchBar } = navbarSlice.actions;

export default navbarSlice.reducer;
