import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router';

import { connect } from 'react-redux';
import axios from 'axios';
import querystring from 'querystring';

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (var i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}

class ModalForm extends Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDocumentClick) => () => {
    this.setState({ closeOnEscape, closeOnDocumentClick, open: true });

    let tryAjax2 = () => {
        var result = this.state.compileResult.indexOf(false) === -1 ? "PASS" : "FAIL";
        var d = new Date();
        var submitTime = leadingZeros(d.getFullYear(), 4) + '-' +
                        leadingZeros(d.getMonth() + 1, 2) + '-' +
                        leadingZeros(d.getDate(), 2) + ' ' +
                        leadingZeros(d.getHours(), 2) + ':' +
                        leadingZeros(d.getMinutes(), 2);
        console.log(submitTime);

        axios.post('/api/addLog/', {
            questionID: this.props.qid,
            memberID: this.props.user,
            size:"1.3kb",
            result : result,
            time : "200ms",
            submitTime : submitTime
        }).then( response => {
            console.log(response);
        });
    }

    let tryAjax = () => {
      axios.get('/api/testWithSource/' + encodeURIComponent(JSON.stringify({code : $('textarea#source').val(), qid: this.props.qid}))).then(response => {
        this.setState({compileResult : response.data});
        console.log(this.state);
        tryAjax2();
      });
    }

    tryAjax();
 }

  close = () => this.setState({ open: false })

  render() {
    const { open, closeOnEscape, closeOnDocumentClick, compileResult} = this.state
    let source = $('textarea#source').val();
    let result = {
        total:true,
        true:0,
        false:0
    }
    let cases = [];
    if (compileResult){
      $(compileResult).each(function(idx, val){
        if (result.total) {
            result.total = val.flag ? true : false;
        }
        if (val.flag) {
            result.true += 1;
        } else {
          result.false += 1;
        }

        cases.push(
          <Modal.Content key={idx + "_TF"}>
            <Icon color='green' name='users' />
            &nbsp; <b>Test Case #{idx} &nbsp; &nbsp; &nbsp; &nbsp;{val.flag ? "PASS" : "FAIL"}</b>
          </Modal.Content>
          );
        cases.push(
          <Modal.Actions key={idx + "_LINK"}>
            <Link to={'/visualize/' + encodeURIComponent(JSON.stringify({source : source, idx : idx, case : val.case}))} className="btn" negative>View</Link>
          </Modal.Actions>
        );
      });
    }
    console.log(result);

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
            {result.total ? (<p>Congrats, you solved this challenge!</p>) : (<p style={{color:"red"}}>Wrong Answer</p>)}
          </Modal.Header>

          {cases}

          <Modal.Content>
            {result.total ? (
                <div>
                    <Icon color='green' name='users' />
                    &nbsp; <b>All Pass</b>
                </div>
            ) : (
                <div>
                    <Icon color='red' name='users' />
                    &nbsp; <b>{result.true} Pass, {result.false} Fail</b>
                </div>
            )}
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
