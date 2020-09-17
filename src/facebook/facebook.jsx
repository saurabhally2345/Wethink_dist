import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
class  reactFacebookData  extends React.Component{

  constructor(props){
    super(props)
    this.state={
      auth:false,
      userName:'',
      userImage:''
    }
  }
    
     componentClicked(data){
        console.log("facebookdata",data)
    }

 responseFacebook(response){
  console.log(response);
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
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={()=>this.componentClicked()}
    callback={()=>this.responseFacebook()} />
  )
 return(
<div>

</div>   
);
}
}
export default reactFacebookData;