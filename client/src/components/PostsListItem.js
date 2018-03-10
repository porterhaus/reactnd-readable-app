import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { 
  Confirm,
  Header,
  Icon,  
  Label, 
  Popup,
  Segment
} from 'semantic-ui-react';
import '../styles/PostListItem.css';
import { formatDate } from '../utils';
import { fetchPostCommentsCount } from '../actions/posts_actions';

class PostsListItem extends Component {
  state = {
    openModal: false,
    commentCount: 0
  }

  componentWillMount () {
    this.props.fetchPostCommentsCount(this.props.post.id, (data) => {
      this.setState({ commentCount: data.count });
    })
  }

  show = () => this.setState({ openModal: true });

  render () {
    const { 
      post, 
      postVote,
      deletePost
    } = this.props;
  
    return (
      <Segment vertical>
        <Header size='huge'>
          <Link to={`/${post.category}/${post.id}`}>
            {post.title}
          </Link>
          <Header.Subheader>
            {post.body}
          </Header.Subheader>
          <Header.Subheader>
            <small>
              Posted by <em><strong>{_.capitalize(post.author)}</strong></em> on {formatDate(post.timestamp)}
            </small>
          </Header.Subheader>
        </Header>
        <Label.Group size='big'>
          <Label as={Link} tag to={`/${post.category}`} color='grey'>
            {_.capitalize(post.category)}
          </Label>
          <Label>{this.state.commentCount ? this.state.commentCount : 0} Comments</Label>
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
          <span style={{ float: 'right' }}>
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
          </span>
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
      </Segment>
    )
  }
}

export default connect(undefined, { fetchPostCommentsCount })(PostsListItem);
