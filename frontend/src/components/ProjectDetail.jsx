import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteProject, detailProject } from "../actions/projectActions";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ProjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projectDetail = useSelector((state) => state.detailProject);
  const { project } = projectDetail;
  console.log(projectDetail);

  useEffect(() => {
    dispatch(detailProject(id));
  }, [id, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProject(id));
    navigate("/");
  };

  return (
    <div>
      <Container>
        <h1 className="text-center mt-3 mb-3 pd-2">Project Details</h1>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={project.thumbnail} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  <b>({project.category})</b>
                </Card.Text>
                <Card.Text>{project.description}</Card.Text>
                <a
                  className="btn btn-warning m-2 pd-2"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Project Demo Link
                </a>
                <br />
                <hr />
                <Link to={"/update-project/" + id}>
                  <Button variant="primary" className="mt-2 mb-2 pd-2">
                    Update
                  </Button>
                </Link>

                <Button
                  className="m-2 pd-2"
                  variant="danger"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetail;
