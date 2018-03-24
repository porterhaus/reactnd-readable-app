import * as API from '../api';
import _ from 'lodash';

export const SORT_POSTS_BY = 'SORT_POSTS_BY';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POST_COMMENTS_SUCCESS = 'FETCH_POST_COMMENTS_SUCCESS';
export const FETCH_POST_COMMENTS_COUNT = 'FETCH_POST_COMMENTS_COUNT';
export const POST_VOTE_SUCCESS = 'POST_VOTE_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

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

export const createPostSuccess = post => (
  {
    type: CREATE_POST_SUCCESS,
    post
  }
)

export const deletePostSuccess = id => (
  {
    type: DELETE_POST_SUCCESS,
    id
  }
)

export const fetchPostCommentsSuccess = comments => (
  {
    type: FETCH_POST_COMMENTS_SUCCESS,
    comments
  }
)

export const fetchPosts = () => dispatch => {
  API
    .getPosts()
    .then(posts => dispatch(
      fetchPostsSuccess(posts.data)
    ));
}

export const fetchPostComments = postId => dispatch => {
  API
    .getPostComments(postId)
    .then(comments => dispatch(
      fetchPostCommentsSuccess(comments)
    ));
}

export const fetchPostCommentsCount = (postId, callback) => dispatch => {
  API
    .getPostComments(postId)
    .then(results => {
      const comments = _.filter(results.data, comment => !comment.deleted);
      const count = Object.keys(comments).length;
      const data = { postId, count }
      callback(data);
      dispatch({ type: FETCH_POST_COMMENTS_COUNT, payload: data });
    });}

export const postVote = (id, option) => dispatch => {
  API
    .postVote(id, option)
    .then(post => dispatch(postVoteSuccess(post.data)));
}

export const createPost = (data, callback) => dispatch => {
  API
    .createPost(data)
    .then(post => {
      callback()
      dispatch(createPostSuccess(post))
    });
}

export const deletePost = (id, callback) => dispatch => {
  API
    .deletePost(id)
    .then(() => {
      callback();
      dispatch(deletePostSuccess(id))
    });
}
