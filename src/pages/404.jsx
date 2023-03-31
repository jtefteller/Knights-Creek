import Head from "next/head";
import { Header } from "../components/Header";
export default function NotFoundPage() {
	return (
		<>
			<Head>
				<title>Knight's Creek – Outdoor Lifestyle</title>
				<meta name="description" content="Knight's Creek – 404" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/knightscreeklogo.png" />
			</Head>
			<main>
				<Header />
				<div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('../images/notfound.jpeg')] bg-cover bg-center text-center text-white">
					<h1 className="text-7xl font-bold">Page not found!</h1>
				</div>
			</main>
		</>
	);
}
