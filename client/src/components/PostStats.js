import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { 
  Icon,  
  Label,
  Popup
} from 'semantic-ui-react';

const PostStats = props => {
  const {
    post,
    commentCount
  } = props;

  return (
    <span>
      <Label as={Link} tag to={`/${post.category}`} color='grey'>
        {_.capitalize(post.category)}
      </Label>
      <Label>{commentCount ? commentCount : 0} Comments</Label>
      <Label>{post.voteScore} Votes</Label>
    </span>
  )
}

export default PostStats;
