import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    user: initialUser,
  },
  reducers: {
    signupError: (state, action) => {
      state.signupError = action.payload;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      localStorage.removeItem('user')
    },
  },
});

export default slice.reducer;

const { signupError, loginSuccess, logoutSuccess } =
  slice.actions;

export const signupEmailPassword =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      
      dispatch(loginSuccess(res.user));
    } catch (e) {
      dispatch(signupError(e.message));
    }
  };

export const loginEmailPassword =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      dispatch(loginSuccess(res.user));
    } catch (e) {
      return console.error(e.message);
    }
  };

export const logout = () => async (dispatch) => {
  try {
    // const res = await api.post('logout')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
