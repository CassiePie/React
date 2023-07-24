import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  isRegistered: false,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    registerUser: (state) => {
      // You can perform validation here before storing the data in local storage
      localStorage.setItem('user', JSON.stringify(state));
      state.isRegistered = true;
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  registerUser,
} = registerSlice.actions;

export default registerSlice.reducer;
