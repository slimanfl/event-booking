"use client"
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

type PropsProvider = {
  children: React.ReactNode;
};

const Provider = ({ children }: PropsProvider) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Provider;
