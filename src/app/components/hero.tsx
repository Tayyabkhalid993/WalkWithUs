import { urlFor } from "@/sanity/lib/client";
import { safeFetch } from "@/sanity/lib/safeFetch";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type=='heroImage'][0]`;
  const data = await safeFetch(query);
  return data ?? null;
}

export default async function Hero() {
  const data = await getData();
  if (!data) return null;
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 sm:flex justify-between md:mb-16">
        {/* ------------------left side text--------------- */}

        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-36">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl tracking-[6px]">
            Step into Style with{" "}
            <span className="text-primary">GlobexTrader</span>{" "}
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg tracking-[2px] text-justify">
            Discover premium footwear crafted for comfort and style.
            GlobexTrader brings you a curated collection of the latest trends
            and timeless classics—because every step should make a statement.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:h-2/3">
          {/* -------------------right side images------------- */}

          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="Hero image"
              className="h-full w-full object-cover object-center"
              priority
              width={350}
              height={350}
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="Hero image"
              className="h-full w-full object-cover object-center"
              priority
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>
      </div>
    </section>
  );
}
