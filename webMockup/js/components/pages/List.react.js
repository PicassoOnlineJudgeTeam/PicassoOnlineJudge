/*
 * HomePage
 *
 * The List is only visible to logged in users
 * Route: /List
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ListForm from '../ListForm.react'


let style = {
    table : {
    	"borderCollapse": "collapse",
    	"textAlign": "center",
    	"lineHeight": "20px"
    },
    thead : {
    	"padding": "10px",
    	"fontWeight": "bold",
    	"verticalAlign": "top",
    	"color": "#369",
    	"borderBottom": "3px solid #036"
    },
    td : {
    	"width": "350px",
    	"padding": "10px",
    	"verticalAlign": "top",
    	"borderBottom": "1px solid #ccc"
    }
};

class List extends Component {
  render() {

    return(
        <article>
        <section className="text-section">
          <h1>List</h1>

          <table style={style.table}>
                <thead style={style.thead}>
                    <tr>
                        <th style={{width:"70px"}}>풀었나?</th>
                        <th style={{width:"150px"}}>문제ID</th>
                        <th style={{width:"300px"}}>문제제목</th>
                        <th style={{width:"120px"}}>출제자</th>
                        <th style={{width:"120px"}}>시도횟수</th>
                        <th style={{width:"100px"}}>정답비율</th>
                    </tr>
                </thead>
                <ListForm />
            </table>
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
export default connect(select)(List);
