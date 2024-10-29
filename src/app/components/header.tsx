import Link from "next/link";
import CategoryHeader from "./category-header";
import { Button } from "@/components/ui/button"
import {ShoppingBag} from "lucide-react"

export default function Header() {
    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:max-w-7xl">
             <Link href={'/'}>
                <h1 className="text-2xl sm:text-4xl font-bold"><span className="text-primary">WalkWithUs</span></h1>
            </Link>
            <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            <CategoryHeader/>
            </nav>
            <div className="flex divide-x border-r sm:border-l">
            <Button variant={"outline"} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
                <ShoppingBag/>
                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
                </span>
            </Button>
            </div>
            </div>
        </header>
    )
}