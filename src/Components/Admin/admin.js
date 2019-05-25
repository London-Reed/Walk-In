import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";

class Admin extends React.Component {

    constructor(props){
    super(props);
    this.state = {
      adminUsername: 'czaradmin',
      adminPassword: 'f0rm4tC:',
    }

  }
  
  onUsernameChange = (event) => {
    this.setState({adminUsername: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({adminPassword: event.target.value})
  }

  onSubmitAdmin = () =>{
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.adminUsername,
        password: this.state.adminPassword
      })
    })
    .then(response => response.json())
    .then(data =>{
      if (data=== 'success'){
        this.props.onRouteChange('signin');
      }
    })
    
    
  }

  render(){
    const {onInputChange, onSubmit} = this.props;
    return (
    <MDBContainer>
      <MDBRow>
      <MDBCol md="3">
      </MDBCol>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header warm-flame-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                Username
              </label>
              <input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
                onChange={this.onUsernameChange}
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Password
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
                onChange={this.onPasswordChange}
              />

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit" 
                onClick={this.onSubmitAdmin} >
                  Login
                </MDBBtn>
              </div>

             
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
  }
  
};

export default Admin;



