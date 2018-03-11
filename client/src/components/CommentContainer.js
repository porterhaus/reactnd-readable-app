import React, { Component } from 'react';
import { formatDate } from '../utils';
import CommentForm from './CommentForm';
import { 
  Button,
  Comment,
  Form,
  Icon,
  Label
} from 'semantic-ui-react';

class CommentContainer extends Component {
  state = {
    isEditing: false
  }

  toggleEditForm () {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render () {
    const { 
      comment,
      editComment,
      deleteComment,
      commentVote 
    } = this.props;

    return (
      <Comment key={comment.id}>
        <Comment.Avatar src='https://pbs.twimg.com/media/CDB14IYUEAEr1GG.png' />
        <Comment.Content>
          <Comment.Author as='a'>{comment.author}</Comment.Author>
          <Comment.Metadata>
            <span>{formatDate(comment.timestamp)}</span>
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
          <Comment.Actions>
            <a onClick={this.toggleEditForm.bind(this)}>
              {!this.state.isEditing ? (
                  <div><Icon name='edit' />Edit</div>
                ) : (
                  <div><Icon name='close' />Close</div>
                )}
            </a>
            <a onClick={() => {
              deleteComment(comment.id);
            }} >
              <Icon name='delete' />Delete
            </a>
            <a>
              <Label size='medium'>
                {comment.voteScore ? comment.voteScore : 0} Votes
              </Label>
            </a>
            <Label 
                as='a'
                size='medium'
                onClick={
                  () => commentVote(comment.id, 'upVote')
                }
              >
              <Icon name='thumbs up'/>
            </Label>
            <Label 
                as='a'
                size='medium'
                onClick={
                  () => commentVote(comment.id, 'downVote')
                }
              >
              <Icon name='thumbs down'/>
            </Label>
          </Comment.Actions>
          {
            this.state.isEditing &&
            <CommentForm
              form={`CommentForm_${comment.id}`}
              isEditing={this.state.isEditing} 
              comment={comment}
              editComment={editComment}
              toggleEditForm={this.toggleEditForm.bind(this)}
            />
          }
        </Comment.Content>
      </Comment>
    )
  }
}

export default CommentContainer;
