const initialState = {
  email: "lucascaldeira@gmail.com.br",
  senha: '123123123'
}

const AuthReducer = (state = [], action) => {

  if (state.length == 0) {
    return initialState;
  }

  if (action.type == 'editEmail') {
    return {
      ...state,
      email: action.payload.email
    };
  }
  return state;
}

export default AuthReducer;