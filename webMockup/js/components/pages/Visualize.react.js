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
import VisualForm from '../VisualForm.react';
import { Button, Icon, Modal } from 'semantic-ui-react'

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
    let result = JSON.parse(decodeURIComponent(this.props.params.executionResult));
    //<Link to={"/solve/" + result.questionId} className="btn btn--solve">Solve</Link>
    return (
        <article>
          <section className="text-section">
            <h1>Visualize</h1>
            <div style={{position:"relative", top:"-45px", left:"680px"}}>
                <Button className="btn btn--modal" id="btn" onClick={function(){window.close()}}>Solve</Button>
            </div>
            <div>
                <VisualForm source={result}/>
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
