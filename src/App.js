import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { submitAnswer } from './actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.questions[0].question}
        <select onChange={(event) => this.props.submitAnswer(event.target.value)}>
          <option value={ true }>True</option>
          <option value={ false }>False</option>
        </select>
        {this.props.score}        
      </div>
    );
  }
}

const mapStateToProps =  state => ({
  score: state.reducer.score,
  questions: state.reducer.questions,
});

const mapDispatchToProps = dispatch => ({
  submitAnswer: answer => dispatch(submitAnswer(answer)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);