import React from 'react';
import Navigation from '../components/nav_bar/Navigation';
import Landing_Component from '../components/land_component/Landing_Component';
import Products from '../components/prods_component/Products';
import Cart from '../components/cart_component/Cart';
import Checkout from '../components/cart_component/Checkout';
import Wishlist from '../components/wish_component/Wishlist'
import {HashRouter, Switch, Route} from 'react-router-dom';
import {prods} from '../components/prods_component/prods';
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      prods:prods,
      searchField:'',
       sort:'',
        cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')): [],
        wishList:localStorage.getItem('wishList')?JSON.parse(localStorage.getItem('wishList')): []
    }
  }
   removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    
    this.setState({cartItems:cartItems.filter(x => x.id !== product.id)});
     localStorage.setItem('cartItems', JSON.stringify(cartItems.filter(x => x.id !== product.id)));
} 
  addToCart = (product) => {
      let alreadyInCart= false;
  const cartItems = this.state.cartItems.slice();

  cartItems.forEach(item => {
    if(item.id === product.id) {
      item.count++;
      alreadyInCart= true;
    } 
    
  });
  if(!alreadyInCart){
      cartItems.push({...product, count: 1})
    }
    this.setState({cartItems});
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }  
    removeFromWishlist = (product) =>{
    const wishList = this.state.wishList.slice();
    
    this.setState({wishList:wishList.filter(x => x.id !== product.id)});
     localStorage.setItem('wishList', JSON.stringify(wishList.filter(x => x.id !== product.id)));
} 
  addToWish = (product) => {
      let alreadyInWish= false;
  const wishList = this.state.wishList.slice();

  wishList.forEach(item => {
    if(item.id === product.id) {
      item.count++;
      alreadyInWish= true;
    } 
    
  });
  if(!alreadyInWish){
      wishList.push({...product, count: 1})
    }
    this.setState({wishList});
    localStorage.setItem('wishList', JSON.stringify(wishList));
  }
onSearchChange = (event) => {
  this.setState({searchField:event.target.value});
  }
   sortProducts = (event) => {
  this.setState({sort:event.target.value,
    prods:prods.filter(prod => {
     return event.target.value === 'Highest' ? prod.price > 100 : event.target.value ===
      'Lowest'? prod.price < 100 : prod.price > 0


  })})}
  render() {
         const filterdProducts = this.state.prods.filter(prod => {
    return prod.name.toLowerCase().includes(this.state.searchField.toLowerCase()) 
  })
    return (
     <HashRouter>
     <Navigation count={this.state.cartItems.length} />
     <Switch>
       <Route path='/' exact>
         <Landing_Component />
       </Route>
       <Route path='/products'>
       <Products addToWish={this.addToWish} addToCart={this.addToCart}

        count={this.state.prods.length} sortProducts={this.sortProducts} SearchChange={this.onSearchChange} prods={filterdProducts} />
       </Route>
       <Route path='/cart'>
         <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
       </Route>
       <Route path='/wishlist'>
       <Wishlist wishList={this.state.wishList} removeFromWishlist={this.removeFromWishlist} /></Route>
       <Route path='/checkout'>
       <Checkout cartItems={this.state.cartItems} />
       </Route>
     </Switch>
     </HashRouter>
    );
  }
}
export default App
