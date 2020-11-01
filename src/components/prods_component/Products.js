import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Form } from 'react-bootstrap';
import './Products.css';
import {formatCurrency} from '../formatCurrency';
import Button from '@material-ui/core/Button';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus,faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import Fade from 'react-reveal/Fade';
const Products = ({prods, SearchChange,sortProducts,count,addToCart,addToWish}) => {
const [productState,setProduct] = React.useState({
  showModal: true,
    product:null,

  })


  const openModal = (product) => {
    setProduct({product, showModal:true});
  }
 const closeModal = () => {
    setProduct({product:null, showModal:false})
  }
  return (<React.Fragment>
    <Container style={{overflow:'hidden'}} fluid className='products_component  justify-content-center'>
      <Row>
        <Col xs={12} className='justify-content-center '>
          <h2 className='text-center pt-5 text-capitalize'>our products:<span>{count}</span></h2>
    
        </Col>  
      </Row>
    	<Row className='mt-5 justify-content-center '>
    	<Col xs={6} md={4}><Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Search By Name</Form.Label>
    <Form.Control onChange={SearchChange} type="search" placeholder="Search Products" />
  </Form.Group>
</Col>
    	<Col xs={6} md={4}>  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label >By Price</Form.Label>
    <Form.Control onChange={sortProducts} as="select">
      <option value='all' >All</option>'
        <option value='Lowest'>Lowest Prices</option>
        <option value='Highest'>Highest Prices</option>
    </Form.Control>
  </Form.Group></Col>
    	</Row>
          <hr className='w-75' />
    	<Row className='mt-1' >
      {prods.map(prod=>{
        return(<Col className=' justify-content-center p-1'  key={prod.id} xs={12} md={4} lg={4}>
         <Fade key={prod.id} bottom cascade> <Container  className='justify-content-center p-0 my-2 rounded shadow' fluid>
         <Row className='justify-content-center'>
         <Col  xs={12} className='  p-2'  >
         <div className=' img-container'>
            <img  style={{cursor:'pointer'}} onClick={()=>openModal(prod)} width='200' height='200' src={prod.img} alt={prod.id +'img'}/>
            </div>
            </Col>
          </Row>
          <Row className='mt-4 mb-3'>
            <Col xs={8}><h4 className='text-capitalize text-center'>{prod.name}</h4></Col>
            <Col xs={4} className='pb-0'>{formatCurrency(prod.price)}</Col>

          </Row> 
          <hr/>
          <Row >
            <Col className='text-center pb-3' xs={8}>
            <Button onClick={()=>addToCart(prod)}  className='add-to-cart' color='primary'
             variant='contained'>Add To Cart</Button></Col>
            <Col xs={4}>
              <FontAwesomeIcon onClick={()=>openModal(prod)} className='mt-2 view' 
              style={{fontSize:'1.2rem'}} icon={faSearchPlus} />
              <GradeOutlinedIcon onClick={()=>addToWish(prod)}  className='ml-1 view' />
            </Col>
          </Row>
        </Container></Fade></Col>)
      })}
    	</Row>
    </Container>
    {productState.product !== null ?
     <Modal id='modal' isOpen={productState.showModal} 
      ariaHideApp={
    false
  /* Boolean indicating if the appElement should be hidden */}>
 <Container fluid >
 
    <Row className='justify-conent-space-between pt-5 px-0'>
    <Col  xs={12} md={4}>
    <div className='bg-light img-container py-2 rounded'><img className='img-fluid '  width='300' height='250' alt='product' src={productState.product.img} /></div></Col>
    <Col xs={12} md={6} className='border-left'>
    <h3 className='text-capitalize text-center pt-2 pb-3 border-bottom'>{productState.product.name}</h3>
    <p className='h5 text-muted p-2'>{productState.product.description}</p>
    <h5 className='py-2 bg-light border rounded w-25  text-center'>{formatCurrency(productState.product.price)}</h5>


    <Button color='secondary' className='mr-3 mt-2' variant='outlined' onClick={()=>closeModal()}>Back</Button>
      <Button onClick={()=>addToCart(productState.product)}  className=' mt-2' color='primary' variant='outlined'>Add To Cart</Button>

    </Col>
    
</Row>  </Container>



  </Modal>:productState.product == null}</React.Fragment>
  )
}

export default Products;