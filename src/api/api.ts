import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITrip } from '../types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_LINK }),
  endpoints: (builder) => ({
    getAllTrips: builder.query<ITrip[], string>({
      query: (q) => {
        return q == '' ? 'trips' : `trips/?${q}`
      }
    }),
    getAllOrigins: builder.query<string[], void>({
      query: () => "origins"
    }),
    getAllDestination: builder.query<string[], void>({
      query: () => "destinations"
    }),
    getAllAirlines: builder.query<string[], void>({
      query: () => "airlines"
    })
  })
});

export const {
  useGetAllTripsQuery,
  useGetAllOriginsQuery,
  useGetAllDestinationQuery,
  useGetAllAirlinesQuery
} = api;