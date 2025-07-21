import type { Metadata } from "next";
import FadeInOnScroll from "@/app/ui/fade-in-on-scroll";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYou() {
  return (
    <section>
      <FadeInOnScroll animationType="fade-in">
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/taylor.jpeg')] bg-center text-center text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 opacity-20"
          />
          <h1 className="text-7xl font-bold">Thank you!</h1>
          <h3 className="text-4xl">Your message has been submited</h3>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
