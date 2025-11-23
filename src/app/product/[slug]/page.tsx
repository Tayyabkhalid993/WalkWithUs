import AddToBag from "@/app/components/addToBag";
import ImageGallery from "@/app/components/imageGallery";
import { Button } from "@/components/ui/button";
import { safeFetch } from "@/sanity/lib/safeFetch";
import { Star, Truck } from "lucide-react";

interface fullProduct {
  _id: string;
  images: string[];
  price: number;
  name: string;
  slug: string;
  categoryName: string;
  description: string;
  price_id: string;
}

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{ 
   _id, 
   images, 
   price, 
   name, 
   description, 
   "slug": slug.current,
   "categoryName": category->name, price_id }`;
  const data = await safeFetch(query);
  return data ?? null;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = (await params) as { slug: string };
  const data: fullProduct | null = await getData(slug);
  if (!data) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8 py-20 text-center">
          <h2 className="text-xl font-semibold">Product not available</h2>
          <p className="mt-2 text-sm text-gray-500">
            Could not load product details. Please try again later.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-lg font-bold">{data.name}</h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-2">
                <span className="text-lg">4.2</span>
                <Star className="h-6 w-6" />
              </Button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-lg text-gray-800 font-bold md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 40}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="h-6 w-6" />
              <span className="text-sm">2-4 Days Shipping</span>
            </div>
            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                description={data.description}
                image={[data.images[0]]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <Button variant={"secondary"}>Checkout Now</Button>
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
