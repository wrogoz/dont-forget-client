import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const HeaderComponent=()=> {
  console.log('testing merge')
    return (
        <HeaderRow>
        <Col >
          <Header>
          <AppTitle >
              <StyledLink to="/">Don't forget</StyledLink> 
            </AppTitle>
          </Header>
        </Col>
        
      </HeaderRow>
    )
}

const HeaderRow=styled(Row)`
display:flex;
flex-direction:column;
justify-content:center;

 min-height:25vh;

`
const Header = styled.header`
 
  text-align:center;
`
const AppTitle=styled.p`
font-family: 'Shadows Into Light', cursive;
  min-width:250px;
 margin-left:0;
 margin-top: 50px;
    font-size: 4rem;
  color:#fff;
  transform:rotate(-15deg)
`
const StyledLink = styled(Link)`
    
    &:visited{
        text-decoration:none;
        color:#fff;
    }
    &:link{
        text-decoration:none;
    }
`

export default HeaderComponent;