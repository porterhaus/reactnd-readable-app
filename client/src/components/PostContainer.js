import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPostComments } from '../actions/posts_actions';
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
      comments
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

    return ( 
      <div>
        <PostDetails post={post} />
        <PostComments comments={comments} />
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
    fetchPostComments 
  }
)(PostContainer);
