import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Discover from './components/Discover';
import Popular from './components/Popular';
import PopularBattle from './components/PopularBattle';
import DiscoverBattle from './components/DiscoverBattle';
import MyList from './components/MyList';



// const apiKey = 'ec9a9b00d4df33fd1448a81ad129214f';
// const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzlhOWIwMGQ0ZGYzM2ZkMTQ0OGE4MWFkMTI5MjE0ZiIsInN1YiI6IjVmMjJjZmVlMzUwMzk4MDAzM2UzMTg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TRnPMfD3Jhc7MNSTRDtHSyjcIyf1yqxt3kK-Q01T3fs';
// https://api.themoviedb.org/3/movie/550?api_key=ec9a9b00d4df33fd1448a81ad129214f



class App extends React.Component{

  render(){

    return(
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav>
                <ul>
                  <li><Link to="/">This Week</Link></li>
                  <li><Link to="/battle">This Week battle</Link></li>
                  <li><Link to="/popular">Popular</Link></li>
                  <li><Link to="/popular-battle">Popular battle</Link></li>
                  <li><Link to="/my-list">My list</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Switch>

                <Route path="/battle">
                  <DiscoverBattle />
                </Route>

                <Route path="/popular">
                  <Popular 
                    // {apiKey}
                    >
                  </Popular>
                </Route>

                <Route path="/popular-battle">
                  <PopularBattle />
                </Route>

                <Route path="/my-list">
                  <MyList />
                </Route>

                <Route path="/">
                  <Discover />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;