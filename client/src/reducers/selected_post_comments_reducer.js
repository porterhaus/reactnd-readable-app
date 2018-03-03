import _ from 'lodash';
import {
  FETCH_POST_COMMENTS_SUCCESS
} from '../actions/posts_actions';

export function selectedPostComments (state={}, action) {
  switch (action.type) {
    case FETCH_POST_COMMENTS_SUCCESS:
      return _.mapKeys(action.comments.data, 'id')
  
    default:
      return state;
  }
}
