import { urlFor } from "@/sanity/lib/client";
import { safeFetch } from "@/sanity/lib/safeFetch";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface simplifiedProduct {
  _id: string;
  price: number;
  name: string;
  imageUrl: SanityImageSource | null; // Allowing null type for cases with no image
  slug: string;
  categoryName: string;
}

// Fetch Data
async function getData() {
  const query = `*[_type=='product'][0...4] | order(_createdAt desc){
        _id,
        price,
        name,
        "slug":slug.current,
        "categoryName":category->name,
        "imageUrl":images[0].asset->url
    }`;
  const data: simplifiedProduct[] | null = await safeFetch(query);
  return data ?? [];
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Newest Products
          </h2>
          <Link
            className="text-primary flex items-center gap-x-1"
            href={"/all"}
          >
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-x-8">
          {data.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product.slug}`}
              className="group relative block"
            >
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                {product.imageUrl ? (
                  <Image
                    src={urlFor(product.imageUrl).url()}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-center object-cover lg:h-full lg:w-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-base text-gray-500 ">
                    {product.categoryName}
                  </p>
                </div>
                <p className="font-medium text-gray-900">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
