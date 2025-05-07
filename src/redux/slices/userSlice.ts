import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface userSliceState {
  email: string,
  pass: string,
}

const initialState: userSliceState = {
  email: "",
  pass: "",
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

export default userSlice.reducer;