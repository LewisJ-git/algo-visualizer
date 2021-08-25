import Header from './components/Header';
import HeaderDeco from './components/HeaderDeco';
import NavigationBar from './components/NavigationBar';
import Credits from './components/Credits';
import MainBackground from './components/MainBackground';
import LinearSearch from './components/LinearSearch';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <MainBackground />
      
      <Router basename='/algo-visualizer'>

        <NavigationBar />

        <Switch>
        
          <Route path='' exact render={() =>
            <Fragment>
              <Header />
              <HeaderDeco />
              <Credits />
            </Fragment>
          } />

          <Route path='/linear' exact render={() =>
            <Fragment>
              <LinearSearch />
            </Fragment>
          } />
          
        </Switch>
        
         
        
      </Router>
    </div>
  );
}

export default App;
