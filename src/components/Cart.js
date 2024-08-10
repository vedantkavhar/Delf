import store from '../utils/Storage';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import CartItem from '../utils/CartItem';
import { Link } from 'react-router-dom';
import { NoItemURL } from '../utils/constants';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice=useSelector((store)=> store.cart.price);
  console.log(cartItems+" "+totalPrice);
  // cartItems.map((item) => (
  //   console.log(item),
  //   console.log("-")
  // ))

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  return (
    <div className='cartContainer'>
      {
        (totalPrice>0)
        ? 
        <div className="text-center m-4 p-4">
          <section className='cartCost'>
            <div className='cartItemsSum'>
              { 
                cartItems.map((item, index) => (
                  <div className="cartItemsSumItem" key={item.id}>
                    <span>{item.name} ({item.defaultPrice ? (item.defaultPrice / 100) : (item.price / 100)})</span>
                    {index !== cartItems.length - 1 && <span>, </span>}
                  </div>
                ))
              }
            </div>
            <div className='cartClearAntTPrice'>
              <span className='cartButton'> Total Price: {totalPrice/100} </span>
              <button className='cartButton'>Order Now</button>
              <button className='cartButton' onClick={handleClearCart}>Clear Cart</button>
            </div>
          </section>
          <section className='cartItems'>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} /> 
              ))}
          </section>
        </div> 
        :
        <div className='cartEmpty'>
          <img className='emptyCartImg' src={NoItemURL}/>
          <h2>Your cart is empty</h2>
          <span>You can go to home page to view more restaurants</span>
        </div>
      }
      <Link className='cartLinkToHome' to='/'>SEE RESTAURANTS NEAR YOU</Link>
    </div>
  );
};

export default Cart;