import React from 'react';
import './home.scss';
import Header from '../reusableComponents/header/header';
import { Row ,Col} from 'react-bootstrap';
import SideBarComponents from '../reusableComponents/sidebar/sidebar';
import ProfileBody from '../profilebody/profilebody';

function Homepage(){
    return(
        <div style={{overflow:"hidden"}}>
            
                
           <Header />
           
           
           <Row style={{backgroundColor:"#d3dee2",minHeight:"81vh",paddingTop:"119px"}}>
               <Col md={{span:3}} className="sideHeight">
                   <SideBarComponents/>
               </Col>
               <Col md={"8"}>

                  <ProfileBody />
               </Col>

           </Row>
        </div>
    )
}
export default Homepage;
