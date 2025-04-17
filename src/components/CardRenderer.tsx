"use client";

import type { Card } from "@/types/CardTypes";
import TabCard from "./Card";

import DownloadCard from "@/components/downloadPage/DownloadCard";

interface CardRendererProps {
  data: Card;
  isDownloadPage: boolean;
}

export default function CardRenderer({
  data,
  isDownloadPage,
}: CardRendererProps) {
  if (isDownloadPage) {
    return <DownloadCard data={data} />;
  }

  return <TabCard data={data} />;
}
