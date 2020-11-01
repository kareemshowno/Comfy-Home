import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import './Landing_Component.css';
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Landing_Component = () => {
  return (
 <Container fluid className='d-flex landing_component '>
 	<Row   >
 			<Col  className='align-self-center' >
 <Fade left ><h1 className='text-uppercase text-white'>comfy home<br/>interior style</h1></Fade>
 		<Fade left cascade><hr style={{backgroundColor:'#fff'}}/>
 	<NavLink to={{pathname:'/products'}}>	
 	<Button variant='contained' className='view_link text-uppercase '>view collection</Button></NavLink>
 </Fade>
 		</Col>	
 	</Row>
 </Container>
  )
}

export default Landing_Component;