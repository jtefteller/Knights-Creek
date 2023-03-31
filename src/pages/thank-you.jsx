import Head from "next/head";
import { Header } from "../components/Header";
import Banner from "../components/Banner";
export default function ThankYou() {
	return (
		<>
			<Head>
				<title>Knight's Creek – Outdoor Lifestyle</title>
				<meta name="description" content="Knight's Creek – Thank You" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/knightscreeklogo.png" />
			</Head>
			<main>
				<Header />
				<div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('../images/taylor.jpeg')] bg-center text-center text-white">
					<h1 className="text-7xl font-bold">Thank you!</h1>
					<h3 className="text-4xl">Your message has been submited</h3>
				</div>
			</main>
		</>
	);
}
