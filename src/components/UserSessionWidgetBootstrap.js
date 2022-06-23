import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import * as auhenticationActions from '../actions/AuthenticationActions';

import { bindActionCreators } from 'redux';
import rootReducer from '../reducer/RootReducer';

const { log } = console;

/**mapStateToProps () kopiert sich aus dem State jene Daten, die für die
Komponente von Relevanz sind. 
Name ist wohl nicht keyword, aber ist Konvention und auch in den REACT-Docs wird das genutzt */
const mapStateToProps = (state) => {
	return state;
};

function UserSessionWidgetBootstrap(props) {
	const [credentials, setCredentials] = useState({
		userID: '',
		password: '',
	});

	function handleClose(event) {
		event.preventDefault();
		props.hideLoginDialogAction();
	}

	function handleShow() {
		props.showLoginDialogAction();
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCredentials({
			...credentials,
			[name]: value,
		});
		log('credentials: ');
		log(JSON.stringify(credentials));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		log('pushed Submit');
	};

	var showModal = props.showLoginDialog;
	if (showModal === undefined) {
		showModal = false;
	}

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Login
			</Button>

			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Please Enter Credentials</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="userID"
								placeholder="Enter name"
								name="userID"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
							/>
						</Form.Group>

						<Button variant="primary" type="submit" onClick={handleSubmit}>
							Submit
						</Button>
					</Form>
				</Modal.Body>
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
