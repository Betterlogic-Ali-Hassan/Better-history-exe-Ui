"use client";

import type React from "react";

import { createContext, useContext, useState } from "react";
import { usePageContext } from "./PageContext";

type SearchContextProps = {
  open: boolean;
  setOpen: (setOpen: boolean) => void;
};

const FeedBackContext = createContext<SearchContextProps | undefined>(
  undefined
);

export const FeedBackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { page } = usePageContext();
  const isOpen = page === "feedback";
  const [open, setOpen] = useState<boolean>(isOpen);

  return (
    <FeedBackContext.Provider value={{ open, setOpen }}>
      {children}
    </FeedBackContext.Provider>
  );
};

export const useFeedBack = () => {
  const context = useContext(FeedBackContext);
  if (!context) {
    throw new Error(
      "useFeedBackContext must be used within a FeedBackContextProvider"
    );
  }
  return context;
};
