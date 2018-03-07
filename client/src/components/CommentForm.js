import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Form,
  Message 
} from 'semantic-ui-react';

class CommentForm extends Component {
  componentDidMount () {
    const { 
      isEditing, 
      comment, 
      initialize 
    } = this.props;

    if (isEditing) {
      this.initializeForm(comment, initialize);
    }
  }

  initializeForm = (comment, initialize) => {
    const data = {
      'id': comment.id,
      'body': comment.body,
      'author': comment.author,
      'parentId': comment.parentId,
      'timestamp': comment.timestamp
    }
    
    initialize(data);
  }

  renderTextAreaField = ({input, label, meta: {touched, error}}) => (
    <div>
      <Form.TextArea 
        {...input} 
        placeholder={label}
      />
      {
        touched && 
          (error && 
            <Message negative>
              <Message.Header>Damn dawg... errors!</Message.Header>
              <p>{error}</p>
            </Message>
          )
      }
    </div>
  )

  renderTextField = (field) => (
    <Form.Field>
      <input
        type='text'
        {...field.input}
        placeholder={field.label}
      />
    </Form.Field>
  )

  render () {
    const {
      isEditing,
      editComment,
      handleSubmit,
      history,
      location,
      toggleEditForm
    } = this.props;
    
    return (
      <Form 
        reply
        onSubmit={
          handleSubmit(values => { 
            console.log(values);
            editComment(values.id, values, () => {
              toggleEditForm()
            });
          })
        }
      >
        <Field 
          name='body'
          component={this.renderTextAreaField}
          label='Add a Comment'
        />
        {!isEditing && (
          <div>
            <br/>
            <Field 
              name='author'
              component={this.renderTextField}
              label='Author'
            />
          </div>
        )}
        <br/>
        {!isEditing ?
        (<Form.Button 
          content='Add Comment' 
          labelPosition='left' 
          icon='plus' 
          primary 
        />)    
        :
        (<Form.Button 
          content='Save Changes' 
          labelPosition='left' 
          icon='edit' 
          primary 
        />)
        }
      </Form>
    )
  }
}

const validate = values => {
  const errors = {};
  if(!values.body) {
    errors.body = 'You must enter some text!'
  }
  if (!values.author) {
    errors.author = 'Please enter an author!'
  }
  return errors;
}

export default withRouter(reduxForm({
  validate,
})(CommentForm));
