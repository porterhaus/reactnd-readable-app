import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
  fetchPostComments,
  postVote,
  deletePost
} from '../actions/posts_actions';
import { 
  createComment, 
  editComment, 
  deleteComment, 
  commentVote,
} from '../actions/selected_post_comments_actions';
import PostDetails from './PostDetails';
import PostComments from './PostComments';
import { Dimmer, Loader} from 'semantic-ui-react';

class PostContainer extends Component {
  state = {
    commentCount: 0
  }

  componentDidMount() {
    const { post_id } = this.props.match.params;
    this.props.fetchPostComments(post_id)
  }

  render() { 
    const {
      post,
      postVote,
      deletePost,
      comments,
      createComment,
      editComment, 
      deleteComment, 
      commentVote
    } = this.props;
    
    if (!post || !comments) {
      return (
        <Dimmer active={true} inverted page>
          <Loader>
            Loading...
          </Loader>
        </Dimmer>
      )
    }

    const orderedComments = _.sortBy(comments, 'voteScore').reverse();
    const commentsCount = Object.keys(comments).length;

    return ( 
      <div>
        <PostDetails 
          post={post}
          postVote={postVote}
          commentsCount={commentsCount}
          deletePost={deletePost}
        />
        <PostComments 
          postId={post.id}
          comments={orderedComments} 
          createComment={createComment}
          editComment={editComment}
          deleteComment={deleteComment}
          commentVote={commentVote}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.post_id],
    comments: state.selectedPostComments
  }
}
 
export default connect(
  mapStateToProps, 
  { 
    fetchPostComments,
    postVote,
    deletePost,
    createComment,
    editComment, 
    deleteComment, 
    commentVote
  }
)(PostContainer);
