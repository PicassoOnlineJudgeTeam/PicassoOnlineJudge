import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router';

import { connect } from 'react-redux';
import axios from 'axios';
import { requestQuestions } from '../actions/AppActions';

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

class QuestionForm extends Component {

  componentDidMount() {
      let tryAjax = () => {
          axios.get('/api/questions').then(response => {
              //console.log(response.data);
              //console.log(this.props);
              //this.props.onReceive(response.data);
              for (var v in response.data) {

                if(response.data[v].id === this.props.id){
                    //console.log(response.data[v]);
                    this.setState({value:response.data[v]});
                }
              }
              //console.log(this.state.value);
              //setTimeout(tryAjax, 1000 * 5); // REPEAT THIS EVERy 5 SECONDS
          });
      }

      tryAjax();

  }

  render() {
      var sLink = "/solve/" + this.props.id;

      if (this.state && this.state.value){
          //console.log(this.state.value);
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
                                <td>{this.state.value.id}</td>
                                <td>{this.state.value.ltdTime}</td>
                                <td>65536kb</td>
                                <td>{this.state.value.count}</td>
                                <td>{this.state.value.comCount}(49%)</td>
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
                                <td>{this.state.value.author}</td>
                                <td>{this.state.value.origin}</td>
                                <td> </td>
                            </tr>
                        </tbody>
                  </table>
                  <h3>문제</h3>
                  <NewLineText text={this.state.value.content}/>
                  <h3>입력</h3>
                  <NewLineText text={this.state.value.input}/>
                  <h3>출력</h3>
                  <NewLineText text={this.state.value.output}/>
                  <h3>예제입력</h3>
                  <div style={style.cmd}>
                    <NewLineText text={this.state.value.exInput}/>
                  </div>
                  <h3>예제출력</h3>
                  <div style={style.cmd}>
                    <NewLineText text={this.state.value.exOutput}/>
                  </div>
                </section>
                <div style={{align:"center"}}>
                    <Link to={sLink} className="btn btn--solve" style={{position:"relative", left:"700px"}}>Solve</Link>
                </div>
              </article>
          );
      }else {
          return(
            <div>not found</div>
          );
      }
  }
}

class NewLineText extends Component {
    render () {
        //console.log(this.props);
        var strArr = this.props.text.split("\n");
        var addPTag = strArr.map(function(value, i) {
            return <p key={i}>{value}</p>;
        });
        return(
            <div>
                {addPTag}
            </div>
        );
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
            dispatch(requestQuestions(value));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
