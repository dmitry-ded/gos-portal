import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface userSliceState {
  email: string,
  pass: string,
}

const initialState: userSliceState = {
  email: "1234",
  pass: "1234",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<userSliceState>) {
      state.email = action.payload.email;
      state.pass = action.payload.pass;
    },
    removeUser(state) {
      state.email = "";
      state.pass = "";
    }
  }
})

export const { setUser, removeUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.userSlice

export default userSlice.reducer;