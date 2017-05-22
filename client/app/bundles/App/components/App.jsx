import React, { PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Releases from './Releases';
import Merch from './Merch';
import Videos from './Videos';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/releases' >Releases</Link></li>
            <li><Link to='/videos' >Videos</Link></li>
            <li><Link to='/merch' >Merch</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/releases" component={Releases} />
          <Route path="/videos" component={Videos} />
          <Route path="/merch" component={Merch} />
        </div>
      </Router>
    );
  }
}
