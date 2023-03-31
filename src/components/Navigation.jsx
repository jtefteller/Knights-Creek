import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import {
	Bars3Icon,
	MinusSmallIcon,
	PlusSmallIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Header } from "./Header";

export default function Navigation() {
	return (
		<Header />
		// <>
		// 	<nav className="z-10 m-auto flex max-w-7xl items-center justify-between px-10 py-10 md:absolute md:left-0 md:right-0">
		// 		<Logo href={"/"}></Logo>
		// 		{/* <Button variant="header" className="h-10 rounded p-2 md:hidden">
		// 		<Bars3Icon className="h-6 w-6" />
		// 	</Button> */}
		// 		<ul className="hidden md:flex md:items-center">
		// 			{[
		// 				{ text: "Home", href: "/" },
		// 				{ text: "About", href: "/about" },
		// 				{ text: "Services", href: "/services" },
		// 				{ text: "Contact", href: "/contact" },
		// 			].map((item) => (
		// 				<NavItem key={item.text} href={item.href}>
		// 					{item.text}
		// 				</NavItem>
		// 			))}
		// 			<NavItem href={"/"}>
		// 				<Button>Book Now</Button>
		// 			</NavItem>
		// 		</ul>
		// 	</nav>
		// </>
	);
}

function NavItem({ href, children }) {
	return (
		<li>
			<Link className="px-5 text-white" href={href}>
				{children}
			</Link>
		</li>
	);
}
