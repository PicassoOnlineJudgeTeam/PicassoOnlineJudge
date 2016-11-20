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

class ListForm extends Component {

  componentDidMount() {
	  let tryAjax = () => {
		axios.get('/api/questions').then(response => {
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
				</tr>
			</tbody>
		);
	}
  }
}
class Row extends Component {
	render () {
		var qLink = "/question/" + this.props.obj.id;
		return (
			<tr>
				<td></td>
				<td>{this.props.obj.id}</td>
				<td style={{textAlign: "left"}}><Link to={qLink}>{this.props.obj.name}</Link></td>
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
			// TODO ???
			dispatch(requestQuestions(value));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
