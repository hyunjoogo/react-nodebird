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
    },
      {
        src: 'https://github.com/hyunjoogo/card-maker/blob/master/public/images/default_logo.png?raw=true',
      },],
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

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';


export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  content: '헤로헤로',
  User: {
    id:1,
    nickname:'hyunjoo'
  },
  Images: [],
  Comments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST :
    case ADD_POST_SUCCESS :
      return {
        ...state,
        // 앞에 추가하면 최신순, 뒤에 추가하면 누적순
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    case ADD_POST_FAILURE :
    default:
      return state;
  }
}

export default reducer;
