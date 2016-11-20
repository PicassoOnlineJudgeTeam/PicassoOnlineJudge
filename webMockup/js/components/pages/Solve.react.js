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
import ModalForm from '../ModalForm.react';

class Solve extends Component {

    render() {
        let source = ""
                    + "# use lists\n"
                    + "x = None\n"
                    + "for i in range(6, 0, -1):\n"
                    + "    x = [i, x]\n"
                    + "\n"
                    + "# use tuples\n"
                    + "y = None\n"
                    + "for i in range(6, 0, -1):\n"
                    + "    y = (i, y)\n"
                    + "\n"
                    + "x[1][0]=y[1][1]\n";
    return (
      <article>
        <section className="text-section">
          <h1>Solve / {this.props.params.id}</h1>
          <textarea name="source" id="source" cols="105" rows="30" defaultValue={source}>
          </textarea>
          <div style={{position:"relative", top:"10px", left:"680px"}}>
            <ModalForm qid={this.props.params.id}/>
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
