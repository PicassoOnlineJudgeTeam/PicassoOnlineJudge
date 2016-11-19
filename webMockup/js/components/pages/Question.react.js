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

let style = {
    table : {
    	"borderCollapse": "collapse",
    	"textAlign": "center",
    	"lineHeight": "20px"
    },
    thead : {
    	"padding": "10px",
    	"fontWeight": "bold",
    	"verticalAlign": "top",
    	"color": "#369",
    	"borderBottom": "3px solid #036"
    },
    td : {
    	"width": "350px",
    	"padding": "10px",
    	"verticalAlign": "top",
    	"borderBottom": "1px solid #ccc"
    },
    cmd : {
        border : "1px solid #036",
        padding : "7px",
        backgroundColor : "#f2f8ff"
    }
};

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
