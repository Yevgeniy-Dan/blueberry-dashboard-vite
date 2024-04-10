import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AppointmentModel } from "./model";

type InitialState = {
  items: AppointmentModel[];
};

const initialState: InitialState = {
  items: [] as AppointmentModel[],
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<AppointmentModel>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addAppointment } = appointmentSlice.actions;

export const selectAppointmentById = (state: RootState) => {
  return (id: string) => state.roles.items.find((role) => role.id === id);
};

export default appointmentSlice.reducer;
