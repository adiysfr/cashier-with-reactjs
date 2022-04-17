import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { formatRupiah } from '../helper'
import { incrementItem, decrementItem, removeFromCart } from "../store/actions/product";
import { useDispatch } from "react-redux";

const Cart = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 0.3rem;
  margin: 0.5rem auto;
  background: #fff;
  box-shadow: 1px 1px 10px 1px #ccc;
  @media (max-width: 991px) {
    width: 100%;
    margin: 15px 0;
  }
`;
const CounterContainer = styled.div`
  display: flex;
  width: 30%;
  text-align: center;
`;
const Price = styled.div`
  width: 30%;
  text-align: center;
`;
const ItemName = styled.div`
  width: 40%;
  padding-left: 0.5rem;
`;
const CounterTotal = styled.div`
  margin: 0 0.3rem;
`;

const CartItem = ({item}) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch()

  const increment = (id) =>{
    setCount(count+1)
    dispatch(incrementItem(id))
  }
  const decrement = (id) =>{
    setCount(count-1)
    if(count > 1){
      dispatch(decrementItem(id))
    }else{
      dispatch(removeFromCart(id))
    }
  }
  return (
    <Cart>
      <ItemName>{item.name}</ItemName>
      <CounterContainer>
        <Counter handleIncrement={()=>increment(item.id)} inc />
        <CounterTotal>{count}</CounterTotal>
        <Counter handleDecrement={()=>decrement(item.id)} dec />
      </CounterContainer>
      <Price>{formatRupiah(item.price)}</Price>
    </Cart>
  );
};

export default CartItem;
