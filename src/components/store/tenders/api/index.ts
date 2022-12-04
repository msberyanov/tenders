import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITender } from "../../models/ITender";
import { IChangeFavouriteTender } from "../../models/IChangeFavouriteTender";
import { TENDERS_SERVER_URL } from "../../../../constants/url";

export const tendersApi = createApi({
  reducerPath: "tenders/api",
  baseQuery: fetchBaseQuery({
    baseUrl: TENDERS_SERVER_URL
  }),
  refetchOnMountOrArgChange: true,
  endpoints: build => ({
    getTenders: build.query<ITender[], void>({
      query: () => ({
        url: "/tenders"
      })
    }),
    getFavouriteTenders: build.query<ITender[], void>({
      query: () => ({
        url: "/tenders/favourite"
      })
    }),
    patchFavouriteTender: build.mutation<ITender, IChangeFavouriteTender>({
      query: changeFavouriteTender => ({
        method: "PATCH",
        url: `/tenders/favourite`,
        body: changeFavouriteTender
      })
    })
  })
});


export const {useGetTendersQuery, useLazyGetTendersQuery, useGetFavouriteTendersQuery, usePatchFavouriteTenderMutation} = tendersApi;
