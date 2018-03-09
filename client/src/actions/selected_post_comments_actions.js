import * as API from '../api';

export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';

export const createCommentSuccess = comment => (
  {
    type: CREATE_COMMENT_SUCCESS,
    comment
  }
)

export const editCommentSuccess = comment => (  
  {
    type: EDIT_COMMENT_SUCCESS,
    comment
  }
)

export const deleteCommentSuccess = commentId => (
  {
    type: DELETE_COMMENT_SUCCESS,
    commentId
  }
)

export const createComment = (data, callback) => dispatch => {
  API
    .createComment(data)
    .then(comment => {
      callback()
      dispatch(createCommentSuccess(comment))
    });
}

export const editComment = (id, data, callback) => dispatch => {
  API
    .editComment(id, data)
    .then(comment => {
      callback()
      dispatch(editCommentSuccess(comment));
    });
}

export const deleteComment = (commentId, callback) => dispatch => {
  API
    .deleteComment(commentId)
    .then(() => {
      dispatch(deleteCommentSuccess(commentId));
    });
}
