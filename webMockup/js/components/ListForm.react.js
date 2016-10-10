import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router';

class ListForm extends Component {

  render() {
    return (
        <tr>
            <td>O</td>
            <td>GAME</td>
            <td style={{textAlign: "left"}}><Link to="question">Game</Link></td>
            <td>Lex2Star</td>
            <td>456</td>
            <td>75%</td>
        </tr>
    )
  }
}

export default ListForm
