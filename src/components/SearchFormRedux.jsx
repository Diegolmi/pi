import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPersonajes, searchPersonaje } from "../store/slices/starwars";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";


const SearchFormRedux = () => {
    
    const dispatch = useDispatch();

    const { isLoading, personajes } = useSelector((state) => state.personajes);

    useEffect(() => {
      dispatch(getPersonajes());
    }, []);




//   return (
//     <form className="mt-5 m-5" onSubmit={searchStar}>
//         <input
//           type="search"
//           placeholder="Buscar Personaje"
//           className="me-2"
//           aria-label="search"
//           name="busqueda"
//           value={busqueda}
//           onChange={changeHandler}
//         />
//         <Button
//           variant="outline-danger"
//           data-testid="submit-button"
//           type="submit"
//           className="search-btn"
//           disabled={busqueda.length === 0}
//         >
//           Buscar
//         </Button>
//       </form>
//   )
}

export default SearchFormRedux