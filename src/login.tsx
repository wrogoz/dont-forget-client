import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import AppButton from './components/button'
import styled from 'styled-components'
const LoginComponent = () =>{

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

const emailNameHadler=(e:any)=>{
    setemail(e.target.value)
}

const passwordNameHandler = (e:any)=>{
    setpassword(e.target.value)
}

const checkValidEmailAndPassword = ()=>{
    console.log(email,password+` send to server`)
}

    return(
        <StyledForm>
            <Form.Group>
            <Label>Email Address</Label>
            <Form.Control type="email" placeholder = "enter email" onChange={emailNameHadler} value={email}/>
            </Form.Group>
            <Form.Group>
            <Label>Password</Label>
            <Form.Control type="password" placeholder = "enter password" onChange={passwordNameHandler} value={password}/>
            </Form.Group>
            <AppButton text="Log In" onClick={checkValidEmailAndPassword}/>
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



const Label =styled(Form.Label)`
    color:#777;
`
export default LoginComponent