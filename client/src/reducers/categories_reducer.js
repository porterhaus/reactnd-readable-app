import _ from 'lodash';
import { FETCH_CATEGORIES_SUCCESS } from '../actions/categories_actions';

export function categories (state={}, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return _.mapKeys(action.categories, 'name');
  
    default:
      return state;
  }
}
