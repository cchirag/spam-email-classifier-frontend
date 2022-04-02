import { atom } from "recoil";
import { CurrentUser } from "../models/CurrentUser.model";

export const CurrentUserState = atom<CurrentUser | null>({
  key: "currentUserState",
  default: null,
});
