import React from 'react';
import {connect} from 'react-redux'
interface AppProps{
  greetings:string
}
const App = (props:AppProps)=>{
  return(
    <p>{props.greetings}</p>
  )
}



const mapStateToProps = (state: {greetings:string }) => {
  return {

    greetings:state.greetings
  };
};

export default connect(mapStateToProps)(App);