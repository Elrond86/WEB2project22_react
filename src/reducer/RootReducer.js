import * as authenticationActions from '../actions/AuthenticationActions';

const { log } = console;

const initialState = {
	user: null, //das wird später der user, wenn ich mich eingelogt habe
	loginPending: false, //Ladeanzeige, während etwas passiert, damit Benutzer sieht, dass er gerade läd
	showLoginDialog: false, //das is des, was vorher im Widged war. Kommt jetzt in den Zentralen store
	error: null,
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case authenticationActions.SHOW_LOGIN_DIALOG:
			log('Hier Reducer: ' + action.type);
			return {
				...state, //um einzelne Werte zu ändern
				showLoginDialog: true,
				error: null,
			};
		case authenticationActions.HIDE_LOGIN_DIALOG:
			log('Hier Reducer: ' + action.type);
			return {
				...state,
				showLoginDialog: false,
				error: null,
			};
		case authenticationActions.AUTHENTICATION_PENDING:
			log('Hier Reducer: ' + action.type);
			return {
				...state,
				loginPending: true,
				error: null,
			};
		case authenticationActions.AUTHENTICATION_SUCCESS:
			return {
				...state,
				showLoginDialog: false,
				loginPending: false,
				user: action.user,
				accessToken: action.accessToken,
				error: null,
			};
		case authenticationActions.USER_LOGOUT:
			return {
				...state,
				user: null,
				accessToken: null,
				error: null,
			};

		default:
			//log('Hier Reducer: mein State ist immernoch: ');
			log(state);
			return state;
	}
}
export default rootReducer;
