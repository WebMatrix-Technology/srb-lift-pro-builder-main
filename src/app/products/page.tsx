"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building2, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Products() {
  const cabinDesigns = [
    { name: "Modern Classic", description: "Circular ornate ceiling light, polished metal walls" },
    { name: "Contemporary", description: "Wooden door frame, white interior panels" },
    { name: "Glass Panoramic", description: "High visibility with marble-like walls" },
    { name: "Luxury", description: "Snowflake ceiling light, mirrored walls, premium finishes" },
    { name: "Executive", description: "Dark wood paneling with polished metal accents" },
    { name: "Elegant", description: "Dark wooden frame with frosted glass doors" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Product Catalog
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Our <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Product Range</span>
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Complete lift solutions for every application
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cabin Designs */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Cabin Designs
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Elegant <span className="gradient-text">Interior Options</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Multiple design options to match your building's aesthetic
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cabinDesigns.map((design, index) => (
              <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 aspect-video w-full rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <Building2 className="h-12 w-12 text-primary/50" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{design.name}</h3>
                    <p className="text-sm text-muted-foreground">{design.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Reveal className="mb-8 text-center" variant="fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">View Detailed Specifications</h2>
            <p className="text-lg text-muted-foreground">For comprehensive technical specifications, visit our dedicated specifications page</p>
          </Reveal>
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-hover hover:shadow-xl transition-all duration-300" asChild>
              <Link href="/specifications">
                View All Specifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Need Custom Specifications?</h2>
            <p className="mb-8 text-xl text-white/90">
              Contact us for detailed specifications tailored to your requirements
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
              <Link href="/contact">
                Request Specifications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
