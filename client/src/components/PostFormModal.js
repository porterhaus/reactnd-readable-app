import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import {
  Button,
  Form,
  Header,
  Icon,
  Modal,
  TextArea
} from 'semantic-ui-react';
import PostForm from './PostForm';
import renderFormField from './RenderFormField';

const required = value => (value ? undefined : 'This field is required!');
const minLength = max => value =>
  value && value.length < max ? `Must be ${max} characters or less` : undefined
const minLength150 = minLength(150)

class PostFormModal extends Component {
  render () {
    const options = [
      {key:'react', value:'react', text: 'React'},
      {key:'redux', value:'redux', text: 'Redux'},
      {key:'udacity', value:'udacity', text: 'Udacity'},
    ];

    const{ handleSubmit, pristine, submitting } = this.props; 

    return (
      <Modal
        open={this.props.open}
        onClose={this.props.onClose}
        size='small'
      >
        <Header icon='wordpress forms' content='Post' />
        <Modal.Content>
          <Form 
            id='post-form'
            size='big'
            name="post" 
            onSubmit={handleSubmit(values => {
              console.log(values);
              this.props.reset();
              this.props.onClose();
              this.props.history.push('/');
            })}
          >
            <Field 
              name='category' 
              component={renderFormField} 
              as={Form.Select} 
              options={options}
              placeholder='Select a Category'
              validate={required}
            />
            <Field 
              name='title' 
              component={renderFormField} 
              as={Form.Input} 
              type='text' 
              placeholder='Enter a Title'
              validate={required}
            />
            <Field 
              name='author' 
              component={renderFormField} 
              as={Form.Input} 
              type='text' 
              placeholder='Enter an Author'
              validate={required}
            />
            <Field 
              name='body' 
              component={renderFormField} 
              as={Form.TextArea} 
              type='text' 
              placeholder='Write your Post'
              validate={[required, minLength150]}
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            form='post-form'
            primary 
            size='big' 
            loading={submitting} 
            disabled={pristine || submitting}>
              Submit
          </Button>
          <Button 
            color='red' 
            onClick={this.props.onClose}
            size='big'
          >
            <Icon name='cancel' /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default withRouter(
  reduxForm({ form: 'PostFormModal', enableReinitialize: true})(PostFormModal)
);
