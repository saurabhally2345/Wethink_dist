import React from 'react';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import './header.scss';
import Logo from '../../Asset/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function HeaderComponenet() {
    return (
        <div className="responsiveHeader">
            <Row className="headerCss">
                <Col md={"2"} className="headerItem" style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img src={Logo} alt="logo" />
                </Col>
                <Col md={"3"}    >
                    <div style={{ borderRadius: "2px" }}>
                        <div className="serchButton">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <input type="search" placeholder="search for products,brand and more" className="inputField" />
                    </div>
                </Col>
                <Col md={{ span: 2, offset: 1 }} style={{ display: "flex", justifyContent: "flex-end", paddingTop: "16px", color: "white" }}>
                    Login/Register
           </Col>
                <Col md={"2"} style={{ paddingTop: "15px", color: "white" }}>
                    <span > <FontAwesomeIcon icon={faUser} /></span>
                    <span style={{ marginLeft: "5px", paddingTop: "10px" }}>My Trade</span>
                </Col>

                <Col md={"1"} style={{ display: "flex", justifyContent: "flex-start", color: "white", maxHeight: "42px", paddingTop: "8px" }}>
                    <span> <FontAwesomeIcon icon={faCartPlus} size="2x" style={{ paddingRight: "15px" }} /></span>
                    <span style={{ backgroundColor: "red", minWidth: "125%", paddingTop: "12px", borderRadius: "2px",opacity:"0.9" }}>List & Item</span>
                </Col>

            </Row>

            <Row className="header_2">
                <Col md={{span:2}} className="headerItem" style={{ color: "black", display: "flex", justifyContent: "flex-end", paddingLeft: "125px" }}>
                    <Row>
                        <Col style={{paddingLeft:"54px"}} md={"1"}>
                            <span  >
                                <FontAwesomeIcon icon={faMapMarkedAlt} /></span> &nbsp; </Col>

                        <Col md={"8"} style={{ display: "flex", justifyContent: "start"}}>
                            <Row>
                                <Col md={"5"}>

                                    Location 
                                </Col>
                                <Col md={{span:5,offset:"2"}} style={{display:"flex",justifyContent:"flex-end",paddingTop:"10px" }}>
                                <FontAwesomeIcon icon={faChevronDown}  />

                                </Col>
                            </Row>
                            
                        </Col>
                        
                        <Col md={"3"}style={{display:"flex",justifyContent:"center",paddingLeft:"100px"}}>

<span style={{fontWeight:"500",lineHeight:"0.5"}}>    Auckland,NZ</span>

</Col>

                    </Row>
                </Col>
                <span>
                    <hr style={{ transform: "rotate(90deg)", minWidth: "25px", marginTop: "12px" }} />
                </span>
                <Col md={"1"} className="headerItem" style={{ color: "black", display: "flex", justifyContent: "start",paddingLeft:"15px",paddingTop:"10px",minWidth:"10%" }}>
                    View Category &nbsp;<span > <FontAwesomeIcon icon={faChevronDown} /></span>
                </Col>
                <Col md={"1"} className="headerItem" style={{ color: "black",paddingTop:"10px",minWidth:"10%",display:"flex",justifyContent:"flex-start"  }}>
                    Market Place
           </Col>
                <Col md={"1"} className="headerItem" style={{ color: "black",paddingTop:"10px",minWidth:"10%",display:"flex",justifyContent:"flex-start"  }}>
                    Cars & B4e
           </Col>
                <Col md={"1"} style={{ color: "black",paddingTop:"10px",minWidth:"10%",display:"flex",justifyContent:"flex-start"  }}>
                    Jobs
           </Col>
                <Col md={"1"} className="headerItem" style={{ color: "black",paddingTop:"10px",minWidth:"10%",display:"flex",justifyContent:"flex-start",marginLeft:"-37px"  }}>
                    Property
           </Col>
                <Col md={"1"} className="headerItem" style={{ color: "black",paddingTop:"10px",minWidth:"10%",display:"flex",justifyContent:"flex-start",marginLeft:"-7px"  }}>
                    Services
           </Col>
            </Row>
        </div>
    )
}

export default HeaderComponenet;