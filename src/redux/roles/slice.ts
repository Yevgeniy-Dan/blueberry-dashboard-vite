import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserModel } from "./model";

type InitialState = {
  items: UserModel[];
};

const initialState: InitialState = {
  items: [] as UserModel[],
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    addRole: (state, action: PayloadAction<UserModel>) => {
      state.items.push(action.payload);
    },
    udpateRole: (
      state,
      action: PayloadAction<{ roleId: string; role: UserModel }>
    ) => {
      const { roleId, role } = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === roleId) {
          return {
            ...role,
            id: roleId,
          };
        }
        return item;
      });
    },
    removeRole: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((role) => role.id !== action.payload);
    },
  },
});

export const { addRole, udpateRole, removeRole } = roleSlice.actions;

export const selectRoleById = (state: RootState) => {
  return (id: string) => state.roles.items.find((role) => role.id === id);
};

export default roleSlice.reducer;
