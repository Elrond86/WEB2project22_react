/* import { ListGroup } from 'react-bootstrap';
import ConnectedUserSessionWidgetBootstrap from '../components/UserSessionWidgetBootstrap';
 */

export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
export const HIDE_LOGIN_DIALOG = 'HIDE_LOGIN_DIALOG';

export const AUTHENTICATION_PENDING = 'AUTHENTICATION_PENDING';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';

export function getShowLoginDialogAction() {
	return {
		type: SHOW_LOGIN_DIALOG,
	};
}

export function getHideLoginDialogAction() {
	return {
		type: HIDE_LOGIN_DIALOG,
	};
}

export function getAuthenticationPendingAction() {
	return {
		type: AUTHENTICATION_PENDING,
	};
}

export function getAuthenticationSuccessAction(userSession) {
	return {
		type: AUTHENTICATION_SUCCESS,
		user: userSession.user,
		accessToken: userSession.accessToken,
	};
}

export function getAuthenticationErrorAction() {
	return {
		type: AUTHENTICATION_ERROR,
	};
}

export function authenticateUser(userID, password) {
	console.log('Authenticate');

	return (dispatch) => {
		dispatch(getAuthenticationPendingAction());
		login(userID, password)
			.then(
				(userSession) => {
					dispatch(getAuthenticationSuccessAction(userSession));
				},
				(error) => {
					dispatch(getAuthenticationErrorAction(error));
				}
			)
			.catch((error) => {
				dispatch(getAuthenticationErrorAction(error));
			});
	};
}

function login(userID, password) {
	const requestOptions = {
		method: 'POST',
		headers: { Authorization: 'Basic ' + btoa(userID + ':' + password) },
	};

	return fetch('http://localhost:8080/authenticate', requestOptions)
		.then(handleResponse)
		.then((userSession) => {
			return userSession;
		});
}

function handleResponse(response) {
	const authorizationHeader = response.headers.get('Authorization');
	return response.text().then((text) => {
		const data = text && JSON.parse(text);

		let token;
		if (authorizationHeader) {
			token = authorizationHeader.split(' ')[1];
		}

		if (!response.ok) {
			if (response.status === 401) {
				// auto logout if 401 response returned from api
				logout();
			}
			const error = (data && data.message) || response.statusText;
			return Promise.reject(error);
		} else {
			let userSession = {
				user: data,
				accessToken: token,
			};
			return userSession;
		}
	});
}

function logout() {
	console.log('Forcefully logged out.');
}
