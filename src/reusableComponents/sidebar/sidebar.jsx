import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './sidebar.scss';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import ProfileImage from '../../Asset/avatar.svg';
import CartImage from '../../Asset/icons_2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';



const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    console.log(pathname);
    return pathname === "/";
}

function SideBarComponents() {

    return (
        <div  style={{paddingTop:"11px",paddingBottom:"12px"}}>



            <Router>

                <Row className="lnkCssCard" style={{backgroundColor:"white",padding:"13px",lineHeight:"1.5rem"}}>

                    <Col md={"3"} sm={"3"} xs={"3"}>
                        <NavLink to="/home" activeClassName="active-link" isActive={checkActive} ><img src={ProfileImage} alt="profileImage" className="ImageCsS" /></NavLink>
                    </Col>
                    <Col md="9">
                        <div>
                            Welcome,
                             </div>
                        <div>
                            Guest
                             </div>

                    </Col>

                </Row>

                <Row style={{backgroundColor:"white", display:"flex", minHeight: "49vh",lineHeight:"1.5rem"}}>
                    <Col >
                        <Row className="lnkCss" style={{  justifyContent: "flex-start",paddingTop:"11px" }} >
                            <Col md={"1"} sm={"3"} xs={"3"}>

                                <FontAwesomeIcon icon={faUserCog} />

                            </Col>
                            <Col md={"9"} sm={"9"} xs={"9"}>
                                <div style={{ paddingLeft: "22px", display: "flex", justifyContent: "flex-start" }}>
                                    My Trade
                                </div>

                            </Col>

                        </Row>


                     <span>  <hr style={{ border:"0.5px solid black",opacity:"0.2" }}/></span> 
                       
                        <Row className="lnkCss">
                            <Col md={{ span: 8, offset: 2 }}>
                                <div style={{  display: "flex", justifyContent: "flex-start" }}>
                                    Item Won
                              </div>
                            </Col>
                        </Row>
                        <Row className="lnkCss">
                            <Col md={{ span: 8, offset: 2 }} >
                                <div style={{  paddingTop: "5px", display: "flex", justifyContent: "flex-start" }}>
                                    Item Lost
                              </div>
                            </Col>
                        </Row>
                        <Row className="lnkCss">
                            <Col sm={{ span: 8, offset: 2 }}>
                                <div style={{  paddingTop: "5px", display: "flex", justifyContent: "flex-start" }}>
                                    My Items
                              </div>
                            </Col>
                        </Row >
                        <Row className="lnkCss">

                            <Col md={{ span: 8, offset: 2 }}> <div style={{paddingTop: "5px", display: "flex", justifyContent: "flex-start" }} sm={"12"} xs={"12"}>
                                Items Sold
                                </div>
                            </Col>
                        </Row>
                        
                       <span> <hr style={{ border:"0.5px solid black",opacity:"0.2" }}/></span>

                        <Row className="lnkCss" >
                            <Col md={"1"} sm={"1"} xs={"1"} style={{ display: "flex", justifyContent: "left", paddingLeft: "10px" }}>
                                <div>
                                    <FontAwesomeIcon icon={faUserCog} />
                                </div>
                            </Col>
                            <Col md={"10"} style={{ textAlign: "left" }}>
                                <div style={{ paddingLeft: "20px" }}>
                                    Account Settings
                            </div>
                            </Col>
                        </Row>
                        <Row className="lnkCss">

                            <Col md={{ span:10 , offset: 1 }} style={{}}> <div style={{ display: "flex", justifyContent: "flex-start",paddingTop:"5px", paddingLeft:"21px"}} sm={"12"} xs={"12"}>


                                Profile
                                </div>
                            </Col>
                        </Row>
                        <Row className="lnkCss">

                            <Col md={{ span: 10, offset:1 }}> <div style={{ paddingTop: "2px",paddingLeft:"21px",paddingBottom:"2px", display: "flex", justifyContent: "flex-start" }} sm={"12"} xs={"12"}>
                                Manage Address
                                </div>
                            </Col>
                        </Row>

                        
                        <hr style={{ border:"0.5px solid black",opacity:"0.2" }}/>

                        <Row style={{  display: "flex", justifyContent: "centre" }}>

                            <Col md={"1"} style={{ display: "flex", justifyContent: "left", paddingTop: "2px" }}>
                                <div>
                                    <FontAwesomeIcon icon={faWallet} />
                                </div>
                            </Col>


                            <Col md={"2"} sm={"3"} xs={"3"} style={{ paddingLeft: "32px",paddingBottom:"5px",backgroundColor:"geenyellow" }}>
                                <div>
                                    Payment
                              </div>
                            </Col>

                            <Col md={"7"} sm={"5"} xs={"5"} style={{ display: "flex", justifyContent: "flex-end"}}>
                                <div>
                                    Add Fund
                                </div>
                            </Col>
                        </Row>
                        <Row className="lnkCss" >

                            <Col md={{ span: 8, offset: 2 }}> <div style={{ display: "flex", justifyContent: "flex-start" }} sm={"12"} xs={"12"}>

                                Wallet
</div>
                            </Col>
                        </Row>
                        <span><hr style={{ border:"0.5px solid black",opacity:0.6 }}/></span>
                        <Row className="lnkCss" style={{ paddingTop: "2px" }}>

                            <Col md={"1"} sm={"1"} xs={"1"} >
                                <div>
                                    <FontAwesomeIcon icon={faTools} />
                                </div>
                            </Col>



                            <Col md={"10"} sm={"10"} xs={"10"} style={{ paddingLeft: "32px", textAlign: "left" }}>
                                Settings
</Col>
                        </Row>
                        <Row className="lnkCss">

                            <Col md={{ span: 10, offset: 1 }}> <div style ={{ display: "flex", justifyContent: "flex-start",paddingLeft:"21px",paddingTop:"3px"}} sm={"12"} xs={"12"}>

                                Notifications
</div>
                            </Col>
                        </Row>
                        <Row className="lnkCss" >

                            <Col md={{ span: 10, offset: 1 }}> <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "21px",paddingTop:"3px",paddingBottom:"4px" }}>

                                Logout
</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Router>



        </div>
    )
}

export default SideBarComponents;