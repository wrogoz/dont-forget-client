import React, { Dispatch } from 'react';
import {connect} from 'react-redux'
import {Switch,Route} from 'react-router-dom'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import HeaderComponent from './header';
import MainComponent from './main'
import RegisterComponent from './register'
import LoginComponent from './login'
import ListComponent from './list'
interface AppProps{
  dispatch:  Dispatch<{type:string}>
  greetings:string
  
}

const App = (props:AppProps)=>{


  return(
    <AppContainer fluid>
     <HeaderComponent/>
     <Switch>

       
      <Route path="/register">
        <RegisterComponent/>
      </Route>
      <Route path="/login">
        <LoginComponent/>
      </Route>
      <Route path="/list">
        <ListComponent/>
      </Route>
      <Route path="/">
       <MainComponent/>
       </Route>


     </Switch>
     
    </AppContainer>
    
  )
}





const AppContainer = styled(Container)`
  min-height:100vh;
  min-width:309px;
  flex-direction:column;
  display:flex;
  align-items: center;
  background-color:#61478A;
   
  `





const mapStateToProps = (state: {greetings:string }) => {
  return {

    greetings:state.greetings
  };
};

export default connect(mapStateToProps)(App);