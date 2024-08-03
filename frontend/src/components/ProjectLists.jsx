import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetProjectsQuery } from "../rtk-Query/api/apiSlice";

const ProjectLists = () => {
   const { data: projects, isLoading } = useGetProjectsQuery() || {};
   console.log(projects);

   return (
      <div>
         <h1>all Projects List</h1>
         <hr />
         <Container>
            <Row>
               {!isLoading &&
                  projects?.length > 0 &&
                  projects?.map((project) => (
                     <Col xs={12} md={6} lg={4} key={project.id}>
                        <Card style={{ width: "18rem" }} className="m-3 pd-2">
                           <Card.Img
                              variant="top"
                              height="150px"
                              src={project.thumbnail}
                           />
                           <Card.Body>
                              <Card.Title>{project.title}</Card.Title>
                              <Card.Text>
                                 <b>({project.category})</b>
                              </Card.Text>
                              <hr />
                              <span>
                                 <a
                                    className="btn btn-info m-2 pd-2"
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                 >
                                    Demo
                                 </a>

                                 <Link
                                    style={{
                                       textDecoration: "none",
                                       marginLeft: "2px",
                                       marginRight: "2px",
                                    }}
                                    className="m-2 pd-2 btn btn-success"
                                    to={"/detail-project/" + project.id}
                                 >
                                    View
                                 </Link>
                              </span>
                           </Card.Body>
                        </Card>
                     </Col>
                  ))}
            </Row>
         </Container>
      </div>
   );
};

export default ProjectLists;
