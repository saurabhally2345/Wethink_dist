import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './profilebody.scss';
import SoldPic from '../Asset/icon_7.svg';
import ProfileUser from '../Asset/profileUser.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import FacebookLogin from 'react-facebook-login';
import config from '../utils/config';
import apiCall from '../api/api';
class  profileBody extends React.Component {
constructor(props){
    super(props)
    this.state={
        auth:false,
        userFirstName:"",
        userLastName:"",
    }
}

render(){

    let faceBookData ;

this.state.auth ? 
faceBookData=(
  <div>
    Hi bhosdiwala
  </div>
):
  faceBookData=(
   
  <FacebookLogin
    appId="518750358976609"
    autoLoad={true}
    fields="name,email,picture"
    onClick={()=>this.componentClicked()}
    callback={()=>this.responseFacebook()} />
  )
    return (
        <div style={{paddingTop:"35px"}} >
           
                    
                        <Row className="profileBody" style={{ display: "flex", justifyContent: "flex-start", padding: "15px",minWidth:"109%", backgroundColor: "black", opacity: 0.8 }}>
                         <Col  md={"12"} xs={"12"} className="columneSlider">
                         
                         <Row className="imageSlider">
                         <Col xs={"12"} >
                         <h1 className="registerRes"><FontAwesomeIcon icon={faArrowLeft} />&nbsp;My Profile</h1>
                         </Col>
                            <Col className="columneSli" md={{span:2}} xs={"1"} style={{paddingTop:"6px"}}>
                                <Card style={{minWidth:"132%"}} >
                                    <Card.Body>
                                    <Row>
                                            <Col md={"1"} xs={"3"}>
                                                <img src={SoldPic} alt="logo" />
                                            </Col>
                                            <Col md={{span:9,offset:1}}xs={"9"} style={{display:"flex",justifyContent:"flex-start",paddingLeft:"42px"}}>
                                                   <Row>Items posted</Row>
                                                   <Row style={{paddingTop:"25px"}}>23</Row>

                                                    </Col>
                                            </Row>


                                    </Card.Body>
                                </Card>

                            </Col>

                            <Col className="columneSli" md={{span:2}} xs={"1"} style={{paddingTop:"6px",marginLeft:"30px"}}>
                                <Card style={{minWidth:"132%"}}>
                                    <Card.Body>
                                    <Row>
                                            <Col md={"1"} xs={"3"}>
                                                <img src={SoldPic} alt="logo" />
                                            </Col>
                                            <Col md={{span:9,offset:1}}xs={"9"} style={{display:"flex",justifyContent:"flex-start",paddingLeft:"42px"}}>
                                                   <Row>Items posted</Row>
                                                   <Row style={{paddingTop:"25px"}}>23</Row>

                                                    </Col>
                                            </Row>


                                    </Card.Body>

                                </Card>
                            </Col>
                            <Col className="columneSli" md={{span:2}} xs={"1"} style={{paddingTop:"6px",marginLeft:"30px"}} >
                                <Card style={{minWidth:"132%",minHeight:"80%"}}>

                                    <Card.Body>
                                        <Row>
                                            <Col md={"1"} xs={"3"}>
                                                <img src={SoldPic} alt="logo" />
                                            </Col>
                                            <Col md={{span:9,offset:1}}xs={"9"} style={{display:"flex",justifyContent:"flex-start",paddingLeft:"42px"}}>
                                                   <Row>Items posted</Row>
                                                   <Row style={{paddingTop:"25px"}}>23</Row>

                                                    </Col>
                                            </Row>


                                    </Card.Body>

                                </Card>

                            </Col>

                            <Col className="columneSli" md={{span:2}} xs={"1"} style={{paddingTop:"6px",marginLeft:"30px"}} >
                                <Card style={{minWidth:"132%",minHeight:"82%"}}>
                                    <Card.Body>
                                    <Row>
                                            <Col md={"1"} xs={"3"}>
                                                <img src={SoldPic} alt="logo" />
                                            </Col>
                                            <Col md={{span:9,offset:1}}xs={"9"} style={{display:"flex",justifyContent:"flex-start",paddingLeft:"42px"}}>
                                                   <Row>Items posted</Row>
                                                   <Row style={{paddingTop:"25px"}}>23</Row>

                                                    </Col>
                                            </Row>

                                    </Card.Body>

                                </Card>
                            </Col>

                            </Row>
                            </Col>
                        </Row>



                        <Row style={{ minHeight: "58vh",boxShadow:"0px 1px 1px 1px lightgray",minWidth:"109%",borderBottom:"1px solid lightgray",padding:"10px",backgroundColor:"white",lineHeight:"1.5rem" }}>
                            <Col md={"12"} >
                            
                                    <Row className="cardRR">
                                        <Col md={"5"} sm={"12"} xs={"12"}>
                                            <Row style={{paddingTop:"10px",paddingBottom:"10px"}}>
                                                <Col xs={{span:9}}><h5 style={{display:"flex",justifyContent:"flex-start"}}>Personal Information</h5></Col>
                                                <Col xs={{span:3}}><h5 style={{display:"flex",justifyContent:"flex-end",color:"bue"}} >Edit</h5></Col>
                                            </Row>

                                            <Row>
                                                <Col><h6 style={{display:"flex",justifyContent:"flex-start"}}>First Name</h6></Col>
                                                <Col style={{display:"flex",justifyContent:"flex-start"}}>Stella</Col>
                                            </Row>

                                            <Row>
                                                <Col><h6 style={{display:"flex",justifyContent:"flex-start"}}>Last Name</h6></Col>
                                                <Col style={{display:"flex",justifyContent:"flex-start"}}>William</Col>
                                            </Row>

                                            <Row>
                                                <Col><h6 style={{display:"flex",justifyContent:"flex-start"}}>Username</h6></Col>
                                                <Col style={{display:"flex",justifyContent:"flex-start"}}>Stella20@123</Col>
                                            </Row>

                                            <Row>
                                                <Col><h6 style={{display:"flex",justifyContent:"flex-start"}}>Age</h6></Col>
                                                <Col style={{display:"flex",justifyContent:"flex-start"}}>18 +</Col>
                                            </Row>
                                            
                                            <Row>
                                                <Col><h6 style={{display:"flex",justifyContent:"flex-start"}}>Country</h6></Col>
                                                <Col style={{display:"flex",justifyContent:"flex-start"}}>NZ</Col>
                                            </Row>


                                            <Row>
                                                <Col md={{span:4}} xs={"2"}><h6 style={{ display: "flex", justifyContent: "flex-start" }}>Addresss:</h6></Col>
                                                <Col md={{span:6,offset:1}}  xs={"10"} style={{ display: "flex", justifyContent: "flex-start",paddingLeft:"20px" }}>Chitragupta Nagar ,Madhubani,Bihar.</Col>

                                            </Row>

                                            <Row className="footerR">
                                                <Col md={"2"} xs={"4"}><h6 style={{ display: "flex", justifyContent: "flex-start" }}>Email:</h6></Col>
                                                <Col md={"3"} xs={"4"} style={{paddingRight:"30px",color:"blue"}}>Verify</Col>
                                            </Row>
                                            <Row>
                                                <Col style={{ display: "flex", justifyContent: "flex-start" }}>
                                                <p>Stella2023@gmail.com</p>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md={"4"} xs={"6"}><h6 style={{ display: "flex", justifyContent: "flex-start"}}>Mobile number:</h6></Col>
                                                <Col md={"3"} xs={"5"}style={{paddingRight:"25px",color:"blue",display:"flex",justifyContent:"flex-start"}}>Add</Col>
                                            </Row>



                                            <Row>
                                            <Col md={"7"} sm={"8"} xs={"12"} style={{ display: "flex", justifyContent: "flex-start",paddingTop:"10px" }}>
                                           
                                               <FontAwesomeIcon icon={faPhoneAlt} style={{color:"blue"}}/>
                                           
                                        </Col>
                                            </Row>

                                            <Row>
                                                <Col md={"12"} xs={"12"} style={{display:"flex",justifyContent:"flex-start",paddingTop:"10px"}}>Add your mobile Number</Col>

                                            </Row>

                                        </Col>

                                        <Col md={"6"} style={{display:"flex",paddingTop:"269px",paddingLeft:"370px"}}><img src={ProfileUser} alt ="logo" /></Col>
                                    </Row>
                            </Col>
                        </Row>
                  



        </div>
    )
}
}
export default profileBody;