import Pages from './Pages/Pages';
import Category from './Components/categories/Category';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Category></Category>
     <Pages></Pages>
     </BrowserRouter>
    </div>
  );
}

export default App;
