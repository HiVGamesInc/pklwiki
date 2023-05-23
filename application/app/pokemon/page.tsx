"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Pokemon() {
  const { push } = useRouter();

  useEffect(() => {
    push("/pokemon/001");
  }, [push]);

  return null;
}
