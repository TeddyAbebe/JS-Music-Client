import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicList: [],
  loading: false,
  error: null,
  statistics: {},
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    //Fetch
    fetchMusicListRequest: (state) => {
      state.loading = true;
    },
    fetchMusicListSuccess(state, action) {
      state.musicList = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMusicListFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    //Add
    addMusicRequest: (state) => {
      state.loading = true;
    },
    addMusicSuccess: (state, action) => {
      state.loading = false;
      state.musicList.push(action.payload);
      state.error = null;
    },
    addMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Update
    updateMusicRequest: (state) => {
      state.loading = true;
    },
    updateMusicSuccess: (state, action) => {
      state.loading = false;
      const updatedMusicIndex = state.musicList.findIndex(
        (music) => music._id === action.payload._id
      );
      if (updatedMusicIndex !== -1) {
        state.musicList[updatedMusicIndex] = action.payload;
      }
      state.error = null;
    },
    updateMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Remove
    removeMusicRequest: (state) => {
      state.loading = true;
    },
    removeMusicSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.musicList = state.musicList.filter(
        (music) => music._id !== action.payload
      );
    },
    removeMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Stat
    generateStatisticsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    setStatisticsSuccess(state, action) {
      state.statistics = action.payload;
    },

    setStatisticsFailure(state, action) {
      state.statistics = {};
    },
  },
});

export const {
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
  setStatisticsSuccess,
  setStatisticsFailure,
} = musicSlice.actions;

export default musicSlice.reducer;
