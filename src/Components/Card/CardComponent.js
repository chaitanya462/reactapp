import React, { Component } from 'react'
import axios from 'axios'

import {Card,Button} from 'react-bootstrap'
export default class CardComponent extends Component{
  
    constructor(props)
    {
        super(props)
        {

        }
        this.handleDelete = this.handleDelete.bind(this)
        this.state={
            delete:false
        }
    }

    
   async handleDelete()
    {
        console.log("handled")
        await axios.delete(`https://linguisticsrestapi.herokuapp.com/details/delete/${this.props.id}`).then(res=>{
             this.setState({delete:true})
        })

    }

    render()
    {
        return (
            <Card style={{ width: '100%' }}>
                <Card.Header style={{fontSize:"25px"}} className="heading11">{this.props.lang}</Card.Header>
                <Card.Body>
                <Card.Title className="heading3" style={{fontSize:"25px"}}>{this.props.name}</Card.Title>
                
                <Card.Subtitle className="heading5" style={{fontSize:"23px"}}>{this.props.level}</Card.Subtitle>
                <br></br>
                <Card.Text className="heading12">
                   {this.props.dateandtime}
                    <br></br>
                    <br></br>
                    <a>{this.props.link}</a>

                    <br></br>
                   <br></br>
                   {this.props.password}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button style={{width:"150px"}} href="https://zoom.us/" variant="outline-success">join</Button>

                    
                    {
                       this.state.delete ? <div className="heading3">Deleted Successfully</div> :  <Button onClick={this.handleDelete} style={{marginLeft:"20px"}} variant="outline-dark">delete</Button>
                    }
                </Card.Footer>
                </Card>
            
          
)
    }
}