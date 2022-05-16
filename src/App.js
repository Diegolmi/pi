
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPersonajes from './components/CardPersonajes';
import SearchForm from './components/SearchForm';
import './App.css';



function App() {
  return (
    <div className='App-header'>
    <SearchForm />
    <CardPersonajes />
    
    </div>
  );
}

export default App;
