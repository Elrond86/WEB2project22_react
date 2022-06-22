import React, { useState, useReducer } from "react"
import { connect } from 'react-redux'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const {log} = console

/**mapStateToProps () kopiert sich aus dem State jene Daten, die für die
Komponente von Relevanz sind. 
Name ist wohl nicht keyword, aber ist Konvention und auch in den REACT-Docs wird das genutzt */
const mapStateToProps = state => {
  log("Bin in UserSessionWidgetBootstrap/mapStateToProps. State: ")
  log(state)
  return state
}


  function UserSessionWidgetBootstrap(props) {
    log("bin in UserSessionWidgetBootstrap")
    const [state, dispatch] = useReducer(reducer, initialState)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    var showModal = props.showLoginDialog;
    if(showModal === undefined){
      showModal = false;
    }
    log("showModal: ")
    log(showModal)
    return (
      
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  const ConnectedUserSessionWidgetBootstrap = connect(mapStateToProps, null)(UserSessionWidgetBootstrap)

  export default ConnectedUserSessionWidgetBootstrap
