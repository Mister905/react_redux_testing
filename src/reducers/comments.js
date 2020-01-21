import { SAVE_COMMENT, GET_COMMENTS } from '../actions/type';

const initial_state = {
  comment_list: []
};

export default function(state = initial_state, action) {
  const { type, payload } = action;

  switch (type) {

    case SAVE_COMMENT:
      return {
        ...state,
        comment_list: [...state.comment_list, payload]
      }
    case GET_COMMENTS:
      const api_comments = payload.map(comment => comment.name);
      return {
        ...state,
        comment_list: [...state.comment_list, ...api_comments]
      }

    default:
      return state;
  }
}
