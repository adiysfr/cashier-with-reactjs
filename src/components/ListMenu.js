import React, { useState } from 'react'
import styled from 'styled-components'

const Menu = styled.li`
    height: 2rem;
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    position: relatif;
    color: ${props => props.theme.grey};
    cursor: pointer;
    &:not(:last-child){
        margin-bottom: 0.5rem;
    }
    &:nth-child(2){
        background: ${props => props.theme.primary};
        color: ${props => props.theme.light};
    }
`

const ListMenu = () => {
    const [menu] = useState(
        [
            "Faforite",
            "Makanan",
            "Minuman",
            "Cemilan"
        ]
    )
  return (
    <ul style={{padding:0}}>
        {menu.map((item, i) =>
            <Menu key={i}>{item}</Menu>
        )}
    </ul>
  )
}

export default ListMenu