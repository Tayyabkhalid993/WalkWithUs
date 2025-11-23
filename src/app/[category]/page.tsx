import { urlFor } from "@/sanity/lib/client";
import { safeFetch } from "@/sanity/lib/safeFetch";
import { simplifiedProduct } from "../components/Newest";
import Image from "next/image";
import Link from "next/link";

async function getData(category: string) {
  const query = `*[_type == "product" && category->name == $category]{
        "imageUrl": images[0].asset->url,
        price,
        _id,
        name,
        "slug": slug.current,
        "categoryName": category->name,
    }`;

  const data = await safeFetch(query, { category });
  return data ?? [];
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string }; // <-- plain object, not Promise
}) {
  const { category } = params; // no await required
  const data: simplifiedProduct[] = await getData(category);

  if (!data || data.length === 0) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            There is no product of this category
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Our Products for {category}
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <Link href={`/product/${product.slug}`}>
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  {product.imageUrl ? (
                    <Image
                      src={urlFor(product.imageUrl).url()}
                      alt="product image"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
