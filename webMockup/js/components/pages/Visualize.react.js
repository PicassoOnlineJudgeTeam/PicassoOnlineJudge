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

class Visualize extends Component {
  render() {
    return (
      <article>
        <section className="text-section">
          <h1>Visualize</h1>
          <Link to="/dashboard" className="btn btn--dashboard">Dashboard</Link>
          <Link to="/solve" className="btn btn--solve">Solve</Link>
          <p>제출한 소스와 시각화자료를 출력함.</p>
          <p>디버깅을 위해 solve페이지 이동이 가능.</p>
          <p>디버깅과정을 마친 후 마지막 제출한 소스를 로그로 작성해야할듯.</p>
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
