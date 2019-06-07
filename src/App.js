import React from 'react';
import logo from './logo.svg';
import './App.css';
import Somepage from './components/somepage'

import { connect } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'
// рекомендовано
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

const Home = ()=>( <h1>Home</h1> )
class App extends React.Component {
  render(){
    return(
      <BrowserRouter history={history}>
        <div>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/somepage">somepage</Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
          </ul>  
        </div>

        <hr/>

        <Route exact path = "/" component={Home} />
        <Route path = "/somepage" component={Somepage} />

      </BrowserRouter>
    )
  }
}




export default App;
