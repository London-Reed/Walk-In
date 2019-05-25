import React from 'react';

import Moment from 'react-moment';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';






const Time = () => {
	
	return(
		<MDBContainer className="ml-3">
      <MDBRow>
      <MDBCol md="2">
      </MDBCol>
      <MDBCol md="2">
        </MDBCol>
        <MDBCol md="8">
		<div>
		{<Moment format="dddd, MMMM Do YYYY, h:mm a"></Moment>}
		</div>
		 </MDBCol>
		   
      </MDBRow>
    </MDBContainer>
	);
}

export default Time;