// import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Container, Form, Modal, Nav, Navbar, NavDropdown, Tab, Tabs, Button, ToggleButtonGroup, ToggleButton, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IdeaCard from "./Card";
import CreateIdeaForm from "./CreateIdea";
import './card.css'


const CreateIdeaModal = (props) => {
    const [value, setValue] = useState(false);
    const [formType, setFormType] = useState();
    const handleChange = (val) => {
        console.log(val)
        setValue(val, value)
    };
    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Form className="my-5 mx-3">
                    <h4 className="my-4">Create Trade Idea</h4>
                    <Tabs
                        defaultActiveKey="Crypto"
                        transition={true}
                        id="noanim-tab-example"
                        className="mb-3"
                        onSelect={(event) => setFormType(event)}
                    >
                        <Tab eventKey="Crypto" title="Crypto">
                            <CreateIdeaForm formType={'Crypto'} />
                        </Tab>
                        <Tab eventKey="Stocks" title="Stocks">
                            <CreateIdeaForm formType={'Stocks'} />
                        </Tab>
                    </Tabs>

                </Form>
            </Modal.Body>
        </Modal>
    )
}
const Home = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Trading Idea</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">My Ideas</Nav.Link>
                        </Nav>
                        <Nav>
                            <button className="btn btn-primary mb-3 btn-block col-12" onClick={() => setModalShow(true)}>Add Idea</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="card-main">
                    {[1,2,3,4,5,6].map(i=>(
                        <IdeaCard />
                    ))}
            </div>
            <CreateIdeaModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
export default Home;