import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddPersonaje = (props) => {
  const [form, setForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    props.addPersonajes(data);
    e.target.reset();
  };

  const formularios = () => {
    const elFormulario = (
      <div className="mt-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 25,
              })}
            />
            <Form.Text className="text-muted">
              {errors.name && <span>Campo Requerido</span>}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cumple Años</Form.Label>
            <Form.Control
              type="text"
              name="birth_year"
              {...register("birth_year", {
                required: true,
                minLength: 3,
                maxLength: 25,
              })}
            />
            <Form.Text className="text-muted">
              {errors.birth_year && <span>Campo Requerido</span>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Color de Ojos</Form.Label>
            <Form.Control
              type="text"
              name="eye_color"
              {...register("eye_color", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
            />
            <Form.Text className="text-muted">
              {errors.eye_color && <span>Campo requerido</span>}
            </Form.Text>
          </Form.Group>

          <Button variant="success" type="submit">
            Agregar
          </Button>
        </Form>
      </div>
    );
    return elFormulario;
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button
            className="col-md-5 mx-auto mt-5"
            onClick={() => setForm(true)}
          >
            {" "}
            Agregar nuevo Personaje{" "}
          </Button>
          {form ? formularios() : null}
        </Col>
      </Row>
    </Container>
  );
};

export default AddPersonaje;
