import _ from 'lodash';
import {
  FETCH_POST_COMMENTS_SUCCESS
} from '../actions/posts_actions';
import {
  CREATE_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS
} from '../actions/selected_post_comments_actions';

export function selectedPostComments (state={}, action) {
  switch (action.type) {
    case FETCH_POST_COMMENTS_SUCCESS:
      return _.mapKeys(action.comments.data, 'id')
    
    case CREATE_COMMENT_SUCCESS:
      return Object.assign({}, state, {[action.comment.id]: action.comment});

    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
  
    default:
      return state;
  }
}
