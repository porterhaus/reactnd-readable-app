import React from 'react';
import _ from 'lodash';
import {
  Comment,
  Header
} from 'semantic-ui-react';
import CommentContainer from './CommentContainer';
import CommentForm from './CommentForm';

const PostComments = props => {
  const { comments, createComment, postId } = props;
  
  // TODO: Order comments by timestamp
  // TODO: Loading component when changing views

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
          createComment={createComment}
          parentId={postId}
        />
      </Comment.Group>
    </div>
  )
}

export default PostComments;
