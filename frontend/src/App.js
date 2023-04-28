import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
    <Route path='/' component={HomePage}/>
    <Route path='/'/>

    </div>
  );
}

export default App;
