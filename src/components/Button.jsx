import clsx from "clsx";
import Link from "next/link";
export default function Button({
	variant = "primary",
	children,
	className,
	href,
	...props
}) {
	const varientStyle = {
		primary:
			"rounded-full bg-[#00694e] text-white hover:bg-[#7bdcb5] py-3 px-10 text-lg",
		header: "rounded-full bg-[#00694e] text-white hover:bg-[#7bdcb5]",
	};
	return href ? (
		<Link className={clsx(varientStyle[variant], className)} href={href}>
			{children}
		</Link>
	) : (
		<button className={clsx(varientStyle[variant], className)} type="submit">
			{children}
		</button>
	);
}
