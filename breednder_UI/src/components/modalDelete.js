import React, { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Destroy(props) {
  const [msgShow, setMsgShow] = useState(false);
  return (
    <Fragment>
      <i class="fa fa-trash fa-1x" onClick={() => setMsgShow(true)}></i>
      <Modal
        size="sm"
        show={msgShow}
        onHide={() => setMsgShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Confirmation</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="hidden" value={props.name} />
            Delete this message ?
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Yes</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Destroy;
