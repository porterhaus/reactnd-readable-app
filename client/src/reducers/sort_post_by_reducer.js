import { SORT_POSTS_BY } from '../actions/posts_actions';

const INITIAL_STATE = 'voteScore';

export function sortPostsBy (state=INITIAL_STATE, action) {
  switch (action.type) {
    case SORT_POSTS_BY:
      return action.sortby;
  
    default:
      return state;
  }
}
