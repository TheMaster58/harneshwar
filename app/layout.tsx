import React from "react";

import type { Metadata } from "next";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Harneshwar Hospital",
//   description: "Best hospital in town",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased overflow-y-scroll`}
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </body>
    </html>
  );
}

