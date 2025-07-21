import Banner from "@/app/ui/banner";
import Grid from "@/app/ui/grid";
import Card from "@/app/ui/card";
import Separator from "@/app/ui/separator";
import Image from "next/image";
import type { Metadata } from "next";
import FadeInOnScroll from "@/app/ui/fade-in-on-scroll";

export const metadata: Metadata = {
  title: "Services",
};
export default function Services() {
  return (
    <section>
      <FadeInOnScroll animationType="fade-in">
        <Banner title={"Services"} url={"bg-[url('/truck.jpg')]"} />
      </FadeInOnScroll>
      <Grid title={"It's Time to Start Your Adventure"} className={""}>
        <Card className={"min-w-[350px] p-5"}>
          <FadeInOnScroll delay={100}>
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg group-hover:opacity-75 sm:h-64">
              <Image
                src={"/duck.jpg"}
                alt="Duck"
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="py-5 text-lg font-bold text-center">Book A Hunt</h3>
            <div className="text-md pb-5 italic text-center">Coming Soon!</div>
          </FadeInOnScroll>
        </Card>
        <Card className={"min-w-[350px] p-5"}>
          <FadeInOnScroll delay={200}>
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg group-hover:opacity-75 sm:h-64">
              <Image
                src={"/lodge.jpg"}
                alt="Heath with Duck"
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <h3 className="py-5 text-lg font-bold text-center">Book A Lodge</h3>
            <div className="text-md pb-5 italic text-center">Coming Soon!</div>
          </FadeInOnScroll>
        </Card>
      </Grid>
      <div className="relative px-6 py-16 sm:px-12 lg:px-16 ">
        <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
          <div>
            <h1 className="text-center text-2xl font-bold md:text-left">
              Why Knight&apos;s Creek
            </h1>
            <Separator className={"m-auto py-5 md:ml-0"} />
            <p className="text-lg">
              We pride ourselves on delivering the best experience in all of
              Arkansas.
            </p>
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold md:text-left">
              What You Get
            </h1>
            <Separator className={"m-auto py-5 md:ml-0"} />
            <p className="text-lg">
              An excellent lodge, an exciting duck hunt and delicious food, what
              more can you ask for?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
