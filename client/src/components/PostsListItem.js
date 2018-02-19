import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Icon, Header, Button, Segment, Label } from 'semantic-ui-react';
import '../styles/PostListItem.css';

const PostsListItem = props => {
  const { post } = props;

  return (
    <Segment vertical>
      <Header size='huge'>{post.title}</Header>
      <p>
        {post.body}
      </p>
      <Label.Group size='big'>
        <Label as={Link} tag to={`/${post.category}`}>
          {_.capitalize(post.category)}
        </Label>
        <Label>{post.commentCount} Comments</Label>
        <Label>{post.voteScore} Votes</Label>
        <Label as='a'>
          <Icon name='thumbs up'/>
        </Label>
        <Label as='a'>
          <Icon name='thumbs down'/>
        </Label>
      </Label.Group>
    </Segment>
  )
}

export default PostsListItem;
