import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router';

import { connect } from 'react-redux';
import axios from 'axios';
import { requestQuestions } from '../actions/AppActions';

let style = {
    td : {
        "width": "350px",
        "padding": "10px",
        "verticalAlign": "top",
        "borderBottom": "1px solid #ccc"
    }
}

class SolvedLogForm extends Component {

  componentDidMount() {

      let tryAjax = () => {
          axios.get('/api/solvedLogs').then(response => {
              console.log(response.data);
              this.setState({value:response.data});
          });
      }

      tryAjax();

  }

  render() {
    if (this.state && this.state.value){
        var rtn = this.state.value.map(function(object, i){
            return <Row obj={object} key={i} />;
        });
        return (
            <tbody id="list_form" style={{borderBottom:"1px solid #ccc"}}>
                {rtn}
            </tbody>
        );
    } else {
        return (
            <tbody id="list_form">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        );
    }
  }
}
class Row extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.key}</td>
                <td>{this.props.obj.questionID}</td>
                <td>{this.props.obj.memberID}</td>
                <td>{this.props.obj.size}</td>
                <td>{this.props.obj.rusult}</td>
                <td>{this.props.obj.time}</td>
                <td>{this.props.obj.submitTime}</td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onReceive: (value) => {
            dispatch(requestSolvedLog(value));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SolvedLogForm);
