import {createApi as reduxToolkitCreateApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Keys} from "@utils/local-storage-keys";
import {capitalize} from "@utils/strings";

export default function createApi(name: string) {
    name = capitalize(name)
    const routeName = name.toLowerCase();

    return reduxToolkitCreateApi({
        baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api` }),
        // @ts-ignore
        prepareHeaders: (headers: Headers) => {
            const token = localStorage.getItem(Keys.USER.TOKEN)
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
        endpoints: (builder) => ({
            [`Get${name}`]: builder.query({
                query: (id) => `${routeName}/${id}`,
            }),
            [`Create${name}`]: builder.mutation({
                query: (newData) => ({
                    url: `${routeName}`,
                    method: 'POST',
                    body: newData,
                }),
            }),
            [`Update${name}`]: builder.mutation({
                query: (updateData) => ({
                    url: `${routeName}/${updateData.id}`,
                    method: 'PUT',
                    body: updateData,
                }),
            }),
            [`Patch${name}`]: builder.mutation({
                query: (partialData) => ({
                    url: `${routeName}/${partialData.id}`,
                    method: 'PATCH',
                    body: partialData,
                }),
            }),
            [`Delete${name}`]: builder.mutation({
                query: (id) => ({
                    url: `${routeName}/${id}`,
                    method: 'DELETE',
                }),
            }),
        }),
    });
}