/*import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    increment:state=> {
      state.value+=1;
      },
    decrement: state => {
      state.value -= 1;
  },
  incrementByAmount:(state,action)=>{
    state.user = action.payload;
  },
},
});

export const { increment,decrement,incrementByAmount } = CounterSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;*/
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
