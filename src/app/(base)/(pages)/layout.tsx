import React from "react";

export default function BasePageLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto py-4">
      {children}
    </div>
  );
}
