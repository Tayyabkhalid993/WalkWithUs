import Link from "next/link";
import CategoryHeader from "./category-header";
import Image from "next/image";
import CartIcon from "./cartIcon";

export default function Header() {
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="text-2xl sm:text-4xl font-bold">
            <span className="text-primary">
              <Image
                className="bg-none"
                src={"/02.png"}
                width={80}
                height={80}
                alt="Logo"
              ></Image>
            </span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          <CategoryHeader />
        </nav>
        <div className="flex divide-x border-r sm:border-l">
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
