import Head from "next/head";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Grid from "@/components/Grid";
import { Header } from "@/components/Header";
import Card from "@/components/Card";
import Promotion from "@/components/Promotion";
import Image from "next/image";
import heathwithduck from "@/images/heathwithduck.jpg";
import lodge from "@/images/lodge.jpg";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<>
			<Head>
				<title>Knight's Creek – Outdoor Lifestyle</title>
				<meta name="description" content="Knight's Creek – Outdoor Lifestyle" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/knightscreeklogo.png" />
			</Head>
			<main>
				<Header />
				<Hero />
				<Quote />
				<Grid title="SERVICES">
					<Card className={"min-w-[350px] p-5"}>
						<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-[.65] lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
							<Image
								src={heathwithduck.src}
								alt="Heath with Duck"
								width={heathwithduck.width}
								height={heathwithduck.height}
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<h3 className="py-5 text-lg font-bold">Book A Hunt</h3>
						<div className="text-md pb-5 italic">Coming Soon!</div>
						<Button href={"/services"}>Learn More</Button>
					</Card>
					<Card className={"min-w-[350px] p-5"}>
						<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-[.65] lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
							<Image
								src={lodge.src}
								alt="The Lodge"
								width={lodge.width}
								height={lodge.height}
								className="h-full w-full object-cover object-center"
							/>
						</div>

						<h3 className="py-5 text-lg font-bold">Book A Lodge</h3>
						<div className="text-md pb-5 italic">Coming Soon!</div>
						<Button href={"/services"}>Learn More</Button>
					</Card>
				</Grid>
				<Promotion />
				<Footer />
			</main>
		</>
	);
}
