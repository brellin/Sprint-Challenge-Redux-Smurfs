import React, { Component } from 'react';
import './App.scss';
import Smurfs from './Smurfs'
import { connect } from 'react-redux';
import { fetch } from '../actions'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header>
          <h1>Smurfs</h1>
        </header>
        {this.props.fetched ?
          <Smurfs /> :
          <>
            <h1>There are no Smurfs!</h1>
            <h2><button
              onClick={() => this.props.fetch()}
            >Click Here</button> to get some.</h2>
          </>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    fetched: state.fetched
  }
}

export default connect(mapStateToProps, { fetch })(App);
