import { SAVE_COMMENT, GET_COMMENTS } from "./type";
import axios from "axios";

export const save_comment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const get_comments = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments");

  dispatch({
    type: GET_COMMENTS,
    payload: res.data
  });
};
