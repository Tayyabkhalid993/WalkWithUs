"use client";
import { urlFor } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: SanityImageSource[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [bigImage, setBigImage] = useState<SanityImageSource | null>(
    images?.[0] ?? null
  );
  const [fade, setFade] = useState(false);

  const handleSmallImageClick = (image: string) => {
    if (image === bigImage) return; // Prevent re-triggering animation if the same image is clicked

    // Trigger fade out
    setFade(true);
    setTimeout(() => {
      setBigImage(image); // Set the new big image
      setFade(false); // Trigger fade in
    }, 300); // Duration should match the CSS transition time
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: SanityImageSource, idx: number) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={500}
              height={500}
              alt="product images"
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="product image"
          width={500}
          height={500}
          className={`h-auto w-auto object-cover object-center transition-opacity duration-300 ease-in-out ${fade ? "opacity-0" : "opacity-100"}`}
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
