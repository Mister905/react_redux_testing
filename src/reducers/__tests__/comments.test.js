import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/type";

it("handles the SAVE_COMMENT action dispatcher", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };

  const initial_state = {
    comment_list: []
  };

  const new_State = commentsReducer(initial_state, action);

  expect(new_State.comment_list.pop()).toEqual("New Comment");
});
