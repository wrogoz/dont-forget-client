import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
const ListComponent = ()=>{
    return(
        <StyledList variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item> 
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>

        <StyledInputGroup >
    
    <FormControl
      placeholder="Add new item"
     
    />
    <StyledButton variant="light">Dodaj</StyledButton>
  </StyledInputGroup>
        
      </StyledList>
    )
}


const StyledList = styled(ListGroup)`
   
    margin: 10px 20px;
    max-width:450px;
    
    `
const StyledInputGroup = styled(InputGroup)`
    background-color:#fff;
    margin-top:20px;
    padding:15px;
   
`

const StyledButton = styled(Button)`
    background-color:#61478A;
    color:#fff;
    margin-left:15px;
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
`
export default ListComponent