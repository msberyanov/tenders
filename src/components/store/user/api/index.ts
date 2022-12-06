import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TENDERS_SERVER_URL } from "../../../../constants/url";
import { IUser } from "../../models/IUser";

export const userApi = createApi({
  reducerPath: "user/api",
  baseQuery: fetchBaseQuery({
    baseUrl: TENDERS_SERVER_URL
  }),
  endpoints: build => ({
    login: build.mutation<string, IUser>({
      query: user => ({
        method: "POST",
        url: "/users/login",
        body: user
      })
    })
  })
});

// export const {useLoginMutation} = userApi;
