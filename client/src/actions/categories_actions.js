import * as API from '../api';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';

export const fetchCategoriesSuccess = categories => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  }
}

export const fetchCategories = () => dispatch => {
  API
    .getCategories()
    .then(categories => dispatch(
      fetchCategoriesSuccess(categories.data.categories)
    ));
}
