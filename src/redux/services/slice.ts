import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ServiceModel } from "./models";
import { RootState } from "../store";

type InitialState = {
  items: ServiceModel[];
};

const initialState: InitialState = {
  items: [] as ServiceModel[],
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<ServiceModel>) => {
      state.items.push(action.payload);
    },
    udpateService: (
      state,
      action: PayloadAction<{ serviceId: string; service: ServiceModel }>
    ) => {
      const { serviceId, service } = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === serviceId) {
          return {
            ...service,
            id: serviceId,
          };
        }
        return item;
      });
    },
    removeService: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (service) => service.id !== action.payload
      );
    },
  },
});

export const { addService, udpateService, removeService } =
  serviceSlice.actions;

export const selectServiceById = (state: RootState) => {
  return (id: string) =>
    state.services.items.find((service) => service.id === id);
};

export default serviceSlice.reducer;
