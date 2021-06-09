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
            title=""
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span style={{fontSize: "1.8vw"}}>{props.title.title}</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span style={{fontSize: "1.2vw"}}>{props.title.subtitle}</span>
                <span style={{fontWeight: "bold", fontSize: "1.3vw", color: "#40e0d0"}} >{props.title.companyName}</span>
            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDisplay;