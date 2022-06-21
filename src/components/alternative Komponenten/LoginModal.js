
export default function LoginModal(props) {
    function confirmHandler() {
        props.onConfirm();
    }
    function cancelHandler() {
        props.onCancel();
    }

    return (
        <div className="modal">
            <p>Enter your credentials</p>
            <button className="btn btn--alt" onClick={cancelHandler}>
                Cancel
            </button>  
            <button className="btn" onClick={confirmHandler}>
                Confirm
            </button>   {/* onClick ist react und in JS gibts diese property nicht onClick erwartet eine function oder den VErweis auf eine andere function */}
        </div>
    );
}

