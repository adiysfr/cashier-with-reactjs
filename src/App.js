import React from "react";
import Header from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "./styled/theme"
import ProductCard from "./components/ProductCard";
import { useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import ListMenu from "./components/ListMenu";
import CalculateBox from "./components/CalculateBox";

const Container = styled.div`
  display: flex;
  padding: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`
const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
  @media (max-width: 991px) {
    width: 100%;
  }
`
const ProductContainer = styled.div`
  width: 60%;
  height: 100%;
  background: ${props => props.theme.light};
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  padding: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  @media (max-width: 991px) {
    width: 100%;
  }
`
const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0;
  @media (max-width: 991px) {
    width: 100%;
    display: flex;
    /* position: fixed;
    bottom: 0;
    left: 0; */
    justify-content: space-between;
  }
`
const WrapCartItem = styled.div`
  @media (max-width: 991px) {
    width: 45%;
  }
`

const App = () => {
  const products = useSelector(state => state.products.products)
  const carts = useSelector(state => state.products.carts)
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu/>
        </MenuContainer>

        <ProductContainer>
          {products.map(item =>
            <ProductCard key={item.id} item={item}/>
          )}
        </ProductContainer>

        <CartContainer>
          <WrapCartItem>
            <p>{carts ? `${carts.length} item in cart` : "0 item in cart"}</p>
            {carts.map(item => 
              <CartItem key={item.id} item={item}/>
            )}
          </WrapCartItem>
          <CalculateBox/>
        </CartContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
