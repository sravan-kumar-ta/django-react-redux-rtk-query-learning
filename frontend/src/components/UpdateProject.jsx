import { useParams } from "react-router-dom";
import FormUpdate from "./FormUpdate";
import { useGetSingleProjectQuery } from "../rtk-Query/api/apiSlice";

const UpdateProject = () => {
   const { id } = useParams();
   const { data: singleProject } = useGetSingleProjectQuery(id);

   return (
      <div className="container mt-4 mb-4 pd-3">
         <h1>Update Project id:{id}</h1>
         <hr />
         <div>
            <FormUpdate singleProject={singleProject} />
         </div>
      </div>
   );
};

export default UpdateProject;
