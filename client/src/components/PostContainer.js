import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PostDetails from './PostDetails';
import PostComments from './PostComments';

class Post extends Component {
  render () {
    const {
      post
    } = this.props;

    return (
      <div>
        <PostDetails data={post}/>
        <PostComments />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.post_id]
  }
}

export default connect(mapStateToProps)(Post);
