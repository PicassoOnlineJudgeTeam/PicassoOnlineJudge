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

class Dashboard extends Component {
  render() {
    return (
      <article>
        <section className="text-section">
          <h1>Dashboard</h1>
          <Link to="/list" className="btn btn--list">List</Link>
          <h2>나의 활동 로그</h2>
              <table style={style.table}>
                    <thead style={style.thead}>
                        <tr>
                            <th style={{width:"100px"}}>#</th>
                            <th style={{width:"150px"}}>문제ID</th>
                            <th style={{width:"250px"}}>제출자</th>
                            <th style={{width:"120px"}}>크기</th>
                            <th style={{width:"120px"}}>결과</th>
                            <th style={{width:"120px"}}>수행시간</th>
                            <th style={{width:"120px"}}>제출시간</th>
                        </tr>
                    </thead>
                    <tbody style={style.td}>
                        <tr>
                            <td>000001 </td>
                            <td>MERCY</td>
                            <td>Picasso</td>
                            <td>2.1KB</td>
                            <td>정답</td>
                            <td>123ms</td>
                            <td>3분전</td>
                        </tr>
                    </tbody>
              </table>
          <h2>최근 활동 로그</h2>
              <table style={style.table}>
                    <thead style={style.thead}>
                        <tr>
                            <th style={{width:"100px"}}>#</th>
                            <th style={{width:"150px"}}>문제ID</th>
                            <th style={{width:"250px"}}>제출자</th>
                            <th style={{width:"120px"}}>크기</th>
                            <th style={{width:"120px"}}>결과</th>
                            <th style={{width:"120px"}}>수행시간</th>
                            <th style={{width:"120px"}}>제출시간</th>
                        </tr>
                    </thead>
                    <tbody style={style.td}>
                        <tr>
                            <td>000002 </td>
                            <td>MERCY</td>
                            <td>Lex2Star</td>
                            <td>1.4KB</td>
                            <td>정답</td>
                            <td>13ms</td>
                            <td>1분전</td>
                        </tr>
                        <tr>
                            <td>000001 </td>
                            <td>MERCY</td>
                            <td>Picasso</td>
                            <td>2.1KB</td>
                            <td>정답</td>
                            <td>123ms</td>
                            <td>3분전</td>
                        </tr>
                    </tbody>
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
export default connect(select)(Dashboard);
