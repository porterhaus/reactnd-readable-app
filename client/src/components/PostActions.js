import React from 'react';
import { 
  Icon,  
  Label,
  Popup
} from 'semantic-ui-react';

const PostActions = props => {
  const {
    post,
    postVote,
    show
  } = props;

  return (
    <span>
      <Popup
        trigger={
          <Label 
            as='a'
            onClick={
              () => postVote(post.id, 'upVote')
            }
          >
            <Icon name='thumbs up'/>
          </Label>
        }
        content='Up Vote'
      />
      <Popup
        trigger={
          <Label 
            as='a'
            onClick={
              () => postVote(post.id, 'downVote')
            }
          >
            <Icon name='thumbs down'/>
          </Label>
        }
        content='Down Vote'
      />
      <Popup
        trigger={
          <Label 
            as='a'
            onClick={
              () => console.log('Edit post!')
            }
          >
            <Icon name='write' />
          </Label>
        }
        content='Edit this Post'
      />
      <Popup
        trigger={
          <Label 
            as='a'
            onClick={show}
          >
            <Icon name='remove' />
          </Label>
        }
        content='Delete this Post'
      />
    </span>
  )
}

export default PostActions;
