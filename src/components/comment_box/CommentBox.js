import React, { Component } from "react";
import { connect } from "react-redux";
import { save_comment, get_comments } from "../../actions/comments";

class CommentBox extends Component {
  state = { comment: "" };

  handle_change = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handle_get_comments = () => {
    this.props.get_comments();
  };

  handle_submit = e => {
    e.preventDefault();

    this.props.save_comment(this.state.comment);

    this.setState({
      comment: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handle_submit}>
          <h4>Add a Comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.handle_change}
            name="comment_box"
            id="comment_box"
            cols="30"
            rows="10"
          ></textarea>
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button id="btn_get_comments" onClick={this.handle_get_comments}>Get Comments</button>
      </div>
    );
  }
}

export default connect(null, { save_comment, get_comments })(CommentBox);
