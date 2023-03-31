import clsx from "clsx";
export default function Separator({ className }) {
	return (
		<div
			className={clsx("mt-5 w-24 border-t-4 border-t-[#00694e]", className)}
		></div>
	);
}
