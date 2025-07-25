import Link from "next/link";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-2xl inline-block rounded-lg px-2 py-1 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  );
}
