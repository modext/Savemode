import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'

function SecondaryButton({name}) {
    return (
        <SecondaryButtonStyled> 
            {name}      
            {/* <div className="right" style={rightStyle}></div> */}
            <img src={arrow} alt="" />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        padding-left: .9rem
    }
`
// const rightStyle= {
//     width: '12px',
//     height:'12px',
//     transition: .5,
//     float: 'right',
//     boxShadow: '-2px 2px 0 white',
//     transform: 'rotate(-135deg)',
//     marginTop: '5px',
//     marginLeft: '8px'
// }


export default SecondaryButton
