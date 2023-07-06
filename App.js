/*import './App.css';
import Row from './Row';
import Nav from './Nav';
import Banner from './Banner';
import requests from './requests';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import login from './login.js';
function App() {
  const user=null;
  return (
    <div className="App">
      <Router>
        <Nav />
        <Banner />
        {!user?(
          <login/>
          ):(
            <Switch>
          <Route exact path="/">
            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </Route> 
        </Switch>
          )}
          </Router>
    </div>
  );
}
export default App;*/
/*import './App.css';
import Row from './Row';
import Nav from './Nav';
import Banner from './Banner';
import requests from './requests';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'; // Capitalized component name

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        <Nav />
        <Banner />
        {!user ? (
          <Login /> // Capitalized component name
        ) : (
          <Switch>
            <Route exact path="/">
              <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
              />
              <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
              <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
              <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
              <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
              <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
              <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
              <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;*/
import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';
import Login from './Login.js';
import './App.css'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth => {
      if (userAuth) {

        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());
      }
    }));
    return unsubscribe;
  }, [dispatch]);
  

  return (
    <div className="app">
        <Router>
          {!user ?  
          ( <Login /> ) : (
            <Switch>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
              
              <Route path="/">
              </Route>
            </Switch>
          )}
          
        </Router>
  </div>
  );
}

export default App;




