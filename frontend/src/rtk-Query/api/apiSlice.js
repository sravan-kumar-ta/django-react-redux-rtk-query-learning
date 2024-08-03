import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:8000/api",
   }),
   tagTypes: ["Project"],
   endpoints: (build) => ({
      getProjects: build.query({
         query: () => "/",
         //  providesTags: ["Project"],
         providesTags: (result, error, arg) =>
            result
               ? [
                    ...result.map(({ id }) => ({ type: "Project", id })),
                    "Project",
                 ]
               : ["Project"],
      }),

      getSingleProject: build.query({
         query: (id) => `/${id}`,
      }),

      addProject: build.mutation({
         query: (data) => ({
            url: "/",
            method: "POST",
            body: data,
         }),
         invalidatesTags: ["Project"],
      }),

      updateProject: build.mutation({
         query: ({ id, data }) => ({
            url: `/${id}/`,
            method: "PUT",
            body: data,
         }),
         invalidatesTags: ["Project"],
      }),

      deleteProject: build.mutation({
         query: (id) => ({
            url: `/${id}`,
            method: "DELETE",
         }),
         //  invalidatesTags: ["Project"],
         invalidatesTags: (result, error, arg) => [
            { type: "Project", id: arg },
         ],
      }),
   }),
});

export const {
   useGetProjectsQuery,
   useGetSingleProjectQuery,
   useAddProjectMutation,
   useUpdateProjectMutation,
   useDeleteProjectMutation,
} = apiSlice;
