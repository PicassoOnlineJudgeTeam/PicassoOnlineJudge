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
    // return (
    //   <article>
    //     <section className="text-section">
    //       <h1>List</h1>

    //       <table style={style.table}>
    //             <thead style={style.thead}>
    //                 <tr>
    //                     <th style={{width:"100px"}}>풀었나?</th>
    //                     <th style={{width:"150px"}}>문제ID</th>
    //                     <th style={{width:"250px"}}>문제제목</th>
    //                     <th style={{width:"120px"}}>출제자</th>
    //                     <th style={{width:"120px"}}>시도횟수</th>
    //                     <th style={{width:"120px"}}>정답비율</th>
    //                 </tr>
    //             </thead>
    //             <tbody style={style.td}>
    //                 <tr>
    //                     <td> </td>
    //                     <td>MERCY</td>
    //                     <td style={{textAlign: "left"}}><Link to="question">Mercy</Link></td>
    //                     <td>Lex2Star</td>
    //                     <td>123</td>
    //                     <td>43%</td>
    //                 </tr>
    //                 <tr>
    //                     <td></td>
    //                     <td>ALCHEMY</td>
    //                     <td style={{textAlign: "left"}}><Link to="question">Alcemy</Link></td>
    //                     <td>Lex2Star</td>
    //                     <td>320</td>
    //                     <td>13%</td>
    //                 </tr>
    //                 <tr>
    //                     <td>O</td>
    //                     <td>BASEBALL</td>
    //                     <td style={{textAlign: "left"}}><Link to="question">2016프로야구</Link></td>
    //                     <td>Lex2Star</td>
    //                     <td>343</td>
    //                     <td>85%</td>
    //                 </tr>
    //                 <tr>
    //                     <td> </td>
    //                     <td>FISH</td>
    //                     <td style={{textAlign: "left"}}><Link to="question">Fish</Link></td>
    //                     <td>Lex2Star</td>
    //                     <td>34</td>
    //                     <td>10%</td>
    //                 </tr>
    //             </tbody>
    //             <ListForm/>
    //       </table>
    //     </section>
    //   </article>
    // );

    return(
        <article>
        <section className="text-section">
          <h1>List</h1>

          <table style={style.table}>
                <thead style={style.thead}>
                    <tr>
                        <th style={{width:"100px"}}>풀었나?</th>
                        <th style={{width:"150px"}}>문제ID</th>
                        <th style={{width:"250px"}}>문제제목</th>
                        <th style={{width:"120px"}}>출제자</th>
                        <th style={{width:"120px"}}>시도횟수</th>
                        <th style={{width:"120px"}}>정답비율</th>
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
