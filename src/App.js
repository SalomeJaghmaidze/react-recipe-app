import Pages from './Pages/pages/Pages';
import Category from './Components/categories/Category';
import Search from './Components/search/Search';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Search></Search>
     <Category></Category>
     <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
