import React from "react";
import { mount } from "enzyme";
import CommentBox from "./CommentBox";
import Root from "../../Root";

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it("has a text area and 2 buttons", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(2);
});

it("has a text area that users can type in", () => {
  component.find("textarea").simulate("change", {
    target: { value: "New Comment" }
  });
  component.update();

  expect(component.find("textarea").prop("value")).toEqual("New Comment");
});

it("when form is submitted, text area gets emptied", () => {
  component.find("textarea").simulate("change", {
    target: { value: "New Comment" }
  });
  component.update();
  component.find("form").simulate("submit");
  component.update();
  expect(component.find("textarea").prop("value")).toEqual("");
});
