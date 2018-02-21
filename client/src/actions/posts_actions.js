import * as API from '../api';

export const SORT_POSTS_BY = 'SORT_POSTS_BY';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const POST_VOTE_SUCCESS = 'POST_VOTE_SUCCESS';

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

export const postVoteSuccess = post => (
  {
    type: POST_VOTE_SUCCESS,
    post
  }
)

export const fetchPosts = () => dispatch => {
  API
    .getPosts()
    .then(posts => dispatch(
      fetchPostsSuccess(posts.data)
    ));
}

export const postVote = (id, option) => dispatch => {
  API
    .postVote(id, option)
    .then(post => dispatch(postVoteSuccess(post.data)));
}
