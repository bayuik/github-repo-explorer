import { CaseReducerActions, createSlice } from "@reduxjs/toolkit";

interface UserState {
  listUser: any[];
}

const initialState: UserState = {
  listUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setListUser: (state, action) => {
      state.listUser = action.payload;
    },
    setListUserEmpty: (state) => {
      state.listUser = [];
    },
  },
});

type UserActions = typeof userSlice.actions;
type UserCaseReducerActions = CaseReducerActions<UserActions, "user">;

const userReducer = userSlice.reducer;
const setListUser = userSlice.actions.setListUser;

export { userReducer, setListUser };
export type { UserActions, UserCaseReducerActions };
