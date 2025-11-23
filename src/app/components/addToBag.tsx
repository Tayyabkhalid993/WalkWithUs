"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/client";
import { useShoppingCart } from "use-shopping-cart";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: SanityImageSource[];
  price_id: string;
}

export default function AddToBag({
  currency,
  name,
  description,
  price,
  image,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  // Select the first image if an array is provided
  const imageUrl = image?.[0] ? urlFor(image[0]).url() : undefined;

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: imageUrl,
    id: price_id,
    sku: name.replace(/\s+/g, "-").toLowerCase(), // Using name as SKU, converted to slug format
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to Cart
    </Button>
  );
}
