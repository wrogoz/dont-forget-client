import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

interface ButtonProps{
    text:string
    onClick?:()=>void
}
const AppButton = (props:ButtonProps)=>{
    return(
    <StyledButton
        variant="light" 
        size="lg"
        block
        onClick={props.onClick}
        >
            {props.text}
    </StyledButton>
    )
}

const StyledButton = styled(Button)`
    background-color:#61478A;
    color:#fff;
    margin-top: 35px;
    &&:active{
        background-color:#61478A ;
        color:#fff;
    }
    &&:focus{
        background-color:#61478A ;
        color:#fff;
    }
    &&:hover{
        background-color:#61478A ;
        color:#fff;
    }
    margin-top: 35px;
`

export default AppButton