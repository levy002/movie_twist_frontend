import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMoviesApi } from "../api/moviesApi";

const initialState = {
  movies: [],
  isLoading: 'false',
};

export const fetchMovies = createAsyncThunk(
  'movies/fetch',
  async () => {
    const data = await fetchMoviesApi();
    return data;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = 'true';
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.isLoading = 'false';
      state.movies = action.payload.data;
    },
    [fetchMovies.rejected]: (state) => {
      state.isLoading = 'false';
    },
  }
});

export default moviesSlice.reducer;
