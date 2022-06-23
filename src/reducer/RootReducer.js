import * as authenticationActions from '../actions/AuthenticationActions';

const { log } = console;

const initialState = {
	user: null, //das wird später der user, wenn ich mich eingelogt habe
	loginPending: false, //Ladeanzeige, während etwas passiert, damit Benutzer sieht, dass er gerade läd
	showLoginDialog: false, //das is des, was vorher im Widged war. Kommt jetzt in den Zentralen store
	error: null,
};

function rootReducer(state = initialState, action) {
	log('Hier Reducer: mein State ist: ');
	log(state);
	log('Hier Reducer: Erstmals initialisiert oder erhielt Action-Type: ' + action.type);
	log('Hier Reducer: Passende Actions werden verarbeitet...');

	switch (action.type) {
		case authenticationActions.SHOW_LOGIN_DIALOG:
			return {
				...state, //um einzelne Werte zu ändern
				showLoginDialog: true,
				error: null,
			};
		case authenticationActions.HIDE_LOGIN_DIALOG:
			return {
				...state,
				showLoginDialog: false,
				error: null,
			};

		default:
			log('Hier Reducer: mein State ist immernoch: ');
			log(state);
			return state;
	}
}
export default rootReducer;
