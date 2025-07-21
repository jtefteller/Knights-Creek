import clsx from "clsx";
export default function Card({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [props: string]: any;
}) {
  return (
    <div
      className={clsx(
        "flex flex-1 flex-col items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
