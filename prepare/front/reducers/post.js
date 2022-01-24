export const initialState = {
  mainPosts: [{
    // 합쳐서 나오는 애들은 대문자로
    id: 1,
    User: {
      id: 1,
      nickname: '김현주',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://github.com/hyunjoogo/card-maker/blob/master/public/images/default_logo.png?raw=true',
    }, {
      src: 'https://github.com/hyunjoogo/card-maker/blob/master/public/images/default_logo.png?raw=true',
    }],
    Comments: [{
      User: {
        nickname: '주주',
      },
      content: '우와 반가워요',
    }, {
      User: {
        nickname: '키유',
      },
      content: '헤로우이요',
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '헤로헤로'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        ...state,
        // 앞에 추가하면 최신순, 뒤에 추가하면 누적순
        mainPosts: [dummyPost, ...state.mainPosts]
      }
    default:
      return state;
  }
}

export default reducer;
