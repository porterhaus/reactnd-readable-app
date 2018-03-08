import * as API from '../api';

export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';

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
);

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
