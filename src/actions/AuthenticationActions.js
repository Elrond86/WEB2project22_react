import ConnectedUserSessionWidgetBootstrap from '../components/UserSessionWidgetBootstrap';

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
export function getAuthenticationSuccessAction() {
	return {
		type: AUTHENTICATION_SUCCESS,
		user: userSession.user,
		accessToken: userSession.accessToken,
	};
}
export function getAuthenticationErrorAction() {
	return {
		type: AUTHENTICATION_ERROR,
		error: error,
	};
}
