import Button from "@/app/ui/button";
export default function Hero() {
  return (
    <div className="relative bg-[url('/maggie.jpg')] bg-cover bg-center bg-no-repeat pb-[100px] pt-[120px] lg:bg-fixed lg:py-[270px] fade-in">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-20"
      />
      <div className="z-1 absolute inset-0 bg-zinc-900 opacity-5"></div>
      <div className="z-10 m-auto flex max-w-5xl pt-10 text-center">
        <div className="z-10 w-full">
          <h1 className="mb-7 text-4xl font-bold text-white md:text-7xl">
            KNIGHT&apos;S CREEK
          </h1>
          <h2 className="mb-7 text-3xl font-bold text-white md:text-4xl">
            BOOK YOUR NEXT VISIT
          </h2>
          <Button href={"/contact"} className={"z-10 mt-10"}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
