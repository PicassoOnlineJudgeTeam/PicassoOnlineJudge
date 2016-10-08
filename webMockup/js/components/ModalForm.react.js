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
        <Button className="btn btn--modal" id="btn" onClick={this.closeConfigShow(true, false)}>modal</Button>

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
            <p>Test Case #0    Pass</p>
          </Modal.Content>
          <Modal.Actions>
            <Link to="/visualize" className="btn" negative>View</Link>
          </Modal.Actions>
          <Modal.Content>
               <p>Test Case #1    Pass</p>
          </Modal.Content>
          <Modal.Actions>
            <Link to="/visualize" className="btn" negative>View</Link>
          </Modal.Actions>
          <Modal.Content>
            <p>All Pass</p>
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