const initialState = {
    isUser: true
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGOUT':
        // Handle logout actions specific to MFE2
        return state;
      default:
        return state;
    }
  };
  
  export default reducer;