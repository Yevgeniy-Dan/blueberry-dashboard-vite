import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AppointmentModel } from "./model";
import moment from "moment";

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
  return (id: string) =>
    state.appointments.items.find((appointment) => appointment.id === id);
};

export const selectAppointmentByDate = (state: RootState) => {
  return (date: Date) =>
    state.appointments.items.filter((appointment) => {
      return moment(appointment.date).isSame(date, "day");
    });
};

export const selectAppointmentByCustomer = (state: RootState) => {
  return (searchText: string) =>
    state.appointments.items.filter((appointment) => {
      return appointment.customerName
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
};

export default appointmentSlice.reducer;
