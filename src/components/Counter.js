import React from 'react'
import styled from 'styled-components'

const CounterStyle = styled.div`
    width: 1rem;
    background: ${props => props.theme.secondary};
    color: #fff;
    height: 1rem;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    align-self: center;
`

const Counter = ({inc, dec, handleIncrement, handleDecrement}) => {
    if(inc){
        return <CounterStyle onClick={handleIncrement}>+</CounterStyle>
    }else{
        return <CounterStyle onClick={handleDecrement}>-</CounterStyle>
    }
}

export default Counter