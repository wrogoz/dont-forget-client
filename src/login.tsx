import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
const LoginComponent = () =>{
    return(
        <StyledForm>
            <Form.Group>
            <Label>Email Address</Label>
            <Form.Control type="email" placeholder = "enter email"/>
            </Form.Group>
            <Form.Group>
            <Label>Password</Label>
            <Form.Control type="password" placeholder = "enter password"/>
            </Form.Group>
            <StyledButton variant="light" size="lg" block>Log In</StyledButton>
            </StyledForm>

    )
}



const StyledForm = styled(Form)`
    background-color:#fff;
    padding:40px;
    margin: 10px 20px;
    border-radius: 5%;
    max-width: 500px;
    
`


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
const Label =styled(Form.Label)`
    color:#777;
`
export default LoginComponent