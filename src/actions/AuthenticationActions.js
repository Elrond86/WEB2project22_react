export const SHOW_LOGIN_DIALOG = 'SHOW_LOGIN_DIALOG';

export function getShowLoginDialogAction() {
    console.log("Bin in AuthenticationActions/getShowLoginDialogAction...")
    return {
        type: SHOW_LOGIN_DIALOG
    }
}
