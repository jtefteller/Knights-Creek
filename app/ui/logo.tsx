import Image from "next/image";
import Link from "next/link";

export default function Logo({
  className = "",
  href,
}: {
  className?: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <Image
        src={"/knightscreeklogo.png"}
        alt="Knight's Creek Logo"
        width={1000}
        height={1000}
        className={`w-24 md:w-40 ${className}`}
      />
    </Link>
  );
}
