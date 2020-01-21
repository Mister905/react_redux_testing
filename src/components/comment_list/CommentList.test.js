import React from "react";
import { mount } from "enzyme";
import CommentList from "./CommentList";
import Root from "../../Root";

let component;

beforeEach(() => {
  const initial_state = {
    comments: {
      comment_list: ["Comment 1", "Comment 2"]
    }
  };

  component = mount(
    <Root initial_state={initial_state}>
      <CommentList />
    </Root>
  );
});

it("creates one <li> per comment", () => {
  expect(component.render().text()).toContain("Comment 1");
  expect(component.render().text()).toContain("Comment 2");
});
