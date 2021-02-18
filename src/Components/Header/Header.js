import React,{Component} from 'react'
import {Navbar,Nav,Container,Brand} from 'react-bootstrap'



export default class Header extends Component{
 
     render()
     {
         return (
             <>
             <Navbar expand="lg" variant="dark" bg="dark">
  <Container fluid>
    <Navbar.Brand className="heading1" style={{fontSize:"35px"}}href="/">{this.props.name}</Navbar.Brand>
    <Nav className="mr-auto">
      
      <Nav.Link href="/displaySession" className="heading4" style={{fontSize:"25px"}}>Home</Nav.Link>
      
    </Nav>
  </Container>
</Navbar>
             </>
         )
     }
     
}