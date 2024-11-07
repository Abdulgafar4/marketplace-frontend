"use client";

import { Content } from "@/components/dashboard/dashboradContent";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("products");

  return (
    <div className="flex bg-background mt-20">
      <Content activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
