import {UserProfile} from "@data-types/user-profile";

export type UserState = UserProfile & {
    id: string | null;
    isLoggedIn: boolean;
}