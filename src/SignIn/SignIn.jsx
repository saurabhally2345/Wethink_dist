import React, { useState } from 'react';
import './Signin.scss';
import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import Images from '../Asset/hero_img.png';
import ImagesEasy from '../Asset/icons_1.svg';
import Transact from '../Asset/icons_3.svg';
import DemandAndSupply from '../Asset/icons_3.svg';
import Compe from '../Asset/img_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ImageResponseive from './../Asset/hero_img_mob.png';
import RegistraionApi from '../api/api';
import Config from './../utils/config';
import Facebook from '../facebook/facebook';
import FacebookLogin from 'react-facebook-login';
import Header from './../reusableComponents/header/header';
import {Redirect} from 'react-router-dom';
import Registration from './../registration/registration';

function SignIn() {


    // componentDidMount(){

    //     let data = RegistraionApi.registration();
    //     console.log("data",data)

    //     return data;
    //   }
    const [accessToken, setAccessToken] = useState("");

    const componentClicked = (data) => {
        console.log("facebookdata", data)
    }
    const onClick = () => {
        console.log("hi")

    }

    const responseFacebook = (response) => {
        console.log("bhpsdiwale")
        setAccessToken(response.accessToken)
        console.log("bhpsdiwaledata", response.accessToken)

        if(response.name !== "" ){
            console.log("lalal",response.name !== "")
            return <Redirect to={Registration} />
        }

    };

    const registrationData = () => {

        //         var myHeaders = new Headers();
        // myHeaders.append("X-API-KEY", "ds89fdfvcb87gf8dfdg87fdghgjh897");
        // myHeaders.append("Authorization", "Basic YWRtaW46MTIzNA==");
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Status","OK")

        // var raw = JSON.stringify({"user_email":"kumar.dhanan2505@gmail.com","user_pwd":"Dem@123","c_user_pwd":"Dem@123","user_type":"2","captcha":"true","t_and_c":"true"});

        // var requestOptions = {
        //   method: 'POST',
        //   headers: myHeaders,
        //   body: raw,
        //   redirect: 'follow'
        // };

        // fetch("http://dksinha.website/eCommerce/eCommerce_API/test/test_registration/", requestOptions)
        //   .then(response => response.text())
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error', error));

        //     console.log("workingCopy")
        //     var axios = require('axios');
        //   var data = JSON.stringify({"user_email":"kumar.dhanana2505@gmail.com","user_pwd":"De@123","c_user_pwd":"De@123","user_type":"1","captcha":"true","t_and_c":"true"});

        // var config = {
        //   method: 'post',
        //   url: 'http://dksinha.website/eCommerce/eCommerce_API/test/test_registration/',
        //   headers: { 
        //     'X-API-KEY': 'ds89fdfvcb87gf8dfdg87fdghgjh897', 
        //     'Authorization': 'Basic YWRtaW46MTIzNA==', 
        //     'Content-Type': 'application/json'
        //   },
        //   data : data
        // };

        // axios(config)
        // .then(function (response) {
        //   console.log(JSON.stringify(response));
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });



    }


    const handleSubmit = () => {
        this.registrationData()
    }

    const userEmail = (e) => {
        this.setState({ user_email: e.target.value })
    }
    const passWordChange = (e) => {
        this.setState({ user_pwd: e.target.value })
    }
    const cnfChange = (e) => {
        this.setState({ c_user_pwd: e.target.value })
    }

    return (

        

        <div style={{ overflow: "hidden" }}>
            <div><Header /></div>
            <Row style={{paddingTop:"8%"}}>
                <Col style={{ minHeight: "30%" }}>
                    <Card style={{ backgroundColor: "#EEEDE9", maxHeight: "82%" }}>
                        <Row className="imageContainer">
                            <Col md={"1"} sm={"12"} xs={"12"}  >
                                <Row >
                                    <Col className="signinImageResponsive">
                                        <h1 style={{ textAlign: "left", minWidth: "525%",fontWeight:"700",paddingTop:"30px",paddingLeft:"152px",paddingRight:"36%" }}>
                                            Register for FREE <br/>& start auctioning product</h1>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col className="signinImageResponsive">
                                        <p style={{ textAlign: "left", minWidth: "625%", paddingTop: "20px",paddingLeft:"152px",paddingRight:"36%",fontWeight:"400",lineHeight:"1.5rem "}}>Please note ,the  USERNAME and PASSWORD 
                                         used <br />here are  only to access company.com Seller <br/>Account and can't be used on company.com<br/> shopping destination</p>
                                    </Col>
                                        </Row>
                            </Col>


                            <Col md={"6"} xs={"12"} sm={"12"}>

                                <img src={Images} alt="logo" className="imageRs" />
                                <img src={ImageResponseive} alt="logo" className="images    " />
                                <h1 className="overlayR"><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Register</h1>
                                <h1 className="overlayRhead">Register for FREE & start auctioning product</h1>

                            </Col>
                            <Col md={"5"} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div style={{ display: "flex", justifyContent: "right",minWidth:"100%",maxHeight:"75%",paddingTop:"32px",paddingRight:"133px" }} >
                                    <Card className="imageoverLap">
                                        <Card.Body style={{paddingTop:"25px"}}>
                                            <Row>
                                                <Col md={"5"} sm={"12"} xs={"12"} style={{ minWidth: "100%", maxHeight: "110%" }}>
                                                    <Form>
                                                        <Form.Group controlId="formBasicEmail">
                                                            <Form.Control type="email" placeholder="Enter email id" onChange={(e) => this.userEmail(e)} />
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form>
                                                        <Form.Group controlId="formBasicPassword">
                                                            <Form.Control type="password" placeholder="Enter Password" onChange={(e) => this.passWordChange(e)} />
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Form>
                                                        <Form.Group controlId="formBasicEmail">
                                                            <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => this.cnfChange(e)} />
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={"12"}>
                                                    <Form.Group controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" label="I Agree to Terms & Conditions" />
                                                    </Form.Group>
                                                    {/* <div className="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div> */}
                                                
                                                </Col>
                                                <Col>
                                                <div className="buttonR" style={{ backgroundColor: "red", padding: "12px",color:"#FFFFFF",fontSize:"17px",opacity:"0.6",fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                                                        Registration
                                                    </div>
                                                    </Col>
                                                <Col >


                                                            <FacebookLogin
                                                                appId="518750358976609"
                                                                autoLoad={true}
                                                                fields="name,email,picture"
                                                                onClick={componentClicked}
                                                                callback={responseFacebook} />,


                                                </Col>
                                            </Row>



                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>



                    </Card>
                </Col>
            </Row>

            <Row >
                <Col></Col>
                <Col md={"6"} sm={"12"} xs={"12"}>
                    <h4>Sell to crore of customers on trades right from your doorstep!</h4>
                </Col>
                <Col></Col>
            </Row>
            <Row style={{ padding: "45px" }}>
                <Col md={"4"} sm={"12"} xs={"12"} className="footerTitles" >
                    <Row>
                        <Col style={{ textAlign: "center" }}>
                            <img src={ImagesEasy} alt="logo" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Easy to use</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>On the sport onboarding with just 3 simple step</p>
                        </Col>
                    </Row>
                </Col>


                <Col md={"4"} sm={"12"} xs={"12"} >
                    <Row>
                        <Col>
                            <img src={Transact} alt="logo" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Transact Online</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Transact Online with buyers and sellers.</p>
                        </Col>
                    </Row>
                </Col>


                <Col md={"4"} sm={"12"} xs={"12"}>
                    <Row>
                        <Col>
                            <img src={DemandAndSupply} alt="logo" />
                        </Col>
                    </Row>
                    <Row>
                        <h1>Demand And Supply</h1>
                    </Row>
                    <Row>
                        <Col>
                            <p>One MarketPlace for all kind of products</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ padding: "15px" }} className="image">
                <Col><img src={Compe} alt="logo" /></Col>
                <Col >
                    <Row>
                        <Col>
                            <h4 className="textAlignment">Why sell on iTraders</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className="textAlignment">Growth</h4>
                            <p className="textAlignment">with the most competitive rate card in the industry</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className="textAlignment">Ease</h4>
                            <p className="textAlignment"> you just need one product and 2 documents to start selling on iTraders</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h4 className="textAlignment">Transparency</h4>
                            <p className="textAlignment">equal opportunities for all the sellers to grow</p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    )
}
export default SignIn;

