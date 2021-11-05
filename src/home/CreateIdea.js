import React, { useEffect } from "react";
import { Container, Form, Button, ToggleButtonGroup, ToggleButton, Col, Row } from "react-bootstrap";
// import { utils } from ''

const CreateIdeaForm = props => {

    return (
        <>
            <Container>
                <Row>
                    <Col sm={8}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Name your idea" />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" disabled placeholder="5% Upside" />
                        </Form.Group>
                        </Col>
                </Row>
                <Row>
                    <Col sm={6} className="mb-3">
                        <Form.Select aria-label="Default select example">
                            <option>Select {props.formType}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col sm={6}>
                        <Form.Select aria-label="Default select example">
                            <option>Select Risk</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Target" />
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control type="text" placeholder="Stoploss" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                    </Col>
                    <Col sm={4} className="mt-3">
                        <Button variant="primary" className="btn pull-right px-3">
                            Create
                        </Button>
                    </Col>
                </Row>
            </Container>
            <br />
        </>
    )
}

export default CreateIdeaForm;