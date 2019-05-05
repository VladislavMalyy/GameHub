import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';

const Home = () => (<div>Home route</div>);
const About = () => (<div>About route</div>);
const User = () => (<div>User route</div>);

class App extends Component {

  render() {
    
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>

        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />
      </div>
    );
  }
}

const mapStateToProps = ( state , props ) => ({
  testProps: state.test
})

export default connect(mapStateToProps)(App);
