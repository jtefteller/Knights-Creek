import Image from "next/image";
import quote from "@/images/quotes.png";
export default function Quote() {
	return (
		<div className="m-auto w-full max-w-7xl">
			<div className="m-auto flex items-center justify-center py-20">
				<Image
					src={quote.src}
					alt="Quote"
					width={quote.width}
					height={quote.height}
					className="w-24"
				/>
				<div className="mr-24 text-center">
					<p>
						&ldquo;You can&apos;t find a better group of people to work
						with!&ldquo;
					</p>
					<p>-Tammy Tefteller</p>
				</div>
			</div>
		</div>
	);
}
