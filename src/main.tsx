import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import React from 'react';
import {Link} from 'react-router-dom'

const MainComponent = () =>{
    return(
        <MainRow >
        <Col >
        <Main>
            <Link to="/register">
                <AppButton variant="light" size="lg">Register</AppButton> 
            </Link>
        
            <Link to="/login">
                <AppButton variant="light" size="lg">Login</AppButton> 
            </Link>
          </Main>
          </Col>
      </MainRow>
    )
}

const MainRow = styled(Row)`
  flex-grow:1;
  
`
const Main = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
 
  height:80%;
`


const AppButton= styled(Button)`
  margin-bottom:45px;
  width:200px;
  color:#61478A;
`

export default MainComponent;