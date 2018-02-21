import React from 'react';
import _ from 'lodash';
import { Container } from 'semantic-ui-react';
import PostsListItem from './PostsListItem';

const PostsList = props => {
  const { posts } = props;

  return (
    <Container>
      {
        _.map(posts, post => (
          <PostsListItem 
            post={post} 
            key={post.id} 
          />
        ))
      }
    </Container>
  )
}

export default PostsList;
