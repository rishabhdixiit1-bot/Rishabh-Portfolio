import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  crypto:[]
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Setproducts: (state, action) => {
      state.products = action.payload;
      console.log(action.payload);
    },
    Setcrypto:(state, action)=>{
     state.crypto = action.payload;
     console.log(action.payload);

    }

    
  },
});

export const { Setproducts ,Setcrypto} = counterSlice.actions;
export default counterSlice.reducer;
