import React from 'react';
import _ from 'lodash';
import { Container } from 'semantic-ui-react';
import PostsListItem from './PostsListItem';

const PostsList = props => {
  const { posts, postVote } = props;

  return (
    <Container>
      {
        _.map(posts, post => (
          <PostsListItem
            key={post.id}  
            post={post} 
            postVote={postVote}
          />
        ))
      }
    </Container>
  )
}

export default PostsList;
