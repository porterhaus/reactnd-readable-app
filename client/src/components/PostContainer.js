import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPostComments } from '../actions/posts_actions';
import { createComment } from '../actions/selected_post_comments_actions';
import PostDetails from './PostDetails';
import PostComments from './PostComments';
import { Dimmer, Loader} from 'semantic-ui-react';

class PostContainer extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params;
    this.props.fetchPostComments(post_id)
  }

  render() { 
    const {
      post,
      comments,
      createComment
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

    return ( 
      <div>
        <PostDetails post={post} />
        <PostComments 
          comments={orderedComments} 
          createComment={createComment}
          postId={post.id}
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
    createComment 
  }
)(PostContainer);
