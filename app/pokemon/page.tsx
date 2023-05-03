'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Pokemon({ params }: { params: { slug: string } }) {
  const { push } = useRouter();

  useEffect(() => {
     push('/pokemon/001');
  }, []);

  return null;
}
