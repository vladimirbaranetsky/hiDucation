import React from "react";
import {Button, Modal} from "react-bootstrap";
import style from "./Modal.modules.css"

const ModalDisplay = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.title.subtitle}
            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDisplay;