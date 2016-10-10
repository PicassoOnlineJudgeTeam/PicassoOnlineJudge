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
    },
    cmd : {
        border : "1px solid #036",
        padding : "7px",
        backgroundColor : "#f2f8ff"
    }
};

class Question extends Component {
  render() {
    return (
      <article>
        <section className="text-section">
          <h1>Question</h1>
          <h3>문제 정보</h3>
          <table style={style.table}>
                <thead style={style.thead}>
                    <tr>
                        <th style={{width:"120px"}}>문제ID</th>
                        <th style={{width:"150px"}}>시간제한</th>
                        <th style={{width:"250px"}}>메모리제한</th>
                        <th style={{width:"120px"}}>제출횟수</th>
                        <th style={{width:"120px"}}>정답횟수(비율)</th>
                    </tr>
                </thead>
                <tbody style={style.td}>
                    <tr>
                        <td>MERCY</td>
                        <td>10000ms</td>
                        <td>65536kb</td>
                        <td>12442</td>
                        <td>6117(49%)</td>
                    </tr>
                </tbody>
          </table>
          <table style={style.table}>
                <thead style={style.thead}>
                    <tr>
                        <th style={{width:"230px"}}>출제자</th>
                        <th style={{width:"300px"}}>출처</th>
                        <th style={{width:"230px"}}>분류</th>
                    </tr>
                </thead>
                <tbody style={style.td}>
                    <tr>
                        <td>Lex2Star</td>
                        <td>제주대학교 컴퓨터교육과 Picasso</td>
                        <td> </td>
                    </tr>
                </tbody>
          </table>
          <h3>문제</h3>
          <p>The administrators of picasso.com are so merciful, that they prepared really, really easy problem to prevent contestants from frustration.</p>
          <h3>입력</h3>
          <p>Input contains just one positive integer N(N &lt;= 10).</p>
          <h3>출력</h3>
          <p>Print N lines. Every line should contain 'Hello Picasso!'(quotation marks for clarity) and nothing else.</p>
          <h3>예제입력</h3>
          <div style={style.cmd}>
            2
          </div>
          <h3>예제출력</h3>
          <div style={style.cmd}>
              Hello Picasso!<br/>Hello Picasso!
          </div>
        </section>
        <div style={{align:"center"}}>
            <Link to="/solve" className="btn btn--solve" style={{position:"relative", left:"700px"}}>Solve</Link>
        </div>
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
export default connect(select)(Question);
