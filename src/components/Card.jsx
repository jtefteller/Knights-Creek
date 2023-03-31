import clsx from "clsx";
export default function Card({ children, className, ...props }) {
	return (
		<div
			className={clsx(
				"flex flex-1 flex-col items-center justify-center",
				className
			)}
		>
			{children}
		</div>
	);
}
