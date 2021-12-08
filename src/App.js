import Header from './components/Header';
import HeaderDeco from './components/HeaderDeco';
import NavigationBar from './components/NavigationBar';
import Credits from './components/Credits';
import MainBackground from './components/MainBackground';
import SearchClass from './components/SearchClass';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <MainBackground />
      
      <Router basename='/'>

        <NavigationBar />

        <Switch>
        
          <Route path='/' exact render={() =>
            <Fragment>
              <Header />
              <HeaderDeco />
              <Credits />
            </Fragment>
          } />

          <Route path='/linear' exact key="linearSearch" render={() =>
            <Fragment>
              <SearchClass id='LinearSearch' searchType='linear' />
            </Fragment>
          } />

          <Route path='/binary' exact key="binarySearch" render={() =>
            <Fragment>
              <SearchClass id='BinarySearch' searchType='binary' />
            </Fragment>
          } />
          
        </Switch>
        
         
        
      </Router>
    </div>
  );
}

export default App;
