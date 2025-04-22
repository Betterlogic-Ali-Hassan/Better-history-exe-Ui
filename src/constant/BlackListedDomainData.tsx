import { BlacklistedDomain } from "@/context/BlackListContext";

export const domains: BlacklistedDomain[] = [
  {
    id: "1",
    domain: "facebook.com",
    includeSubdomains: true,
    blockType: "entire-domain",
    dateAdded: new Date(2023, 3, 15),
    path: "https://www.facebook.com/",
  },
  {
    id: "2",
    domain: "twitter.com",
    includeSubdomains: false,
    blockType: "entire-domain",
    dateAdded: new Date(2023, 5, 22),
    path: "https://www.twitter.com/",
  },
  {
    id: "3",
    domain: "instagram.com",
    includeSubdomains: true,
    blockType: "entire-domain",
    dateAdded: new Date(2023, 6, 10),
    path: "https://www.instagram.com/",
  },
  {
    id: "4",
    domain: "google.com",
    includeSubdomains: false,
    pathPattern: "/maps/*",
    blockType: "specific-path",
    dateAdded: new Date(2023, 7, 5),
    path: "https://www.google.com/",
  },
  {
    id: "5",
    domain: "youtube.com",
    includeSubdomains: false,
    pathPattern: "/shorts/*",
    blockType: "specific-path",
    dateAdded: new Date(2023, 8, 12),
    path: "https://www.youtube.com/",
  },
];
