import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectName = createSelector([selectUser], (user) => user.name);
