import { createApi, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { ITender } from "../../models/ITender";
import { IChangeFavouriteTender } from "../../models/IChangeFavouriteTender";
import { TENDERS_SERVER_URL } from "../../../../constants/url";

export const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => 'status' in error;

export const tendersApi = createApi({
  reducerPath: "tenders/api",
  baseQuery: fetchBaseQuery({
    baseUrl: TENDERS_SERVER_URL
  }),
  refetchOnMountOrArgChange: true,
  endpoints: build => ({
    getTenders: build.query<ITender[], void>({
      query: () => ({
        method: "GET",
        url: "/tenders"
      })
    }),
    getFavouriteTenders: build.query<ITender[], void>({
      query: () => ({
        method: "GET",
        url: "/tenders/favourite"
      })
    }),
    patchFavouriteTender: build.mutation<ITender, IChangeFavouriteTender>({
      query: changeFavouriteTender => ({
        method: "PATCH",
        url: `/tenders/favourite`,
        body: changeFavouriteTender
      })
    }),
    getExactTender: build.query<ITender, string>({
      query: id => ({
        method: "GET",
        url: `/tenders/${id}`
      })
    }),
    searchTenders: build.query<ITender[], string>({
      query: name => ({
        method: "GET",
        url: `/tenders/search`,
        params: {
          name
        }
      })
    })
  })
});


export const {useGetTendersQuery, useGetExactTenderQuery, useSearchTendersQuery,  useGetFavouriteTendersQuery, usePatchFavouriteTenderMutation} = tendersApi;
