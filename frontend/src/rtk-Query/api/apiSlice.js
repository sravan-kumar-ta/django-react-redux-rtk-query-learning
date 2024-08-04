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
         // invalidatesTags: ["Project"],
         async onQueryStarted(args, { dispatch, queryFulfilled }) {
            try {
               const { data: createdProject } = await queryFulfilled;
               dispatch(
                  apiSlice.util.updateQueryData(
                     "getProjects",
                     undefined,
                     (draft) => {
                        draft.push(createdProject);
                     }
                  )
               );
            } catch (err) {
               console.log(err);
            }
         },
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
         // invalidatesTags: ["Project"],
         async onQueryStarted(args, { dispatch, queryFulfilled }) {
            try {
               await queryFulfilled;
               dispatch(
                  apiSlice.util.updateQueryData(
                     "getProjects",
                     undefined,
                     (draft) => {
                        //delete
                        return draft?.filter((project) => project?.id !== args);
                     }
                  )
               );
            } catch (err) {
               console.log(err);
            }
         },
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
