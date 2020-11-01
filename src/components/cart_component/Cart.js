import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Form,Table } from 'react-bootstrap';
import {formatCurrency} from '../formatCurrency';
import Button from '@material-ui/core/Button';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import './Cart.css'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';


const Cart = ({cartItems,removeFromCart}) => {
  return (
    <Container fluid className='mt-2 cart_component'>
    	<Row>
    <Col xs={12} md={8}  >
    			<Fade><Table style={{cursor:'pointer'}} hover>
			<thead className='table-h text-center text-capitalize mt-5'>
				<tr>
					<th></th>
					<th>product</th>
					<th>quant</th>
					<th>price</th>
				</tr>
			</thead>
			<tbody >
						{cartItems.map( item  => {
				return (<React.Fragment  key={item.id}><tr className=' text-center text-capitalize' key={item.id}>
					<td><img height='30' width='30' src={item.img} /></td>
<td  >{item.name}</td>
					<td>{item.count} </td>
						<td id='price'>{formatCurrency(item.price)}</td>
						<td><Button color='secondary' variant='contained' onClick={() => removeFromCart(item)} >Remove</Button></td>
						</tr>
					

								</React.Fragment>
						)}
				)
		}
				
			</tbody>

			
		</Table></Fade></Col>
    	
    		
    	
    	<Col  style={{height:'70vh',backgroundColor:'#273041'}} className='shadow payment text-center rounded mt-4 ' xs={12} md={3}>
    	<h2 className='text-center text-capitalize text-white pt-3'>payment info</h2>
    	<hr className='bg-white w-75' />
    	<p className='text-capitalize text-white text-center'>payment method</p>
    	<Button startIcon={<CreditCardIcon/>} className='text-white  text-capitalize pay_but' variant='outlined' color='primary'>Credit Card</Button>
    	<Button className='text-white ml-2 text-capitalize pay_but' variant='outlined' color='primary'>PayPal</Button>
    	<hr className='bg-white w-75' />
    	<p className='text-capitalize text-white text-center'>name on card</p>
    	<input className='form-control' type='text' />
    	<p className='text-capitalize text-white text-center pt-2'> card number</p>
    	<input className='form-control' type='text' />
    	<hr className='bg-white w-75' />
    	<Link to={{pathname:'/checkout'}}>
    	<Button className='text-center checkout_button' color='primary' variant='contained' >Checkout</Button>
    	</Link>
    	</Col>
    	</Row>
    </Container>
  )
}

export default Cart;