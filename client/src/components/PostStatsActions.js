import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { 
  Confirm,
  Icon,
  Label,
  Popup,
  Segment
} from 'semantic-ui-react';
import '../styles/Post.css';

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
                onClick={
                  () => console.log('Edit post!')
                }
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
                onClick={this.show}
              >
                <Icon name='remove' />
              </Label>
            }
            content='Delete this Post'
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
      </div>
    )
  }
}

export default PostStatsActions;
