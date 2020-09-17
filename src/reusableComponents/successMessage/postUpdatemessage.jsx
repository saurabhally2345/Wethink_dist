import React, { Component } from 'react';
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';

export default class allowrevoke extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: ''
    }
  }

  render() {
      console.log(this.props)
    return (
      <Modal
        backdrop="static"
        {...this.props}
        
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#07344D", color: "white" }}>
          <Modal.Title id="contained-modal-title-vcenter" >
            <p style={{ fontFamily: "Sans-serif", color: "white" }}>Success Message</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <h5 style={{ fontFamily: "Sans-serif", textAlign: "center" }}>Your post is successfully updated
     </h5>
              <Form.Group as={Row}>
                <Col sm={{ span: 6, offset: 6 }} style={{ marginLeft: "115px", marginTop: "15px" }} >
                  <Button type="submit">Close</Button>&nbsp;&nbsp;&nbsp;
                </Col>

                <Col sm={{ span: 2 }}>


                </Col>
              </Form.Group>

            </Form>
          </Container>
        </Modal.Body>



      </Modal>

    );
  }
}