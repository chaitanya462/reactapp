import React,{Component} from 'react'
import {Navbar,Container} from 'react-bootstrap'
 export  default class Footer extends Component{
    render()
    {
        return(
            <>
            <Navbar expand="lg" variant="dark" bg="dark">
  <Container fluid>
    <div style={{color:"white",fontSize:"35px",textAlign:"center",marginRight:"55%",marginLeft:"45%"}} className="heading1">
    <p>You can never understand one language until you understand at least two</p>
    </div>
  </Container>
</Navbar>
            </>
        )
    }
}