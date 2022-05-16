import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePersonajes, getPersonajes } from "./store/slices/starwars";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import AddPersonaje from "./components/AddPersonaje";

export const StarWarsApp = () => {
 
  const dispatch = useDispatch();

  const { isLoading, personajes } = useSelector((state) => state.personajes);

  const addPersonajes = (personaje) => {
    personajes([...personajes, personaje]);
  };
  

  useEffect(() => {
    dispatch(getPersonajes());
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Spinner animation="grow" variant="danger" size="xl" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row>
          <>
            {personajes.map((personaje) => (
              <Col xs={6} md={3} className="m-5" key={uuidv4()}>
                <Card
                  bg="Light"
                  id={personaje.name}
                  text="dark"
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>Star Wars</Card.Header>
                  <Card.Body>
                    <Card.Title> Nombre: {personaje.name} </Card.Title>
                    <Card.Text>Cumple Años: {personaje.birth_year}</Card.Text>
                    <Card.Text>Color de Ojos: {personaje.eye_color}</Card.Text>
                  </Card.Body>
                  <Button
                   onClick={() => dispatch(deletePersonajes(personaje.name))}
                    variant="danger"
                  >
                    Eliminar Personaje
                  </Button>
                </Card>
              </Col>
            ))}

            <div className="m-5">
             
             <AddPersonaje addPersonajes={addPersonajes} /> 
            </div>
          </>
        </Row>
      )}
    </Container>
  );
};
