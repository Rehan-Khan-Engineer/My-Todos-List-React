function Modal(props) {
  function cancelModalHandler() {
    props.customOnClickCancel();
  }

  function confirmModalHandler() {
    props.customOnClickConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelModalHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmModalHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
