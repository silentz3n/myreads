import React from 'react'
import '../src/App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MyReads from './pages/myreads';
import CurrentlyReading from './pages/currentlyreading';
import WantToRead from './pages/wanttoread';
import Read from './pages/read';
import Search from './pages/search';
import SearchContext from './Context/UserContextProvider';


function App() {
  return (
    <SearchContext>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={MyReads} />
          <Route path="/currentlyreading" component={CurrentlyReading} />
          <Route path="/wanttoread" component={WantToRead} />
          <Route path="/read" component={Read} />
          <Route path="/search" component={Search} />eeee
        </Switch>
      </Router>
    </SearchContext>
  );
}


export default App;
