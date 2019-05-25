import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default ({onRouteChange}) => (
  <MDBContainer>
  <BrowserRouter>

    <MDBNav className="justify-content-end">
      
      <MDBNavItem>
        <MDBNavLink to="#"><p onClick={() => onRouteChange('signin')}>Home</p></MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#"><p onClick={() => onRouteChange('admin')}>Admin</p></MDBNavLink>
      </MDBNavItem>
      
    </MDBNav>

  </BrowserRouter>
  </MDBContainer>
);