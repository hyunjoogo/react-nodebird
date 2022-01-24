import {HYDRATE} from 'next-redux-wrapper';
import {combineReducers} from 'redux';
import user from "./user";
import post from "./post";

// action은 객체, 기본state를 바꾸고 싶을 때 액션을 하나 만든다.
// 액션을 dispatch해서 바꿀
// const _changeNickname = {
//   type: 'CHANGE_NICKNAME',
//   data: 'hyunjoogo'
// }



// async action creator

// dispatch에서 보낸 객체를 받아서 새로운 state를 만든다.
// 이전 state는 기록에 남아있다.

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index : (state = {}, action) => {
    switch (action.type) {
      case HYDRATE :
        return {...state, ...action.payload}
      default:
        return state;
    }
  },
  user,
  post,
})

export default rootReducer;
