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
            <Link to="/visualize" className="btn" negative>View</Link>
          </Modal.Actions>
          <Modal.Content>
            <Icon color='green' name='users' />
            &nbsp; <b>Test Case #1 &nbsp; &nbsp; &nbsp; &nbsp; Pass</b>
          </Modal.Content>
          <Modal.Actions>
            <Link to="/visualize" className="btn" negative>View</Link>
          </Modal.Actions>
          <Modal.Content>
            <Icon color='green' name='users' />
            &nbsp; <b>Test Case #2 &nbsp; &nbsp; &nbsp; &nbsp; Pass</b>
          </Modal.Content>
          <Modal.Actions>
            <Link to="/visualize" className="btn" negative>View</Link>
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
