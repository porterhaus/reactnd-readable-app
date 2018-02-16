import * as API from '../api';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';

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
