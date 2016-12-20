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
import { Button, Icon, Modal } from 'semantic-ui-react'

let localStorage = global.window.localStorage;

class Solve extends Component {

    render() {
      var source = $('textarea#source').val();
      if (!source)
        source = ""; // init source
      //(<Link target="_blank" to={'/visualize/' + encodeURIComponent(JSON.stringify({questionId: "", source : source, idx : -1, case : ""}))} className="btn" negative >Visulize</Link>)
      return (
        <article>
          <section className="text-section">
            <h1>Solve / {this.props.params.id}</h1>
            <textarea name="source" id="source" cols="105" rows="30" defaultValue={source}>
            </textarea>
            <div style={{position:"relative", top:"10px", left:"680px"}}>
              {this.props.params.id ?
                (<ModalForm qid={this.props.params.id} user={localStorage.loggedInUser}/>)
                :
                (<Link to={'/visualize/' + encodeURIComponent(JSON.stringify({questionId: "", source : source, idx : -1, case : ""}))} className="btn" negative >Visulize</Link>)
                /*(<Button className="btn btn--modal" id="btn" onClick={function(){window.open('/visualize/' + encodeURIComponent(JSON.stringify({questionId: "", source : $('[name=source]').val(), idx : -1, case : ""})), "_blank")}}>Visulize</Button>)*/
              }
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
