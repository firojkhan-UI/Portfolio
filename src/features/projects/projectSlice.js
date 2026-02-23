import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projects: [],
  loading: false,
  error: null,
}

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setProjects, setLoading, setError } = projectSlice.actions
export default projectSlice.reducer
