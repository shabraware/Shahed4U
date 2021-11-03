import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout/Layout';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import NotFound from './pages/NotFound/NotFound';
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:movieID">
          <MovieDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
