"use client";
import { useEffect } from "react";
import { logEvent } from "@/lib/firebase";

export default function DownloadPageTracker() {
  useEffect(() => {
    logEvent("download_page_view");
  }, []);
  return null;
}
