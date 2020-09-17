import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './profile.scss';


function Profile(){
 return(
     <div style={{backgroundColor:"red"}}>
        <Row>
            <Col md={{span:6,offset:4}} style={{backgroundColor="greenyellow",minHeight:"30vh"}} >
            </Col>
        </Row>
     </div>
 )
}

export default Profile;