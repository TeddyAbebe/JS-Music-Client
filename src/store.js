import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import musicReducer from "./Redux/Slices/musicSlice";
import {
  watchFetchMusicList,
  watchAddMusic,
  watchUpdateMusic,
  watchRemoveMusic,
  watchGenerateStatistics,
} from "./Redux/Sagas/musicSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchMusicList);
sagaMiddleware.run(watchAddMusic);
sagaMiddleware.run(watchUpdateMusic);
sagaMiddleware.run(watchRemoveMusic);
sagaMiddleware.run(watchGenerateStatistics);


export default store;
