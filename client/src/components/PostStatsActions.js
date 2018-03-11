import React, { Component } from 'react';
import { 
  Confirm,
  Label,
  Segment
} from 'semantic-ui-react';
import PostActions from './PostActions';
import PostStats from './PostStats';
import '../styles/PostListItem.css';

class PostStatsActions extends Component {
  state = {
    openModal: false
  }
  
  show = () => this.setState({ openModal: true });
  
  render () {
    const {
      post,
      postVote,
      commentCount,
      deletePost
    } = this.props;

    return (
      <span>
        <Label.Group size='big'>
          <PostStats
            post={post} 
            commentCount={commentCount}
          />
          <PostActions 
            post={post}
            postVote={postVote}
            show={this.show}
          />
        </Label.Group>
        <Confirm
          open={this.state.openModal}
          header='Delete this Post?'
          content='Are you absolutely sure? This cannot be undone.'
          onCancel={
            () => this.setState({openModal: false})
          }
          onConfirm={
            () => deletePost(post.id)
          }
        />
      </span>
    )
  }
}

export default PostStatsActions;
