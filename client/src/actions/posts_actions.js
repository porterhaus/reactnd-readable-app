import * as API from '../api';

export const SORT_POSTS_BY = 'SORT_POSTS_BY';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

export const sortPostsBy = sortby => (
  {
    type: SORT_POSTS_BY,
    sortby
  }
)

export const fetchPostsSuccess = posts => (
  {
    type: FETCH_POSTS_SUCCESS,
    posts
  }
)

export const fetchPosts = () => dispatch => {
  API
    .getPosts()
    .then(posts => dispatch(
      fetchPostsSuccess(posts.data)
    ));
}
