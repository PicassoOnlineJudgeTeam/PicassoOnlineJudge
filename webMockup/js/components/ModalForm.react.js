import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router';

import { connect } from 'react-redux';
import axios from 'axios';

class ModalForm extends Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDocumentClick) => () => {
    this.setState({ closeOnEscape, closeOnDocumentClick, open: true });
    let tryAjax = () => {
      axios.get('/api/testWithSource/' + encodeURIComponent(JSON.stringify({code : $('textarea#source').val(), qid: this.props.qid}))).then(response => {
        this.setState({compileResult : response.data});
      });
    }
    tryAjax();
  }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDocumentClick, compileResult} = this.state
    let source = $('textarea#source').val();
    let cases = [];
    if (compileResult){
      $(compileResult).each(function(idx, val){
        cases.push(
          <Modal.Content>
            <Icon color='green' name='users' />
            &nbsp; <b>Test Case #{idx} &nbsp; &nbsp; &nbsp; &nbsp; {val ? "PASS" : "FAIL"}</b>
          </Modal.Content>
          );
        cases.push(
          <Modal.Actions>
            <Link to={'/visualize/' + encodeURIComponent(JSON.stringify({source : source, idx : idx}))} className="btn" negative>View</Link>
          </Modal.Actions>
        );
      });
    }

    return (
      <div>
        <Button className="btn btn--modal" id="btn" onClick={this.closeConfigShow(true, false)}>Submit</Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDocumentClick={closeOnDocumentClick}
          onClose={this.close}
        >
          <Modal.Header>
            Congrats, you solved this challenge!
          </Modal.Header>

          {cases}

          <Modal.Content>
            <Icon color='green' name='users' />
            &nbsp; <b>All Pass</b>
          </Modal.Content>
          <Modal.Actions>
            <Link to="/dashboard" className="btn" negative>Return</Link>
            <Button id="btn" onClick={this.close}>No</Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalForm
