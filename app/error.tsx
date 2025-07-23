"use client";

import { useEffect } from "react";
import Button from "@/app/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/notfound.jpeg')] bg-cover bg-center text-center text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-50"
      />
      <h1 className="text-7xl font-bold z-20">Something went wrong!</h1>
      <Button
        variant="primary"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
