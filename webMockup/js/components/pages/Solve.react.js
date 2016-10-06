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

class Solve extends Component {
  render() {
    return (
      <article>
        <section className="text-section">
          <h1>Solve</h1>
          <textarea name="source" id="source" cols="95" rows="30"></textarea>
          <div>
            <Link to="/visualize" className="btn btn--visualize">visualize</Link>
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
export default connect(select)(Solve);
