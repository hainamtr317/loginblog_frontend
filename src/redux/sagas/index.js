import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* registerSaga(action){
  try{
    const regis = yield call(api.registeredUser,action.payload);
    yield put(actions.registerUser.registeredUserSuccess(regis.data));

  }catch(err){
    console.error(err);
    yield put(actions.registerUser.registeredUserFailure(err));
  }

}
function* LoginUserSaga(action) {
  try {
    const login = yield call(api.loginUser, action.payload);
    yield put(actions.loginUser.loginUserSuccess(login.data));
  } catch (err) {
    console.error(err);
    yield put(actions.loginUser.LoginUserFailure(err));
  }
}

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

// generator function ES6

export default mySaga;