import Image from "next/image";
import Link from "next/link";
import knightscreeklogo from "../images/knightscreeklogo.png";

export default function Logo({ href }) {
	return (
		<Link href={href}>
			<Image
				src={knightscreeklogo.src}
				alt="Knight's Creek Logo"
				width={knightscreeklogo.width}
				height={knightscreeklogo.height}
				className="w-24 md:w-40"
			/>
		</Link>
	);
}
