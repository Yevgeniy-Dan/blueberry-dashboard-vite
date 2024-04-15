import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isActivateSearchBar: boolean;
  searchText: string;
};

const initialState: InitialState = {
  isActivateSearchBar: false,
  searchText: "",
};

const navbarSlice = createSlice({
  name: "appNavigation",
  initialState,
  reducers: {
    toggleActivationSearchBar: (state, action: PayloadAction<boolean>) => {
      state.isActivateSearchBar = action.payload;
    },
    onSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { toggleActivationSearchBar, onSearchText } = navbarSlice.actions;

export default navbarSlice.reducer;
