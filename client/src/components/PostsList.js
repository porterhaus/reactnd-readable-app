import _ from 'lodash';
import React from 'react';
import { Container, Item } from 'semantic-ui-react';
import PostsListItem from './PostsListItem';

const PostsList = props => {
  const { posts } = props;

  return (
    <Container text>
      <Item.Group>
        Posts List
        {
          _.map(posts, post => (
            <PostsListItem 
              post={post} 
              key={post.id} 
            />
          ))
        }
      </Item.Group>
    </Container>
  )
}

export default PostsList;
