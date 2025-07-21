import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Not Found",
};

export default function NotFoundPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/notfound.jpeg')] bg-cover bg-center text-center text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-50"
      />
      <h1 className="text-7xl font-bold z-20">Page not found!</h1>
    </div>
  );
}
