import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import { 
  Confirm,
  Icon,
  Label,
  Popup,
  Segment
} from 'semantic-ui-react';
import PostFormModal from './PostFormModal';
import '../styles/Post.css';

class PostStatsActions extends Component {
  state = {
    openDeleteModal: false,
    editPostModalOpen: false
  }
  
  openDeleteModal = () => this.setState({ openDeleteModal: true });
  openEditModal = () => this.setState({ editPostModalOpen: true });
  closeEditModal = () => {
    this.setState({ editPostModalOpen: false });
  }

  render () {
    const {
      post,
      postVote,
      commentCount,
      editPost,
      deletePost
    } = this.props;

    return (
      <div>
        <Label.Group size='big'>
          <Label as={Link} tag to={`/${post.category}`} color='grey'>
            {_.capitalize(post.category)}
          </Label>
          <Label>{commentCount ? commentCount : 0} Comments</Label>
          <Label>{post.voteScore} Votes</Label>
          <Popup
            trigger={
              <Label 
                as='a'
                onClick={
                  () => postVote(post.id, 'upVote')
                }
              >
                <Icon name='thumbs up'/>
              </Label>
            }
            content='Up Vote'
          />
          <Popup
            trigger={
              <Label 
                as='a'
                onClick={
                  () => postVote(post.id, 'downVote')
                }
              >
                <Icon name='thumbs down'/>
              </Label>
            }
            content='Down Vote'
          />
          <Popup
            trigger={
              <Label 
                as='a'
                onClick={this.openEditModal}
              >
                <Icon name='write' />
              </Label>
            }
            content='Edit this Post'
          />
          <Popup
            trigger={
              <Label 
                as='a'
                onClick={this.openDeleteModal}
              >
                <Icon name='remove' />
              </Label>
            }
            content='Delete this Post'
          />
        </Label.Group>
        <Confirm
          open={this.state.openDeleteModal}
          header='Delete this Post?'
          content='Are you absolutely sure? This cannot be undone.'
          onCancel={
            () => this.setState({openModal: false})
          }
          onConfirm={
            () => deletePost(post.id, () => {
              this.props.history.push('/'); // this doesn't work. 
            })
          }
        />
        <PostFormModal 
          form={`PostForm_${post.id}`}
          isEditing={true}
          editPost={editPost}
          post={post}
          open={this.state.editPostModalOpen}
          onClose={this.closeEditModal}
        />
      </div>
    )
  }
}

export default withRouter(PostStatsActions);
