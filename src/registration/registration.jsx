import React, { Component } from 'react';
import './registration.scss';
import Header from '../reusableComponents/header/header';
import SideBarComponents from '../reusableComponents/sidebar/sidebar';
import { Row, Col, Form, Card,Modal, Button } from 'react-bootstrap';
import RegistraionApi from '../api/api';
import ApiCall from '../api/api';
import SuccesssModal from '../reusableComponents/successMessage/postUpdatemessage';
import DisplayData from '../reusableComponents/successMessage/displayUserData/displayUserDat';

export default class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {

      firstName: "",
      lastName: "",
      userName: "",
      subUrb: "",
      addreeFinder: "",
      addressLane: "",
      postCode: "",
      townCity: "",
      newData: "",
      disPlay: false,
      modalState:false,
      displayUserData:false,


    }
  }

  // componentDidMount(message,access_token){
  //  this.onSubmit();
  // }
 

  onSubmit() {
    console.log("hihihi")
    let jData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      subUrb: this.state.subUrb,
      addressFinder: this.state.addreeFinder,
      addressLane: this.state.addressLane,
      postCode: this.state.postCode,
      townCity: this.state.townCity,

    };

    let message = JSON.stringify(jData);
    let token = "EAAHXzPrfuGEBALnr1jvZB8l8EmsK7pqAVPw5SKxHYLZB1vnMeZCsWQwUiVSpTcYhGp603kdRVFQcyxgLvbwewUCemULg7Xfq2XZBjEPq3HB2on415qVGdJ2I6MYVeIovLaVEiqM0KeurhQ2DSibq7NJlYUE0Jn8cUGKmZAhP3DcqFlyDHNvm0";
    let response = ApiCall.apiData(`${message}`, token);
    console.log("jijiji", message)

    console.log("reponseStatus", (message));
    let responseData = JSON.stringify(response.data);

    if (responseData !== "") {
    this.showModal()
      }

    
    return response;
    }

    apiForUserData(){
      let token ="EAAHXzPrfuGEBAKe7JqQwkfCGaxvu89UvQV9InAtjKWarGshkegwTZAPzlQg1rl3fdt7ZCapovcbbDyArDzrkkJWv01ZAwJyHnU26XyqgqZA7W9hJ9GpwwYzf2plJuZA2q3RKTFWhHn9tgAscpO4I7UAB0erIIgosTx6iKZCQkqtAZDZD"
      // console.log("repsonseD")
      let responseD = ApiCall.appUserDetails(token);
      console.log(JSON.stringify(responseD.data));

      return responseD;
    }
  
  firstName(e) {
    this.setState({ firstName: e.target.value })
  }
  lastName(e) {
    this.setState({ lastName: e.target.value })
  }
  userName(e) {
    this.setState({ userName: e.target.value })
  }
  subUrb(e) {
    this.setState({ subUrb: e.target.value })
  }
  addressFinder(e) {
    this.setState({ addreeFinder: e.target.value })
  }
  addressLane(e) {
    this.setState({ addressLane: e.target.value })
  }
  postCode(e) {
    this.setState({ postCode: e.target.value })
  }
  townCity(e) {
    this.setState({ townCity: e.target.value })
  }
  showModal = () => {
    this.setState({ modalState: true });
  };
 
  DisplayData() {
    console.log("hjhjhjhjh")
    this.setState({ displayUserData: true });
    console.log(this.state.displayUserData)
    if(!this.state.displayUserData){
    this.apiForUserData()
  }
  };
 
 


  render() {
    let handlSuccesspopupclose = () => { this.setState({ modalState: false }) };
    let handlDatapopupclose = () => { this.setState({ displayUserData: false }) };
    return (


      <div style={{ overflow: "hidden" }}>

        <Header />

        <Row style={{ backgroundColor: "#d3dee2", minHeight: "81vh", paddingTop: "7%" }}>
          <Col md={{ span: 3 }} className="sideHeight">
            <SideBarComponents />
          </Col>
          <Col md={"9"} style={{ paddingTop: "34px", paddingRight: "70px" }}>

            <Card style={{ minHeight: "98%" }}>
              <Row>

                <Col md={{ span: 6 }} style={{ paddingLeft: "30px", maxHeight: "88vh" }}>
                  <Row style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                    <Col style={{ display: "flex", justifyContent: "flex-start" }}>
                      <h6>Personal Information</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label style={{ display: "flex", justifyContent: "flex-start", fontSize: "12px" }}>First Name</Form.Label>
                          <Form.Control type="email" placeholder="First name" value={this.state.firstName} onChange={(e) => this.firstName(e)} />
                        </Form.Group>
                      </Form>

                    </Col>
                    <Col>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label style={{ display: "flex", justifyContent: "flex-start", fontSize: "12px" }}>Last Name</Form.Label>
                          <Form.Control type="email" placeholder="Last name" value={this.state.lastName} onChange={(e) => this.lastName(e)} />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label style={{ display: "flex", justifyContent: "flex-start", fontSize: "12px" }}>USERNAME</Form.Label>
                          <Form.Control type="email" placeholder="USERNAME" value={this.state.userName} onChange={(e) => this.userName(e)} />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label style={{ display: "flex", justifyContent: "flex-start", fontSize: "12px" }}>NZ ADDRESS FINDER</Form.Label>
                          <Form.Control type="email" placeholder="NZ ADDRESS FINDER" value={this.state.addreeFinder}  onChange={(e) => this.addressFinder(e)} />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label style={{ display: "flex", justifyContent: "flex-start", fontSize: "12px" }}>ADDRESS LANE 2</Form.Label>
                          <Form.Control type="email" placeholder="ADDRESS LANE 2" value={this.state.addressLane}  onChange={(e) => this.addressLane(e)} />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col>
                      <Form>
                        <Form.Group controlId="formBasicEmail">

                          <Form.Label style={{ display: "flex", justifyContent: "flex-start", fontSize: "12px" }}>SUBURB</Form.Label>
                          <Form.Control type="email" placeholder="SUBURB"  value={this.state.subUrb} onChange={(e) => this.subUrb(e)} />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={{ span: 6 }}>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label style={{ display: "flex", justifyContent: "flex-start", fontSize: "12px" }}>TOWN/CITY</Form.Label>
                          <Form.Control type="email" placeholder="TOWN/CITY" value={this.state.townCity} onChange={(e) => this.townCity(e)} />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col md={{ span: 3 }} style={{ display: "flex", justifyContent: "flex-start" }}>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label style={{ display: "flex", justifyContent: "flex-start", fontSize: "12px" }}>POSTCODE</Form.Label>
                          <Form.Control type="email" placeholder="POSTCODE" value={this.state.postCode}onChange={(e) => this.postCode(e)} />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ display: "flex", justifyContent: "flex-start" }}>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Are you above 18+" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row style={{ paddingLeft: "12px" }}>
                    <Col md={{ span: 4 }} style={{ display: "flex", justifyContent: "flex-start", backgroundColor: "red", color: "white", opacity: "0.9", padding: "20px", textAlign: "center", borderRadius: "2px" }}>
                    <Modal show={this.state.show} handleClose={()=>this.hideModal()} >


            </Modal>
            <span style={{ paddingLeft: "40px" }} onClick={() => this.onSubmit()}>Save</span>                     
                    </Col>


                  </Row>

                </Col>
                <Col>
                  <Button onClick={()=>this.DisplayData()}>Display Data</Button>
                </Col>

              </Row>
              <SuccesssModal
            show={this.state.modalState}
            onHide={handlSuccesspopupclose}
            item={this.state.addEmployeeExtraHourError}
          />
          <DisplayData
            show={this.state.displayUserData}
            onHide={handlDatapopupclose}
            item={this.state.newData}
          />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}