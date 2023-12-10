"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CommonState = {
  particleActive: boolean;
  particleInteractive: boolean;
  currentHash: string;
};

type CommonStateAction = {
  particleActive?: boolean;
  particleInteractive?: boolean;
};

const initialState: CommonState = {
  particleActive: true,
  particleInteractive: false,
  currentHash: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setParticle: (state, action: PayloadAction<CommonStateAction>) => {
      const eachVal = Object.entries(action.payload) as [
        keyof CommonStateAction,
        boolean
      ][];
      if (eachVal.length > 0) {
        eachVal.forEach(([k, v]) => {
          state[k] = v;
        });
      }
    },
    setHash: (state, action: PayloadAction<string>) => {
      state.currentHash = action.payload;
    },
  },
});

export const { setParticle, setHash } = commonSlice.actions;

export default commonSlice.reducer;
