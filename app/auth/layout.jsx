"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, []);
  return <div>{children}</div>;
}
