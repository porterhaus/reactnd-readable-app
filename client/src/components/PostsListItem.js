import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Icon, Header, Button, Segment, Label, Popup } from 'semantic-ui-react';
import '../styles/PostListItem.css';
import { formatDate } from '../utils';

const PostsListItem = props => {
  const { post } = props;

  return (
    <Segment vertical>
      <Header size='huge'>
        {post.title}
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
        <Label as={Link} tag to={`/${post.category}`}>
          {_.capitalize(post.category)}
        </Label>
        <Label>{post.commentCount} Comments</Label>
        <Label>{post.voteScore} Votes</Label>
        <Popup
          trigger={
            <Label as='a'>
              <Icon name='thumbs up'/>
            </Label>
          }
          content='Up Vote'
        />
        <Popup
          trigger={
            <Label as='a'>
              <Icon name='thumbs down'/>
            </Label>
          }
          content='Down Vote'
        />
        <span style={{ float: 'right' }}>
          <Popup
            trigger={
              <Label as='a'>
                <Icon name='write' />
              </Label>
            }
            content='Edit this Post'
          />
          <Popup
            trigger={
              <Label as='a'>
                <Icon name='remove' />
              </Label>
            }
            content='Delete this Post'
          />
        </span>
      </Label.Group>
    </Segment>
  )
}

export default PostsListItem;
