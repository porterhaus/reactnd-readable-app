import React from 'react';
import _ from 'lodash';
import {
  Comment,
  Header
} from 'semantic-ui-react';
import CommentContainer from './CommentContainer';
import CommentForm from './CommentForm';

const PostComments = props => {
  const { comments } = props;
  
  // TODO: Order comments by timestamp

  return (
    <div>
      <Header as='h3' dividing>
        Comments
      </Header>
      <Comment.Group size='large'>
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
        <CommentForm 
          isEditing={false} 
          form={`CommentForm_NEW`}
        />
      </Comment.Group>
    </div>
  )
}

export default PostComments;
