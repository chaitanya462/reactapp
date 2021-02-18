import React,{Component} from 'react'
import './home.css'
import { Container} from 'react-bootstrap'


export default class Home extends Component{

    render()
    {
        return (
            <>
            <div className="backimage"> </div>
            <Container fluid >
                <div className="Heading heading5" style={{textAlign:"center",fontSize:"40px"}}>
                  Build your self Confidence!
                </div>
                <div className="MainSession heading3" style={{fontSize:"25px"}}>
                This application helps people to leverage their communication skills , especially helps people to build self confidence no matter what
                language they are trying to learn,and at what position they stand. This application provides a platform to find the people how are equally  desperate of improving their skills.
                The features in the application helps the people to be motivated throughout their journey of learning . Application provides all sorts of 
                learners who are at different levels of their journey  and hence , it makes compatable for every person to learn the best,no matter whether the person is 
                a beginner or at intermediate level of learing the language.

                
                </div>
             
            </Container>
            </>
        )
    }
}