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
import SolvedLogForm from '../SolvedLogForm.react';
import MyLogForm from '../MyLogForm.react';

let localStorage = global.window.localStorage;

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
      //console.log(localStorage.loggedInUser);
    return (
      <article>
        <section className="text-section">
          <h1>Dashboard</h1>
          <Link to="/list" className="btn btn--list">List</Link>
          {/*<Link to="/Solve" className="btn btn--list">Solve</Link>*/}
          <h2>나의 활동 로그</h2>
              <table style={style.table}>
                    <thead style={style.thead}>
                        <tr>
                            <th style={{width:"70px"}}>#</th>
                            <th style={{width:"150px"}}>문제ID</th>
                            <th style={{width:"250px"}}>제출자</th>
                            <th style={{width:"120px"}}>크기</th>
                            <th style={{width:"120px"}}>결과</th>
                            <th style={{width:"120px"}}>수행시간</th>
                            <th style={{width:"150px"}}>제출시간</th>
                        </tr>
                    </thead>
                    <MyLogForm user={localStorage.loggedInUser} />
              </table>
          <h2>최근 활동 로그</h2>
              <table style={style.table}>
                    <thead style={style.thead}>
                        <tr>
                            <th style={{width:"70px"}}>#</th>
                            <th style={{width:"150px"}}>문제ID</th>
                            <th style={{width:"250px"}}>제출자</th>
                            <th style={{width:"120px"}}>크기</th>
                            <th style={{width:"120px"}}>결과</th>
                            <th style={{width:"120px"}}>수행시간</th>
                            <th style={{width:"150px"}}>제출시간</th>
                        </tr>
                    </thead>
                    <SolvedLogForm/>
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
