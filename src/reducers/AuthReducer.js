const initialState = {
  email: "lucascaldeira@gmail.com.br"
}

const AuthReducer = (state = [], action) => {

  if (state.length == 0) {
    return initialState;
  }
  return state;
}

export default AuthReducer;