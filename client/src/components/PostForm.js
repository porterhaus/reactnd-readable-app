import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import {
  Button,
  Form,
  Input,
  TextArea
} from 'semantic-ui-react';
import renderFormField from './RenderFormField';

const required = value => (value ? undefined : 'This field is required!');
const minLength = max => value =>
  value && value.length < max ? `Must be ${max} characters or less` : undefined
const minLength150 = minLength(150)

class PostForm extends Component {
  render () {
    const options = [
      {key:'react', value:'react', text: 'React'},
      {key:'redux', value:'redux', text: 'Redux'},
      {key:'udacity', value:'udacity', text: 'Udacity'},
    ];

    const{ handleSubmit, pristine, submitting } = this.props; 

    return (
      <Form 
        size='big'
        name="post" 
        onSubmit={handleSubmit(values => {
          console.log(values);
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
        <Button 
          primary 
          size='big' 
          loading={submitting} 
          disabled={pristine || submitting}>
            Submit
        </Button>
      </Form>
    )
  }
}

export default withRouter(
  reduxForm({ form: 'PostForm', enableReinitialize: true})(PostForm)
);
