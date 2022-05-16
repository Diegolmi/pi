import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const SearchForm = () => {
  const [busqueda, setBusqueda] = useState("");
  const [resultado, setResultado] = useState([]);

  const searchStar = async (e) => {
    e.preventDefault();
    const busqueda = e.target.elements.busqueda.value;
    const url = `https://swapi.dev/api/people/?search=${busqueda}`;
    const resultado = await axios.get(url);
    setResultado(resultado.data.results);
    console.log(resultado.data.results, "resultaod busqueda");
  };

  const changeHandler = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value, "busqueda");
  };

  const deletePersonaje = (id) => {
    console.log(id);
    setResultado(resultado.filter((personaje) => personaje.name !== id));
  };

  return (
    <>
      <form className="mt-5 m-5" onSubmit={searchStar}>
        <input
          type="search"
          placeholder="Buscar Personaje"
          className="me-2"
          aria-label="search"
          name="busqueda"
          value={busqueda}
          onChange={changeHandler}
        />
        <Button
          variant="outline-danger"
          data-testid="submit-button"
          type="submit"
          className="search-btn"
          disabled={busqueda.length === 0}
        >
          Buscar
        </Button>
      </form>
      <div className="m-5">
        {resultado.length === 0
          ? null 
          : resultado.map((personaje, index) => (
              <Card
                bg="Light"
                key={index}
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
            ))}
      </div>
    </>
  );
};

export default SearchForm;
