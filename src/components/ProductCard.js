import React from 'react'
import styled from "styled-components"
import { formatRupiah } from '../helper'
import { useDispatch } from 'react-redux'
import { addCart } from '../store/actions/product'

const Card = styled.div`
    width: 150px;
    height: auto;
    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;
    background: #e0e0e0;
    box-shadow: 5px 5px 5px #c3c3c3, -5px -5px 5px #d7d7d7;
    transition-duration: 0.2s;
    &:hover{
        transform: scale(1.03);
    }
`
const WrapCardImg = styled.div`
    height: 100px;
    overflow: hidden;
`
const CardImg = styled.img`
    width: 100%;
`
const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    p{
        font-weight: 600;
        padding: 5px 10px;
        margin: 0;
        &:nth-child(1){
            background: #4abad1;
            color: #383838;
        }
        &:nth-child(2){
            background: #2b606a;
            color: #fff;
        }
    }
`

const ProductCard = ({item}) => {
    const dispatch = useDispatch()
    const addToCart = id => {
        if(item){
            dispatch(addCart(id))
        }else{
            alert('udah ada woy')
        }
    } 
  return (
   <Card onClick={()=>addToCart(item.id)}>
       <WrapCardImg>
            <CardImg src={item.image} alt={item.name}/>
        </WrapCardImg>
       <NamePrice>
        <p>{item.name}</p>
        <p>{formatRupiah(item.price)}</p>
       </NamePrice>
   </Card>
  )
}

export default ProductCard