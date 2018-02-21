import { combineReducers } from 'redux';
import { sortPostsBy } from './sort_post_by_reducer.js';
import { posts } from './posts_reducer';
import { categories } from './categories_reducer';

export const rootReducer = combineReducers({
  categories,
  posts,
  sortPostsBy
});

export default rootReducer;
