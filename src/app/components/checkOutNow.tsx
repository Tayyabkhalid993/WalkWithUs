'use client'
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/client";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./addToBag";

export default function CheckoutNow({ currency, name, description, price, image, price_id }: ProductCart) {
    const { checkoutSingleItem } = useShoppingCart();

    function buyNow(priceId:string){
        checkoutSingleItem(priceId)
    }

    // Select the first image if an array is provided
    const imageUrl = image?.[0] ? urlFor(image[0]).url() : undefined;

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: imageUrl,
        sku: name.replace(/\s+/g, '-').toLowerCase(), // Using name as SKU, converted to slug format
        price_id: price_id
    }

    return (
        <Button onClick={() => { buyNow(product.price_id) }}>
            Add to Cart
        </Button>
    )
}
