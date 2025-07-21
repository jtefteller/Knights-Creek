import Button from "@/app/ui/button";
import FadeInOnScroll from "@/app/ui/fade-in-on-scroll";
export default function Promotion() {
  return (
    <FadeInOnScroll className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16 lg:py-64">
      <div className="absolute inset-0 overflow-hidden bg-[url('/maggiewithducks.jpg')] bg-cover bg-top lg:bg-fixed"></div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-50"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          EXPLORE THE ARKANSAS DELTA
        </h2>
        <div className="mt-5 w-24 border-t-4 border-t-[#00694e]"></div>
        <p className="mt-3 py-10 text-xl text-white">
          Southern hospitality and a welcoming nature, Arkansas is a joy to
          explore. Whether, it be your first duck hunt or just passing through,
          come and join us!
        </p>
        <Button href={"/services"}>Learn More</Button>
      </div>
    </FadeInOnScroll>
  );
}
