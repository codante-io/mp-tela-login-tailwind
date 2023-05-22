"use client";

import UserProvider from "./user";

export default function Contexts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
}
