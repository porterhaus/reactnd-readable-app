import { combineReducers } from 'redux';
import { sortPostsBy } from './sort_post_by_reducer.js';
import { posts } from './posts_reducer';
import { categories } from './categories_reducer';
import { selectedPostComments } from './selected_post_comments_reducer';

export const rootReducer = combineReducers({
  categories,
  posts,
  sortPostsBy,
  selectedPostComments
});

export default rootReducer;
