import Head from "next/head";
import { Header } from "@/components/Header";
import Banner from "@/components/Banner";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Separator from "@/components/Separator";
import lodge from "@/images/lodge.jpg";
import duck from "@/images/duck.jpg";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Services() {
	return (
		<>
			<Head>
				<title>Knight's Creek – Outdoor Lifestyle</title>
				<meta name="description" content="Knight's Creek – Services" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/knightscreeklogo.png" />
			</Head>
			<main>
				<Header />
				<Banner title={"Services"} url={"bg-[url('../images/truck.jpg')]"} />
				<Grid title={"IT'S TIME TO START YOUR ADVENTURE"}>
					<Card className={"min-w-[350px] p-5"}>
						<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-[.65] lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
							<Image
								src={duck.src}
								alt="Duck"
								width={duck.width}
								height={duck.height}
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<h3 className="py-5 text-lg font-bold">Book A Hunt</h3>
						<div className="text-md pb-5 italic">Coming Soon!</div>
					</Card>
					<Card className={"min-w-[350px] p-5"}>
						<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-[.65] lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
							<Image
								src={lodge.src}
								alt="Heath with Duck"
								width={lodge.width}
								height={lodge.height}
								className="h-full w-full object-cover object-center"
							/>
						</div>

						<h3 className="py-5 text-lg font-bold">Book A Lodge</h3>
						<div className="text-md pb-5 italic">Coming Soon!</div>
					</Card>
				</Grid>
				<div className="relative px-6 py-16 sm:px-12 lg:px-16 ">
					<div className="flex flex-col items-center justify-center gap-20 md:flex-row">
						<div>
							<h1 className="text-center text-2xl font-bold md:text-left">
								Why Knight's Creek
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
								An excellent lodge, an exciting duck hunt and delicious food,
								what more can you ask for?
							</p>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
}
