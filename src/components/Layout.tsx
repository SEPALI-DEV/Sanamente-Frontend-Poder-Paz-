import type { ReactNode } from "react";

export function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-700">
      {children}
    </div>
  );
}
