import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const storedCredentials = JSON.parse(localStorage.getItem('credentials'));
      if (storedCredentials && storedCredentials.username === username && storedCredentials.password === password) {
        state.isAuthenticated = true;
        state.user = username;
        localStorage.setItem('user', JSON.stringify(username));
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
