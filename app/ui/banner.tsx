import clsx from "clsx";
export default function Banner({ url, title }: { url: string; title: string }) {
  return (
    <div
      className={clsx(
        "relative bg-cover bg-center bg-no-repeat pb-[100px] pt-[120px] lg:bg-fixed lg:py-[270px]",
        url
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 opacity-50"
      />
      <div className="z-1 absolute inset-0 bg-zinc-900 opacity-5"></div>
      <div className="z-10 m-auto flex max-w-5xl pt-10 text-center">
        <div className="z-10 w-full">
          <h1 className="mb-7 text-4xl font-bold text-white md:text-7xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
