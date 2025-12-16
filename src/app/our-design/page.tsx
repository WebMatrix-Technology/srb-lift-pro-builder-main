"use client";

import Reveal from "@/components/Reveal";
import { defaultDesignImages } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function OurDesign() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const designImages = defaultDesignImages;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Our Design Gallery
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Our <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Designs</span>
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Explore our innovative elevator and lift design portfolio
            </p>
          </Reveal>
        </div>
      </section>

      {/* Design Gallery Section */}
      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Design <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A showcase of our innovative elevator designs and installations
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {designImages.map((design, index) => (
              <Reveal key={design.id} variant="fade-up" delayMs={index * 50}>
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-lg border-2 border-border bg-background shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
                  onClick={() => setSelectedImage(design.image)}
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={design.image}
                      alt={design.title || `Design ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {design.title && (
                      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                          {design.category}
                        </p>
                        <p className="text-lg font-bold text-white">{design.title}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Design view"
              width={1200}
              height={1200}
              className="max-h-[90vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

