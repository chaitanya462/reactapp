import React,{Component} from 'react'
import axios from 'axios'

import {Button,Container,Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import CardComponent from '../Card/CardComponent'
export default class Body extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            loading:false,
            data:null,
        }
    }
   
    async componentDidMount()
    {
        const url="https://linguistic-application-api.herokuapp.com//details/";
         await axios.get(url).then(res=>{
             this.setState({loading:true,data:res.data})
           
         })
         
    }

    render()
    {
        return (
             

          <>
          
         <Container>
             <br></br>

{
     this.state.loading? <div> {this.state.data.map((item)=>{
         return (
          <>
             <Row>
              <CardComponent id={item.id} key={item.id} password={item.password} link={item.link} dateandtime={item.dateandtime} name={item.name} lang={item.language} level={item.level}></CardComponent>
              
              </Row>
              <hr></hr>
             
             
             
              <br></br>
          </>
          
            
         )
     })}</div>: <h1>loading</h1>
 }

 
<NavLink to="/createSession"><Button variant="outline-secondary" style={{marginLeft:"45%",marginRight:"55%",width:"120px"}}>New-Session</Button></NavLink>
{/* <Button variant="outline-dark">Delete</Button> */}
<br></br>
<br></br>


</Container>



          </>
          
               
          
        )
    }


}