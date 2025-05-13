import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:movieId" component={MovieDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
