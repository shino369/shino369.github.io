"use client";
import { Provider } from "react-redux";
import store from "./store";
import { PropsWithChildren } from "react";

export default function AppProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
