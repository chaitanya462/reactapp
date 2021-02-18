import React,{Component} from 'react'
import {Card,Container} from 'react-bootstrap'
import axios from 'axios'
import {Button} from 'react-bootstrap'
export default class CreatePage extends Component
{

    constructor()
    {

        super()
        this.handleName = this.handleName.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleLang=this.handleLang.bind(this)
        this.handlepassword = this.handlepassword.bind(this)
        this.handlelink=this.handlelink.bind(this)
        this.handledate=this.handledate.bind(this)
        this.handlelevel=this.handlelevel.bind(this)
       
        this.state={
           
            data :{
                name:null,
               language:null,
               level:null,
               password:null,
               link:null,
               dateandtime:null
            },
            created:false
            
               
           
        }
    }
          
    handleLang(e)
    {
        this.setState({language:e.target.value})
    }
    
    handlelevel(e)
    {
        this.setState({level:e.target.value})
    }
    
    handlepassword(e)
    {
        this.setState({password:e.target.value})
    }
    
    handlelink(e)
    {
        this.setState({link:e.target.value})
    }
    
    handledate(e)
    {
        this.setState({dateandtime:e.target.value})
    }
    handleSubmit(event)
    {

        event.preventDefault();
        console.log(this.state)
        axios.post("https://linguistic-application-api.herokuapp.com//details/insert",{name:this.state.name,language:this.state.language,level:this.state.level,
      link:this.state.link,password:this.state.password,dateandtime:this.state.dateandtime}  
    
    ).then( (res)=>{
       this.setState({created:true})
       console.log(this.state.created)
    }
    )
    }
    handleName(event)
    {
       this.setState({name:event.target.value,
        })
    }
    handleLang(e)
    {
        this.setState({language:e.target.value})
    }
    



    render()
    {
       
        return(
      

        <>
        <br></br>
        <Container>
               <Card style={{width:"100%"}}>
             
             <Card.Header className="heading7" style={{textAlign:"center",fontSize:"35px"}}>
                 Fill the Details for the New Session
             </Card.Header>

             <Card.Body className="heading11">
                 <form onSubmit={this.handleSubmit}>
                 Name:<br></br>
                  <input type="text" name="name" onChange={this.handleName}></input>
                 <hr></hr>
                 Language:<br></br>
                 <input type="text" name="language" onChange={this.handleLang}></input>
                 <hr></hr>
                 Level:<br></br>
                 <input type="text" name="level" onChange={this.handlelevel}></input>
                 <hr></hr>
                 Meeting Link:<br></br>
                 <input type="text" name="link" onChange={this.handlelink}></input>
                 <hr></hr>
                 Password:<br></br>
                 <input type="text" name="password" onChange={this.handlepassword}></input>
                 <hr></hr>
                 Time And Date :<br></br>
                 <input type="text" name="dateandtime" onChange={this.handledate}></input>
                 <hr></hr>
                {/* <input type="submit"></input> */}
                {/* <Button type="submit" variant="outline-success">Submit</Button> */}
                {
                   this.state.created ? <div className="heading3"><p>Successfully created</p>
                    <Button href="/displaySession" variant="outline-dark">Go Back</Button>
                    </div>:<div><Button type="submit" variant="outline-success">Submit</Button></div>
               }
                 
                 </form>
                
             </Card.Body>

               </Card>
               
           </Container>
           <br></br>
        </>
           
        )
    }
}