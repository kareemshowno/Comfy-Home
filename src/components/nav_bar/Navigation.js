import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import'./Navigation.css';
const Navigation = ({count}) => {
  const styles= {display:count == 0 ? 'none':''}

  return (
   
   <Navbar  fixed='top' className='nav_bar' expand="lg">
   	<Navbar.Brand id='brand'>
   	<NavLink to={{pathname:'/'}}>
   		<FontAwesomeIcon
   		style={{color:'#fff'}}
       icon={faHome}
        width="30"
        height="30"
       /></NavLink>
   	</Navbar.Brand>
      <Navbar.Toggle className='toggler' aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   	<Nav className="ml-auto pr-2">
   		<NavLink to={{pathname:'/products'}}>Products</NavLink>
   		<NavLink to={{pathname:'/wishlist'}}>Wishlist</NavLink>
   		<NavLink to={{pathname:'/cart'}}><FontAwesomeIcon icon={faShoppingCart} /><span style={styles} className='count '>{count}</span></NavLink>
   	</Nav>
   	</Navbar.Collapse>
   </Navbar>
 
  )
}

export default Navigation;