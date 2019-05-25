import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';


class Signin extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      signInName: '',
      signInEmail: '',
      signInIssue: ''
    }

  }
  
  onNameChange = (event) => {
    this.setState({signInName: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onIssueChange = (event) => {
    this.setState({signInIssue: event.target.value})
  }

  onSubmitSignin = () =>{
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.signInName,
        email: this.state.signInEmail,
        issue: this.state.signInIssue
      })
    })
    .then(response => response.json())
    .then(ticket =>{
      if (ticket){
        this.props.onRouteChange('signin');
      }
    })
    
    
  }


  render(){
    const {onInputChange, onSubmit} = this.props;
    return (

    <MDBContainer className="ml-3">
      <MDBRow>
        <MDBCol md="2">
        </MDBCol>
        <MDBCol md="2">
        </MDBCol>
        <MDBCol md="8">
        <MDBCard>
        <MDBCardBody>
          <form>
            <p className="h4 text-center mb-4">IT Walk-In</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
              onChange={this.onNameChange}
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
              onChange={this.onEmailChange}
            />
            <br />
           
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Describe Your Issue
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
              onChange={this.onIssueChange}
            />
            <div className="text-center mt-4">
              <MDBBtn color="warning" outline type="submit" 
                onClick={this.onSubmitSignin}>
                Submit
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
    </MDBContainer>
  );
  }
  
};

export default Signin;








