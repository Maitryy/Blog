import Navbar from './navbar';
import Home from './home';
import About from './about';
import Create from './create';
import BlogDetails from './blogDetails';
import NotFound from './notFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route exact path = "/about">
              <About />
            </Route>
            <Route exact path = "/create">
              <Create />
            </Route>
            <Route exact path = "/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path = "*">
              <NotFound />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
