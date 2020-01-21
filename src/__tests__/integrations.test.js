import React from "react";
import { mount } from "enzyme";
import Root from "../Root";
import App from "../App";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Comment #1" }, { name: "Comment #2" }]
  });
});

it("can fetch a list of comments and display them", done => {
  const component = mount(
    <Root>
      <App />
    </Root>
  );

  component.find("#btn_get_comments").simulate("click");

  // Wait for response data before evauation
  moxios.wait(() => {
    component.update();
    expect(component.find("li").length).toEqual(2);
    // Callback function explicitly tells Jest to await before finishing
    done();
    component.unmount();
  });
});

afterEach(() => {
  moxios.uninstall();
});
