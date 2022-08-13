import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};
export const registerUser = createActions({
  registerUserRequest: undefined,
  registerUserSuccess: (payload) => payload,
  registerUserFailure: (err) => err,
});
export const loginUser = createActions({
  loginUserRequest: undefined,
  loginUserSuccess: (payload) => payload,
  loginUserFailure: (err) => err,
});

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (err) => err,
});

export const createPost = createActions({
  createPostRequest: (payload) => payload,
  createPostSuccess: (payload) => payload,
  createPostFailure: (err) => err,
});

export const updatePost = createActions({
  updatePostRequest: (payload) => payload,
  updatePostSuccess: (payload) => payload,
  updatePostFailure: (err) => err,
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');

/*
  getType(getPosts.getPostSuccess)
  =>  
  {
    type: 'getPostSuccess',
    payload: {
      name: 'Test'
    }
  }
*/