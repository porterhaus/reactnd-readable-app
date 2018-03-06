import * as API from '../api';

export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';

export const editCommentSuccess = comment => (  
  {
    type: EDIT_COMMENT_SUCCESS,
    comment
  }
);

export const editComment = (id, data, callback) => dispatch => {
  API
    .editComment(id, data)
    .then(comment => {
      callback()
      dispatch(editCommentSuccess(comment));
    });
}
