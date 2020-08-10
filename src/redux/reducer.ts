const initialState = {
    greetings:"Don't forget"
}
  const reducer = (state = initialState, action: { type: string})=> {
      switch (action.type) {
       case 'TEST':
         return {
           greetings:'Greetings USER - Your Test Is Valid'
         }
        default:
          return state
      }
    }
  export default reducer;