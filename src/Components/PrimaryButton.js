import React from 'react'
import styled from 'styled-components'

function PrimaryButton({name}) {
    return (
        <ButtonsStyled>
            {name}
        </ButtonsStyled>
            
    )
}
const ButtonsStyled =styled.button`
    background-color: var(--accent-pink);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    

`;

export default PrimaryButton
