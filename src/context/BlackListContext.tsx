"use client";

import { domains } from "@/constant/BlackListedDomainData";
import type React from "react";

import { createContext, useContext, useState } from "react";
export interface BlacklistedDomain {
  id: string;
  domain: string;
  includeSubdomains: boolean;
  pathPattern?: string;
  blockType: "entire-domain" | "specific-path";
  dateAdded: Date;
  isRegex?: boolean;
}
type BlackListContextProps = {
  blockType: "entire-domain" | "specific-path";
  setBlockType: (blockType: "entire-domain" | "specific-path") => void;
  newDomain: string;
  setNewDomain: (newDomain: string) => void;
  pathPattern: string;
  setPathPattern: (pathPattern: string) => void;
  isValidDomain: boolean;
  setIsValidDomain: (isValidDomain: boolean) => void;
  blacklistedDomains: BlacklistedDomain[];
  setBlacklistedDomains: (blacklistedDomains: BlacklistedDomain[]) => void;
  validateDomain: (domain: string) => void;
  includeSubdomains: boolean;
  setIncludeSubdomains: (includeSubdomains: boolean) => void;
  showSuccess: boolean;
  setShowSuccess: (showSuccess: boolean) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
  selectedDomains: string[];
  setSelectedDomains: (selectedDomains: string[]) => void;
  deleteDialogOpen: boolean;
  setDeleteDialogOpen: (isOpen: boolean) => void;
  domainToDelete: string | null;
  openDeleteDialog: (id: string) => void;
  bulkDeleteMode: boolean;
  toggleDomainSelection: (id: string) => void;
  toggleSelectAll: () => void;
  filteredDomains: BlacklistedDomain[];
  domainCounts: {
    all: number;
    exact: number;
    subdomains: number;
    paths: number;
  };
  handleDeleteDomain: () => void;
  openBulkDeleteDialog: () => void;
};

const BlackListContext = createContext<BlackListContextProps | undefined>(
  undefined
);

export const BlackListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [blockType, setBlockType] = useState<"entire-domain" | "specific-path">(
    "entire-domain"
  );
  const [newDomain, setNewDomain] = useState("");
  const [pathPattern, setPathPattern] = useState("");
  const [isValidDomain, setIsValidDomain] = useState(false);
  const [blacklistedDomains, setBlacklistedDomains] =
    useState<BlacklistedDomain[]>(domains);
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [includeSubdomains, setIncludeSubdomains] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [domainToDelete, setDomainToDelete] = useState<string | null>(null);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [bulkDeleteMode, setBulkDeleteMode] = useState(false);
  const validateDomain = (domain: string) => {
    if (!domain) {
      setIsValidDomain(false);
      return;
    }

    // Check if it's a regex pattern (starts with ^ or contains special regex characters)
    const regexSpecialChars = /[\^$[\]$${}?*+|\\]/;
    if (regexSpecialChars.test(domain)) {
      try {
        // Try to create a RegExp object to validate the pattern
        new RegExp(domain);
        setIsValidDomain(true);
        return;
      } catch (e) {
        setIsValidDomain(false);
        console.log(e);
        return;
      }
    }

    // Regular domain validation
    const domainRegex =
      /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    setIsValidDomain(domainRegex.test(domain));
  };
  const openDeleteDialog = (id: string) => {
    setDomainToDelete(id);
    setBulkDeleteMode(false);
    setDeleteDialogOpen(true);
  };
  const toggleDomainSelection = (id: string) => {
    setSelectedDomains((prev) =>
      prev.includes(id)
        ? prev.filter((domainId) => domainId !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedDomains.length === filteredDomains.length) {
      setSelectedDomains([]);
    } else {
      setSelectedDomains(filteredDomains.map((domain) => domain.id));
    }
  };

  const filteredDomains = blacklistedDomains.filter((domain) => {
    if (
      searchQuery &&
      !domain.domain.includes(searchQuery) &&
      !(domain.pathPattern && domain.pathPattern.includes(searchQuery))
    ) {
      return false;
    }

    if (activeTab === "subdomains" && !domain.includeSubdomains) {
      return false;
    }

    if (
      activeTab === "exact" &&
      (domain.includeSubdomains || domain.blockType === "specific-path")
    ) {
      return false;
    }

    if (activeTab === "paths" && domain.blockType !== "specific-path") {
      return false;
    }

    return true;
  });
  const domainCounts = {
    all: blacklistedDomains.length,
    exact: blacklistedDomains.filter(
      (d) => !d.includeSubdomains && d.blockType !== "specific-path"
    ).length,
    subdomains: blacklistedDomains.filter((d) => d.includeSubdomains).length,
    paths: blacklistedDomains.filter((d) => d.blockType === "specific-path")
      .length,
  };
  const handleDeleteDomain = () => {
    if (bulkDeleteMode) {
      setBlacklistedDomains(
        blacklistedDomains.filter(
          (domain) => !selectedDomains.includes(domain.id)
        )
      );
      setSelectedDomains([]);
    } else if (domainToDelete) {
      setBlacklistedDomains(
        blacklistedDomains.filter((domain) => domain.id !== domainToDelete)
      );
    }
    setDeleteDialogOpen(false);
  };
  const openBulkDeleteDialog = () => {
    setBulkDeleteMode(true);
    setDeleteDialogOpen(true);
  };
  return (
    <BlackListContext.Provider
      value={{
        openBulkDeleteDialog,
        toggleDomainSelection,
        domainCounts,
        setDeleteDialogOpen,
        handleDeleteDomain,
        toggleSelectAll,
        filteredDomains,
        deleteDialogOpen,
        domainToDelete,
        openDeleteDialog,
        bulkDeleteMode,
        setSelectedDomains,
        selectedDomains,
        setActiveTab,
        activeTab,
        setSearchQuery,
        searchQuery,
        setIncludeSubdomains,
        includeSubdomains,
        setShowSuccess,
        showSuccess,
        setIsValidDomain,
        isValidDomain,
        blockType,
        setBlockType,
        newDomain,
        setNewDomain,
        setPathPattern,
        pathPattern,
        setBlacklistedDomains,
        blacklistedDomains,
        validateDomain,
      }}
    >
      {children}
    </BlackListContext.Provider>
  );
};

export const useBlackList = () => {
  const context = useContext(BlackListContext);
  if (!context) {
    throw new Error(
      "useBlackListContext must be used within a BlackListContextProvider"
    );
  }
  return context;
};
