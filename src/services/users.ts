import {UserCredentials} from "@data-types/user-credentials";
import {UserProfile} from "@data-types/user-profile";
import createApi from "services/api";

export const usersApi = createApi('user').injectEndpoints({
    endpoints: (builder) => ({
        GetMe: builder.query({
            query: () => `users/me`,
        }),
        Signup: builder.mutation({
            query: (userCredentials: UserCredentials & UserProfile) => ({
                url: `users/signup`,
                method: 'POST',
                body: userCredentials,
            }),
        }),
        Login: builder.mutation({
            query: (userCredentials: UserCredentials) => ({
                url: `users/login`,
                method: 'POST',
                body: userCredentials,
            }),
        }),
        Logout: builder.mutation({
            query: () => ({
                url: `users/logout`,
                method: 'POST',
            }),
        }),
    })
})