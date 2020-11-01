import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Form,Table } from 'react-bootstrap';
import {formatCurrency} from '../formatCurrency';
import Button from '@material-ui/core/Button';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import './Wishlist.css'




const Wishlist = ({wishList,removeFromWishlist}) => {
  return (
    <Container fluid className='mt-5 Wishlist_component'>
    	<Row className='justify-content-center'>
    	{wishList.map(item=>{
    		return(<Col xs={12} md={4} className='shadow rounded p-5 rounded' >
				<Container fluid>
				<Row>
					<Col xs={12}>
					<img height='200' width='200' src={item.img}/>
					<h5 className='text-capitalize pt-5'>{item.name}</h5>
					<p className='py-2' style={{}}>{formatCurrency(item.price)}</p>
					<Button onClick={()=>removeFromWishlist(item)} className='text-center' color='secondary'variant='contained'>Remove</Button>
					</Col>
				</Row>
				</Container>
    			</Col>);
    	})
    }
    	
    		
    
    	</Row>
    </Container>
  )
}

export default Wishlist;