import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import * as auhenticationActions from '../actions/AuthenticationActions';

import { bindActionCreators } from 'redux';

const { log } = console;

/**mapStateToProps () kopiert sich aus dem State jene Daten, die für die
Komponente von Relevanz sind. 
Name ist wohl nicht keyword, aber ist Konvention und auch in den REACT-Docs wird das genutzt */
const mapStateToProps = (state) => {
	log('Bin in UserSessionWidgetBootstrap/mapStateToProps. State: ');
	log(state);
	return state;
};

function UserSessionWidgetBootstrap(props) {
	log('bin in UserSessionWidgetBootstrap');
	console.log(props);

	const handleClose = (e) => {
		e.preventDefault();
		props.hideLoginDialogAction();
	};

	const handleShow = () => {
		props.showLoginDialogAction();
	};
	var showModal = props.showLoginDialog;
	if (showModal === undefined) {
		showModal = false;
	}
	log('showModal: ');
	log(showModal);
	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Login
			</Button>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header>
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

/** Hier verbinde ich Funktionen mit dem dispatch. Damit schmeißt mir der Store diese Functionen in die Probs.
 * Die kann ich dann benutzen mit props.showLoginDialogAction & props.hideLoginDialogAction
 */
const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			showLoginDialogAction: auhenticationActions.getShowLoginDialogAction,
			hideLoginDialogAction: auhenticationActions.getHideLoginDialogAction,
			//authenticatUserAction: auhenticationActions.authenticationUser
		},
		dispatch
	);

const ConnectedUserSessionWidgetBootstrap = connect(
	mapStateToProps,
	mapDispatchToProps
)(UserSessionWidgetBootstrap);

export default ConnectedUserSessionWidgetBootstrap;
