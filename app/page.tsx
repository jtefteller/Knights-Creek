import Image from "next/image";

import Hero from "@/app/ui/hero";
import Quote from "@/app/ui/quote";
import Grid from "@/app/ui/grid";
import Card from "@/app/ui/card";
import Promotion from "@/app/ui/promotion";
import Button from "@/app/ui/button";
import FadeInOnScroll from "@/app/ui/fade-in-on-scroll";

export default function Home() {
  return (
    <section className="antialiased">
      <Hero />
      <Quote />
      <Grid title="SERVICES" className={""}>
        <FadeInOnScroll delay={100}>
          <Card className={"min-w-[350px] p-5"}>
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg aspect-square group-hover:opacity-75 sm:h-64 ">
              <Image
                src={"/heathwithduck.jpg"}
                alt="Heath with Duck"
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h3 className="py-5 text-lg font-bold">Book A Hunt</h3>
            <span className="text-md pb-5 italic">Coming Soon!</span>
            <Button href={"/services"} className={""}>
              Learn More
            </Button>
          </Card>
        </FadeInOnScroll>
        <FadeInOnScroll delay={200}>
          <Card className={"min-w-[350px] p-5"}>
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg aspect-square group-hover:opacity-75 sm:h-64">
              <Image
                src={"/lodge.jpg"}
                alt="The Lodge"
                width={1000}
                height={1000}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <h3 className="py-5 text-lg font-bold">Book A Lodge</h3>
            <div className="text-md pb-5 italic">Coming Soon!</div>
            <Button href={"/services"} className="">
              Learn More
            </Button>
          </Card>
        </FadeInOnScroll>
      </Grid>
      <Promotion />
    </section>
  );
}
