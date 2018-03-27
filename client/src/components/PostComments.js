import React from 'react';
import _ from 'lodash';
import {
  Comment,
  Container,
  Header
} from 'semantic-ui-react';
import CommentContainer from './CommentContainer';
import CommentForm from './CommentForm';

const PostComments = ({
  postId,
  comments, 
  createComment, 
  editComment, 
  deleteComment, 
  commentVote
}) => {
  return (
    <Container text>
      <Header 
        as='h3' 
        dividing
        style={{
          marginTop: '1.5em'
        }}
      >
        Comments
      </Header>
      <Comment.Group 
        size='large'
      >
        {
          _.isEmpty(comments) ? 
            (
              <h4>There are no comments.</h4>
            )
            :
            (
              _.map(comments, comment => (
                <CommentContainer 
                  key={comment.id} 
                  comment={comment}
                  editComment={editComment}
                  deleteComment={deleteComment}
                  commentVote={commentVote} 
                />
              ))
            )
        }
        <CommentForm
          parentId={postId} 
          isEditing={false} 
          form={`CommentForm_NEW`}
          createComment={createComment}
        />
      </Comment.Group>
    </Container>
  )
}

export default PostComments;
