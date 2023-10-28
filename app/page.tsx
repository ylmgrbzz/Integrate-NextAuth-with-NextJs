"use client";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data } = useSession();
  return (
    <main>
      {data ? (
        <p>
          Authenticated
          {data.user && data.user.name ? ` as ${data.user.name}` : ""}
        </p>
      ) : (
        <p>Not authenticated</p>
      )}
    </main>
  );
}
