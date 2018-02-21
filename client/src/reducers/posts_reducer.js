import _ from 'lodash';
import {
  FETCH_POSTS_SUCCESS,
  POST_VOTE_SUCCESS
} from '../actions/posts_actions';

export function posts (state={}, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return _.mapKeys(action.posts, 'id');
    
    case POST_VOTE_SUCCESS:
      return {
        ...state,
        [action.post.id]: action.post
      }
  
    default:
      return state;
  }
}
