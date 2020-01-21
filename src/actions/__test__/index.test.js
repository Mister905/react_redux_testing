import { save_comment } from "../../actions/comments";
import { SAVE_COMMENT } from "../../actions/type";

describe("save_comment", () => {
  it("has the correct type", () => {
    const action = save_comment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = save_comment('New Comment');
    expect(action.payload).toEqual('New Comment');
  });
});
