import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router';

class ModalForm extends Component {
  state = { open: false }

  closeConfigShow = (closeOnEscape, closeOnDocumentClick) => () => {
    this.setState({ closeOnEscape, closeOnDocumentClick, open: true })
  }

  close = () => this.setState({ open: false })
  render() {
    const { open, closeOnEscape, closeOnDocumentClick } = this.state
    return (
      <div>
        <Button className="btn btn--modal" id="btn" onClick={this.closeConfigShow(true, false)}>Submit</Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDocumentClick={closeOnDocumentClick}
          onClose={this.close}
        >
          <Modal.Header>
            Congrats, you solved this challenge!
          </Modal.Header>
          <Modal.Content>
            <Icon color='green' name='users' />
            &nbsp; <b>Test Case #0 &nbsp; &nbsp; &nbsp; &nbsp; Pass</b>
          </Modal.Content>
          <Modal.Actions>
          <Button id="btn" onClick={function(){window.open("http://localhost:8003/iframe-embed.html#code=a_var+%3D+'global+value'%0Adef+outer(%29%3A%0A++a_var+%3D+'enclosed+value'%0A%0A++def+inner(%29%3A%0A++++a_var+%3D+'local+value'%0A++++print(a_var%29%0A++++def+inner2(%29%3A%0A++++++++a_var+%3D+'local+value2'%0A++++++++print(a_var%29%0A++++inner2(%29%0A++inner(%29%0A%0Aouter(%29&mode=display&origin=&cumulative=false&heapPrimitives=&textReferences=&py=2&rawInputLstJSON=%5B%5D&curInstr=0")}}>View</Button>
          </Modal.Actions>
          <Modal.Content>
            <Icon color='green' name='users' />
            &nbsp; <b>Test Case #1 &nbsp; &nbsp; &nbsp; &nbsp; Pass</b>
          </Modal.Content>
          <Modal.Actions>
            <Button id="btn" onClick={console.log("hmm")}>View</Button>
          </Modal.Actions>
          <Modal.Content>
            <Icon color='green' name='users' />
            &nbsp; <b>Test Case #2 &nbsp; &nbsp; &nbsp; &nbsp; Pass</b>
          </Modal.Content>
          <Modal.Actions>
            <Button id="btn" onClick={console.log("hmm")}>View</Button>
          </Modal.Actions>
          <Modal.Content>
            <Icon color='green' name='users' />
            &nbsp; <b>All Pass</b>
          </Modal.Content>
          <Modal.Actions>
            <Link to="/Dashboard" className="btn" negative>Return</Link>
            <Button id="btn" onClick={this.close}>No</Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalForm
