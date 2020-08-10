import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'
import AppButton from './components/button'



const RegisterComponent = ()=>{
    const [name, setname] = useState('')
    const [surname, setsurname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const changeNameHandler = (e:any)=>{
        setname(e.currentTarget.value)
    }

    const changeSurnameHandler = (e:any)=>{
        setsurname(e.target.value)
    }
    const changePasswordHandler = (e:any)=>{
        setpassword(e.target.value)
    }
    const changeEmailHandler = (e:any)=>{
        setemail(e.target.value)
    }
    const onClickHandler = ()=>{
        console.log(name,email,password,surname)
       
    }
    return(
        <StyledForm>
            <Form.Group>

            <Label>Email Address</Label>
            <Form.Control type="email" placeholder = "enter email" onChange={changeEmailHandler} value={email}/>
            </Form.Group>
            <Form.Group>
            <Label>Password</Label>

            <Form.Control type="password" placeholder = "enter password" onChange={changePasswordHandler} value={password}/>
            </Form.Group>
            <Form.Group>
            <Label>Name</Label>

            <Form.Control type="text" placeholder = "name" onChange={changeNameHandler} value={name}/>
            </Form.Group>
            <Form.Group>
            <Label>Surname</Label>

            <Form.Control type="text" placeholder = "surname" onChange={changeSurnameHandler} value={surname}/>
            </Form.Group>
            <AppButton 
                onClick={onClickHandler}
                text="Register"/>
        
            </StyledForm>

    )
}



const StyledForm = styled(Form)`
    background-color:#fff;
    padding:40px;
    margin: 10px 20px;
    border-radius: 5%;
    max-width:500px;
    
`




const Label =styled(Form.Label)`
    color:#777;
`
export default RegisterComponent