import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { formatRupiah } from "../helper";
import { resetCart } from "../store/actions/product";

const Box = styled.div`
  position: fixed;
  bottom: 30px;
  box-shadow: 1px 1px 10px 1px #ccc;
  padding: 0.4rem;
  margin-left: -0.4rem;
  @media (max-width: 991px) {
    width: 40%;
    position: relative;
    bottom: 0;
  }
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
`;
const Pay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  input[type="number"] {
    border: none;
    border-bottom: 1px solid #000;
    font-weight: bold;
    text-align: right;
    &:focus {
      outline: none;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`;
const Change = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalculateBox = () => {
  const dispatch = useDispatch()
  const carts = useSelector((state) => state.products.carts);
  const total = carts.reduce(
    (totalPrice, currentPrice) => totalPrice + currentPrice.price,
    0
  );
  const [pay, setPay] = useState("")
  const [change, setChange] = useState("")
  const handleOnChange = e => {
    setPay(e.target.value)
  }
  const calculateChange = () => {
    if(pay > total ){
      setChange(pay - total) 
    }
  }
  const handleReset = () => {
    dispatch(resetCart())
    setChange("")
    setPay("")
  }
  return (
    <Box>
      <Total>
        <h4>Total</h4>
        <p>{formatRupiah(total)}</p>
      </Total>
      <Pay>
        <p>Jumlah Bayar</p>
        <input type="number" value={pay} onChange={handleOnChange}/>
      </Pay>
      <Change>
        <p>Kembalian</p>
        <p>{formatRupiah(change)}</p>
      </Change>
      <BtnBox>
        <Button text="Reset"action={handleReset} />
        <Button primary text="Selesai" action={calculateChange} />
      </BtnBox>
    </Box>
  );
};

export default CalculateBox;
