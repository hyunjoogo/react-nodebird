export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
}

// 위의 방법보다는 action을 만들어주는 함수를 만든다.
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
}

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN' :
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
}

export default reducer;
