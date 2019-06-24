import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
  const { cart } = value;
  return(
    <div>
       cartlist 
      <CartItem />
    </div>
  );
}