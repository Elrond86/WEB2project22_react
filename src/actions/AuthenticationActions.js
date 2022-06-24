import jwt_decode from 'jwt-decode';

export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';
export const HIDE_LOGIN_DIALOG = 'HIDE_LOGIN_DIALOG';

export const AUTHENTICATION_PENDING = 'AUTHENTICATION_PENDING';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const USER_LOGOUT = 'USER_LOGOUT';

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
		accessToken: userSession.token,
	};
}

export function getAuthenticationErrorAction() {
	return {
		type: AUTHENTICATION_ERROR,
	};
}

export function getLogoutAction() {
	return {
		type: USER_LOGOUT,
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
		method: 'GET',
		headers: { Authorization: 'Basic ' + btoa(userID + ':' + password) },
	};

	return fetch('https://localhost/authenticate', requestOptions)
		.then(handleResponse)
		.then((userSession) => {
			return userSession;
		});
}

async function handleResponse(resolvedResponse) {
	const authorizationHeader = resolvedResponse.headers.get('Authorization'); //holt Auth-Element von Header (da wo der Token drin ist)

	let token;
	if (authorizationHeader) {
		token = authorizationHeader.split(' ')[1];
	}
	var decoded = jwt_decode(token);
	console.log('decoded');
	console.log(decoded);
	if (!resolvedResponse.ok) {
		if (resolvedResponse.status === 401) {
			// auto logout if 401 resolvedResponse returned from api
			getLogoutAction();
		}
	} else {
		let userSession = {
			user: decoded,
			accessToken: authorizationHeader,
		};
		return userSession;
	}
}

/* export function logout() {
	return console.log('Forcefully logged out.');
} */
