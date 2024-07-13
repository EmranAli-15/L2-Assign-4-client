import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-4-delta-taupe.vercel.app/api' }),
    endpoints: () => ({}),
});

export const { }: any = baseApi