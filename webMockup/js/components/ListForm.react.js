import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router';

import { connect } from 'react-redux';
import axios from 'axios';
import { requestQuestions } from '../actions/AppActions';

class ListForm extends Component {

  componentDidMount() {
      let tryAjax = () => {
          axios.get('/api/questions').then(response => {
              //console.log(response.data);
              //this.props.onReceive(response.data);
              this.setState({value:response.data});
              console.log(this.state.value);
              //setTimeout(tryAjax, 1000 * 5); // REPEAT THIS EVERy 5 SECONDS
          });
      }

      tryAjax();

  }

  render() {
    // return (
    //     <tr>
    //         <td>O</td>
    //         <td>GAME</td>
    //         <td style={{textAlign: "left"}}><Link to="question">Game</Link></td>
    //         <td>Lex2Star</td>
    //         <td>456</td>
    //         <td>75%</td>
    //     </tr>
    // )
    console.log(this.state);
    if (this.state && this.state.value){
        var rtn = this.state.value.map(function(object, i){
            return <Row obj={object} key={i} />;
        });
        return (
            <tbody id="list_form">
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
                <td></td>
                <td>{this.props.obj.id}</td>
                <td style={{textAlign: "left"}}><Link to="/question">{this.props.obj.name}</Link></td>
                <td>{this.props.obj.author}</td>
                <td>{this.props.obj.count}</td>
                <td></td>
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
            console.log('a');
            dispatch(requestQuestions(value));
            console.log('b');
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListForm);