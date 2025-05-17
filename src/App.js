import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Favourites from './pages/Favourites';
import { LanguageContext } from './Context/Lang';
import { useState } from 'react';
function App() {

  const [myContextLang, setMyContextLang] = useState('en');

  return (
    <div className="App">
      <BrowserRouter>
        <LanguageContext.Provider value={{myContextLang, setMyContextLang}}>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/:movieId" component={MovieDetails} />
            <Route exact path="/favourites" component={Favourites} />
          </Switch>
        </LanguageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
