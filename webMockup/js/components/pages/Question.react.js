/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import QuestionForm from '../QuestionForm.react';

class Question extends Component {
  render() {
    //console.log(this.props.params.id);
    return (
        <div>
            <QuestionForm id={this.props.params.id}/>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Question);
