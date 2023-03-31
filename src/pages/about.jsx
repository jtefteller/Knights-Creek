import Head from "next/head";
import { Header } from "@/components/Header";
import Banner from "@/components/Banner";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Separator from "@/components/Separator";
import heathwithfamily from "@/images/heathwithfamily.jpg";
import blake from "@/images/blake.jpg";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function About() {
	return (
		<>
			<Head>
				<title>Knight&apos;s Creek – Outdoor Lifestyle</title>
				<meta name="description" content="Knight's Creek – About" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/knightscreeklogo.png" />
			</Head>
			<main>
				<Header />
				<Banner
					title={"Who We Are"}
					url={"bg-[url('../images/carryingducks.jpg')]"}
				/>
				<Grid>
					<Card className={"min-w-[350px] p-5"}>
						<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-[.65] lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
							<Image
								src={blake.src}
								alt="Blake"
								width={blake.width}
								height={blake.height}
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<h3 className="py-5 text-lg font-bold">Blake Wilkison</h3>
						<Separator className={"mb-4"} />
						<div className="pb-5 text-lg">
							<p className="pb-5">
								Blake is an avid duck hunter who has been pursuing his passion
								for over 20 years. He grew up in the Brinkley countryside, where
								he learned to duck hunt at a young age. Blake has always had a
								fascination with the outdoors, and he loves the thrill of the
								hunt.
							</p>
							<p className="pb-5">
								Over the years, Blake has hunted ducks all over the state, from
								the small fields of Brinkley to the timber of Stuttgart.
							</p>
							<p>
								When he’s not hunting, Blake works as a farmer on his family
								farm. He is always happy to share his knowledge and experience
								with new duck hunters, and he loves to see the excitement and
								sense of accomplishment on their faces when they make their
								first successful shot. Blake is a dedicated and skilled duck
								hunter who embodies the outdoorsman lifestyle.{" "}
							</p>
						</div>
					</Card>
					<Card className={"min-w-[350px] p-5"}>
						<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-[.65] lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
							<Image
								src={heathwithfamily.src}
								alt="Heath with Family"
								width={heathwithfamily.width}
								height={heathwithfamily.height}
								className="h-full w-full object-cover object-center"
							/>
						</div>

						<h3 className="py-5 text-lg font-bold">Heath Lockley</h3>
						<Separator className={"mb-4"} />
						<div className="pb-5 text-lg">
							<p className="pb-5">
								Heath is a businessman/engineer and a family man with a passion
								for duck hunting. He attended Arkansas State University on a
								football scholarship and played as a center for the school’s
								team.
							</p>
							<p className="pb-5">
								Heath is married with two young children, and he values the time
								he spends with his family above all else. In his spare time, he
								enjoys the great outdoors and has developed a love for duck
								hunting. He spends many of his weekends and holidays in the
								great outdoors, stalking deer and hunting ducks.
							</p>
							<p className="pb-5">
								Overall, Heath is a skilled businessman/engineer, a talented
								athlete, and a devoted family man who loves nothing more than
								spending time with his loved ones in the great outdoors.
							</p>
						</div>
					</Card>
				</Grid>
				<Footer />
			</main>
		</>
	);
}
