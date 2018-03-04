import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils';
import { 
  Button,
  Comment,
  Form
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
    const { comment } = this.props;

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
            <a onClick={this.toggleEditForm.bind(this)}>Edit</a>
          </Comment.Actions>
          {this.state.isEditing &&
            <Form reply>
              <Form.TextArea />
              <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
          }
        </Comment.Content>
      </Comment>
    )
  }
}

export default CommentContainer;
