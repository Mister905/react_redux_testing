import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import CommentBox from "./components/comment_box/CommentBox";
import CommentList from "./components/comment_list/CommentList";

let component;

beforeEach(() => {
  component = shallow(<App />);
});

afterEach(() => {
  component.unmount();
});

it("displays a comment box", () => {
  expect(component.find(CommentBox).length).toEqual(1);
});

it("displays a comment list", () => {
  expect(component.find(CommentList).length).toEqual(1);
});
