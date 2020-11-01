import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Form } from 'react-bootstrap';
import {formatCurrency} from '../formatCurrency';
import Button from '@material-ui/core/Button';
import './Cart.css'
const Checkout = ({cartItems}) => {
	return (<Container className='my-3 checkout_com rounded p-3 shadow'>
		<Row>
		<Col xs={12} md={6} className='border-right'>
		<h3 className='py-2'>Contact Information</h3>
		<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className='mb-3 checkout_button' variant="contained" color='primary' >
    Submit
  </Button>
</Form>
		</Col>
		<Col xs={12} md={6} className='text-center'>

  <div className="card card-body  justify-content-center bg-light text-uppercase  ">
           
              <div style={{color:'#03a9f4'}} className="card-title  text-center ">
         <h6>cart total</h6>
              </div>
              <div className="row ">
          
                <div className="col-6">sub total</div>
                <div  className="col-6">  {formatCurrency(cartItems.reduce((a, c)=>a + c.price*c.count,0 ))}</div>
               
              
                <div className="col-6">tax</div>
                <div className="col-6 tax">$0</div>
                
   
              
                <div className="col-6">shipping</div>
                <div className="col-6 ship">$0</div>
                
              
                <div className="col-6 my-3">order total</div>
                <div className="col-6 my-3 order_tot">{formatCurrency(cartItems.reduce((a, c)=>a + c.price*c.count,0 ))}</div>
                 
              </div>
            </div>
            <hr/>
            <Button color='primary' variant='contained' className='checkout_button' >Confirm Order</Button>
          
</Col>
		</Row>
	</Container>);
}





export default Checkout;