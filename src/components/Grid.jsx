import clsx from "clsx";
export default function Grid({ title, children, className }) {
	return (
		<div className="m-auto max-w-7xl">
			{title ? (
				<div className="m-auto mt-5 flex w-full flex-col items-center justify-center">
					<h2 className="text-center text-4xl font-bold">{title}</h2>
					<div className="mt-5 w-24 border-t-4 border-t-[#00694e]"></div>
				</div>
			) : null}
			<div
				className={clsx(
					"m-auto flex flex-wrap items-center justify-center gap-20 py-10",
					className
				)}
			>
				{children}
			</div>
		</div>
	);
}
