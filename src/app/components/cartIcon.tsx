'use client'
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

export default function CartIcon() {
    const { handleCartClick } = useShoppingCart();
    return (
        <div>
            <Button
                variant={"outline"}
                onClick={() => handleCartClick()}
                className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
                <ShoppingBag />
                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                    Cart
                </span>
            </Button>
        </div>
    )
}