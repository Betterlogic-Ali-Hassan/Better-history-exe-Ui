"use client";

import type React from "react";

import { createContext, useContext, useState } from "react";

type SearchContextProps = {
  searchActive: boolean;
  setSearchActive: (searchActive: boolean) => void;
};

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};
