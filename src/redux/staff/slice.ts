import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StaffModel } from "./models";
import { RootState } from "../store";

type InitialState = {
  items: StaffModel[];
};

const initialState: InitialState = {
  items: [] as StaffModel[],
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    addStaff: (state, action: PayloadAction<StaffModel>) => {
      state.items.push(action.payload);
    },
    udpateStaff: (
      state,
      action: PayloadAction<{ userId: string; staff: StaffModel }>
    ) => {
      const { userId, staff } = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === userId) {
          return {
            ...staff,
            id: userId,
          };
        }
        return item;
      });
    },
    removeStaff: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((staff) => staff.id !== action.payload);
    },
  },
});

export const { addStaff, udpateStaff, removeStaff } = staffSlice.actions;

export const selectStaffById = (state: RootState) => {
  return (id: string) => state.staff.items.find((staff) => staff.id === id);
};

export default staffSlice.reducer;
