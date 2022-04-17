import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
  name: "theme",
  initialState: {
    status: "light",
  },
  reducers: {
    setThemesStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { setThemesStatus } = slice.actions;
export default slice.reducer;
