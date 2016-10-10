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

let style = {
    cmd : {
        height : "300px",
        width : "800px",
        border : "1px solid #036",
        padding : "7px",
        backgroundColor : "#f2f8ff"
    }
};

class Visualize extends Component {
  render() {
    return (
      <article>
        <section className="text-section">
          <h1>Visualize</h1>
            <img src="../../../img/codeVisual.png" alt=""/>
          <div style={{float:"right"}}>
            <Link to="/dashboard" className="btn btn--dashboard">Dashboard</Link>
            <Link to="/solve" className="btn btn--solve">Solve</Link>
          </div>
        </section>
      </article>
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
export default connect(select)(Visualize);
