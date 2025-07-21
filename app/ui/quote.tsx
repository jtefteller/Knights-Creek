import Image from "next/image";
export default function Quote() {
  return (
    <div className="m-auto w-full max-w-7xl">
      <div className="m-auto flex items-center justify-center py-20">
        <Image
          src={"/quotes.png"}
          alt="Quote"
          width={1000}
          height={1000}
          className="w-24"
        />
        <div className="mr-24 text-center">
          <p className="stroke-[#00694e]">
            &ldquo;You can&apos;t find a better group of people to work
            with!&ldquo;
          </p>
          <p>-Tammy Tefteller</p>
        </div>
      </div>
    </div>
  );
}
