import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render_comments = () => {
    const { comment_list } = this.props.comments;
    if (comment_list && comment_list.length) {
      return comment_list.map(comment => {
        return <li key={comment}>{comment}</li>;
      });
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <ul>{this.render_comments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);
