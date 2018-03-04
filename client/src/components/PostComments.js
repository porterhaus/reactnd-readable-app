import React from 'react';
import _ from 'lodash';
import {
  Comment,
  Header
} from 'semantic-ui-react';
import CommentContainer from './CommentContainer';

const PostComments = props => {
  const { comments } = props;
  
  // TODO: Order comments by timestamp

  return (
    <Comment.Group size='large'>
      <Header as='h3' dividing>
        Comments
      </Header>
      {
        _.isEmpty(comments) ? 
          (
            <h4>There are no comments.</h4>
          )
          :
          (
            _.map(comments, comment => (
              <CommentContainer key={comment.id} comment={comment} />
            ))
          )
      }
    </Comment.Group>
  )
}

export default PostComments;
