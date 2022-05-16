import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import AddPersonaje from "./AddPersonaje";
import { v4 as uuidv4 } from "uuid";
import SearchForm from "./SearchForm";

const CardPersonajes = () => {
  const [personajes, setPersonajes] = useState([]);

  const personajesInicial = async () => {
    await axios
      .get("https://swapi.dev/api/people")
      .then(function (response) {
        const data = response.data;
        console.log("personajes --->", data.results);
        setPersonajes(data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    personajesInicial();
  }, []);

  //Agregar personaje.

  const addPersonajes = (personaje) => {
    setPersonajes([...personajes, personaje]);
  };

  // Eliminar personaje.

  const deletePersonaje = (id) => {
    console.log(id);
    setPersonajes(personajes.filter((personaje) => personaje.name !== id));
  };

  return (
    <Container>
      {personajes.length === 0 ? (
        <Spinner   animation="grow" variant="danger" size='xl' role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row>
          <>
            {personajes.map((personaje) => (
              <Col xs={6} md={3} key={uuidv4()}>
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
                    onClick={() => deletePersonaje(personaje.name)}
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

export default CardPersonajes;
