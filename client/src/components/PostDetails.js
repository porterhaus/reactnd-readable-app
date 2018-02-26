import React from 'react';
import _ from 'lodash';

const PostDetails = props => {
  return (
    <div>
      {JSON.stringify(props.data)}
    </div>
  )
}

export default PostDetails;
