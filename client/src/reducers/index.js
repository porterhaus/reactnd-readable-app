import { combineReducers } from 'redux';
import { posts } from './posts_reducer';
import { categories } from './categories_reducer';

export const rootReducer = combineReducers({
  categories,
  posts
});

export default rootReducer;
