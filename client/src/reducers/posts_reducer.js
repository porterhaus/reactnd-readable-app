import _ from 'lodash';
import {
  FETCH_POSTS_SUCCESS,
  POST_VOTE_SUCCESS,
  DELETE_POST_SUCCESS
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
    
    case DELETE_POST_SUCCESS:
      return _.filter(state, post => post.id !== action.id)
  
    default:
      return state;
  }
}
