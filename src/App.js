
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardPersonajes from './components/CardPersonajes';
import SearchForm from './components/SearchForm';
import SearchFormRedux from './components/SearchFormRedux';
import './App.css';
import { StarWarsApp } from './StarWarsApp';



function App() {
  return (
    <div className='App-header'>
     <SearchForm />
    {/* <CardPersonajes />  */}
        {/* <SearchFormRedux /> */}
    <StarWarsApp />
    
    </div>
  );
}

export default App;
