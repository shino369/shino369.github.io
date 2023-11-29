"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CommonState = {
  particleActive: boolean;
  particleInteractive: boolean;
};

type CommonStateAction = {
  particleActive?: boolean;
  particleInteractive?: boolean;
};

const initialState: CommonState = {
  particleActive: true,
  particleInteractive: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setParticle: (state, action: PayloadAction<CommonStateAction>) => {
      const eachVal = Object.entries(action.payload) as [
        keyof CommonState,
        boolean
      ][];
      if (eachVal.length > 0) {
        eachVal.forEach(([k, v]) => {
          state[k] = v;
        });
      }
    },
  },
});

export const { setParticle } = commonSlice.actions;

export default commonSlice.reducer;
