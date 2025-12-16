"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building2, ArrowRight, DoorOpen, Settings } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import heroElevatorImg from "@/assets/hero-elevator.jpg";
import { defaultDoorTypes, defaultProductTypes } from "@/lib/data";

export default function Products() {

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

      {/* Types of Lifts Section */}
      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Specifications
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Types of <span className="gradient-text">Lifts</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive range of lift solutions for every application
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {defaultProductTypes.map((type, index) => {
              const Icon = type.icon;
              // Use product-specific image if available, otherwise fallback to heroElevatorImg
              const imageSrc = type.image || (typeof heroElevatorImg === 'string' ? heroElevatorImg : heroElevatorImg.src);
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Link href={`/products/${type.slug}`}>
                    <Card className="group relative h-full overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src={imageSrc}
                          alt={type.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`} />
                      </div>
                      <CardContent className="p-6">
                        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${type.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold leading-tight">{type.title}</h3>
                        <p className="mb-4 text-sm text-muted-foreground">{type.description}</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                          Learn More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Doors Section */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Door Options
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Types of <span className="gradient-text">Doors</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive range of door solutions for every application
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {defaultDoorTypes.map((door, index) => {
              const Icon = door.icon;
              // Use door-specific image if available, otherwise fallback to heroElevatorImg
              const imageSrc = door.image || (typeof heroElevatorImg === 'string' ? heroElevatorImg : heroElevatorImg.src);
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Link href={`/landing-doors/${door.slug}`}>
                    <Card className="group relative h-full overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                      <div className="relative aspect-video w-full overflow-hidden bg-muted/20">
                        <img
                          src={imageSrc}
                          alt={door.name}
                          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${door.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none`} />
                      </div>
                      <CardContent className="p-6">
                        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${door.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold leading-tight">{door.name}</h3>
                        <p className="mb-4 text-sm text-muted-foreground">{door.description}</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                          Learn More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mode of Operations Section */}
      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Control Systems
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Mode of <span className="gradient-text">Operations</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Advanced control systems for efficient lift operations
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { name: "Micro Processor Controlled", slug: "micro-processor-controlled", icon: Settings, gradient: "from-violet-500 via-purple-500 to-violet-600", description: "Advanced microprocessor-based control system" },
              { name: "Full Collective System", slug: "full-collective-system", icon: Settings, gradient: "from-rose-500 via-pink-500 to-rose-600", description: "Complete collective control for all floors" },
              { name: "Down Collective System", slug: "down-collective-system", icon: Settings, gradient: "from-emerald-500 via-green-500 to-emerald-600", description: "Downward collective control system" },
              { name: "Simplex / Duplex", slug: "simplex-duplex", icon: Settings, gradient: "from-sky-500 via-blue-500 to-sky-600", description: "Single or dual lift control systems" },
              { name: "Triplex / Quadruplex", slug: "triplex-quadruplex", icon: Settings, gradient: "from-amber-500 via-yellow-500 to-amber-600", description: "Multi-lift coordination systems" }
            ].map((mode, index) => {
              const Icon = mode.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Link href={`/mode-of-operations/${mode.slug}`}>
                    <Card className="group relative h-full overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${mode.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold leading-tight">{mode.name}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{mode.description}</p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                  </Link>
                </Reveal>
              );
            })}
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
