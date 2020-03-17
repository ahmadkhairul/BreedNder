import React, { Fragment, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Message(props) {
  const [msgShow, setMsgShow] = useState(false);
  return (
    <Fragment>
      {/*<i class="fa fa-reply fa-1x" onClick={() => setMsgShow(true)}></i>*/}
      <div onClick={() => setMsgShow(true)}>{props.container}</div>
      <Modal
        size="sm"
        show={msgShow}
        onHide={() => setMsgShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Message</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <label for="username">Send To :</label>
              <Form.Control name="username" type="text" value={props.name} />
            </Form.Group>
            <Form.Group>
              <Form.Control as="textarea" rows="3" placeholder="Message" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Send</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Message;
