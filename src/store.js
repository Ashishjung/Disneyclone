import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./Components/features/users/userSlice";
export default configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: getDefaultMiddleware({
    serialzableCheck: false,
  }),
});
