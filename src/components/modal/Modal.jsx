import React from "react";
import {Button, Modal} from "react-bootstrap";
import  "./Modal.css"

const ModalDisplay = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            title=""
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span style={{fontSize: "1.5rem", fontWeight: "300", borderBottom: "none"}}>{props.message.title}</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span style={{fontSize: "1rem", fontWeight: "300", borderBottom: "none"}}>{props.message.subtitle}</span>
            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDisplay;