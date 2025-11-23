import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image
                  className="-mt-2"
                  src="/03.png"
                  width={64}
                  height={64}
                  alt="logo"
                />
                <h3 className="text-2xl font-bold text-primary">WalkWithUs</h3>
              </div>
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Thoughtfully designed footwear and accessories. Quality materials
              and responsible crafting to help you walk comfortably every day.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link className="hover:text-primary" href="/Men">
                  Men
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/Women">
                  Women
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/Teens">
                  Teens
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Support</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link className="hover:text-primary" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Stay in touch
            </h4>
            <p className="mt-3 text-sm text-gray-600">
              Get updates, promotions, and early access.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} WalkWithUs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
