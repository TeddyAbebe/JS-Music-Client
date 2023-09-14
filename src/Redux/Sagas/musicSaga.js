import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  fetchMusicListRequest,
  fetchMusicListSuccess,
  fetchMusicListFailure,
  addMusicRequest,
  addMusicSuccess,
  addMusicFailure,
  updateMusicRequest,
  updateMusicSuccess,
  updateMusicFailure,
  removeMusicRequest,
  removeMusicSuccess,
  removeMusicFailure,
  generateStatisticsRequest,
  setStatisticsFailure,
  setStatisticsSuccess,
} from "../Slices/musicSlice";

const API_URL = "https://music-server-01zy.onrender.com/api/music";

// Fetch Music List
function* fetchMusicList() {
  try {
    const response = yield call(axios.get, `${API_URL}`);
    yield put(fetchMusicListSuccess(response.data));
  } catch (error) {
    yield put(fetchMusicListFailure(error.message));
  }
}

// Add Music
function* addMusic(action) {
  try {
    const response = yield call(axios.post, `${API_URL}/add`, action.payload);
    yield put(addMusicSuccess(response.data));
  } catch (error) {
    yield put(addMusicFailure(error.message));
  }
}

// Update Music
function* updateMusic(action) {
  try {
    const response = yield call(
      axios.put,
      `${API_URL}/${action.payload.musicId}`,
      action.payload
    );
    yield put(updateMusicSuccess(response.data));
  } catch (error) {
    yield put(updateMusicFailure(error.message));
  }
}

// Remove Music
function* removeMusic(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(removeMusicSuccess(action.payload));
  } catch (error) {
    yield put(removeMusicFailure(error.message));
  }
}

// Generate Statistics
function* generateStatistics() {
  try {
    const response = yield call(axios.get, `${API_URL}/statistics`);

    yield put(setStatisticsSuccess(response.data));
  } catch (error) {
    yield put(setStatisticsFailure(error.message));
  }
}

// Watchers
export function* watchFetchMusicList() {
  yield takeLatest(fetchMusicListRequest, fetchMusicList);
}

export function* watchAddMusic() {
  yield takeLatest(addMusicRequest, addMusic);
}

export function* watchUpdateMusic() {
  yield takeLatest(updateMusicRequest, updateMusic);
}

export function* watchRemoveMusic() {
  yield takeLatest(removeMusicRequest, removeMusic);
}

export function* watchGenerateStatistics() {
  yield takeLatest(generateStatisticsRequest, generateStatistics);
}
