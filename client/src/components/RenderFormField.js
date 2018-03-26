import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Message } from 'semantic-ui-react';

// https://gist.github.com/mairh/233f6b4ffdbaaed8ec75bb0bef087e8f
// Was having a hard time making the semantic form elements play nice.
export default function renderFormField (
{ input, 
  type, 
  label, 
  placeholder, 
  meta: { touched, error, warning }, 
  as: As = Input, 
  ...props 
}) {

  function handleChange (e, {value}) {
    return input.onChange(value);
  }

  return (
    <Form.Field>
      <As {...props} {...input} value={input.value} type={type} label={label} placeholder={placeholder} onChange={handleChange} />
      {touched && (
        (error &&
          <Message negative>
            <Message.Header>Damn, dawg, but...</Message.Header>
            <p>{error}</p>
          </Message> 
        ) || 
        (warning && 
          {warning}
        )
      )}
    </Form.Field>
  );
}

renderFormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object
};
