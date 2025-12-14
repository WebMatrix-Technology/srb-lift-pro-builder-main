"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Building2, ArrowRight, DoorOpen, Settings } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import heroElevatorImg from "@/assets/hero-elevator.jpg";

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
            {[
              { name: "Passenger Lifts", slug: "passenger-lifts", icon: Building2, gradient: "from-indigo-500 via-blue-500 to-indigo-600", description: "Comfortable and efficient passenger transportation" },
              { name: "Industrial / Goods Lift", slug: "industrial-goods-lift", icon: Building2, gradient: "from-gray-500 via-slate-500 to-gray-600", description: "Heavy-duty lifts for industrial applications" },
              { name: "Hospital / Stretcher Lifts", slug: "hospital-stretcher-lifts", icon: Building2, gradient: "from-teal-500 via-cyan-500 to-teal-600", description: "Designed for medical facilities" },
              { name: "Dumbwaiter / Service Lifts", slug: "dumbwaiter-service-lifts", icon: Building2, gradient: "from-blue-500 via-cyan-500 to-blue-600", description: "Compact service and delivery solutions" },
              { name: "Capsule Lifts", slug: "capsule-lifts", icon: Building2, gradient: "from-orange-500 via-red-500 to-orange-600", description: "Architectural highlights with panoramic views" },
              { name: "Car Lifts", slug: "car-lifts", icon: Building2, gradient: "from-purple-500 via-pink-500 to-purple-600", description: "Automotive parking solutions" },
              { name: "Hydraulic Lifts", slug: "hydraulic-lifts", icon: Building2, gradient: "from-green-500 via-emerald-500 to-green-600", description: "Smooth operation with no pit requirements" }
            ].map((type, index) => {
              const Icon = type.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Link href={`/products/${type.slug}`}>
                    <Card className="group relative h-full overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src={typeof heroElevatorImg === 'string' ? heroElevatorImg : heroElevatorImg.src}
                          alt={type.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`} />
                      </div>
                      <CardContent className="p-6">
                        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${type.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold leading-tight">{type.name}</h3>
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
            {[
              { name: "SS Automatic", slug: "ss-automatic", icon: DoorOpen, gradient: "from-slate-500 via-slate-600 to-slate-700", description: "Premium stainless steel automatic doors" },
              { name: "MS Automatic", slug: "ms-automatic", icon: DoorOpen, gradient: "from-gray-500 via-gray-600 to-gray-700", description: "Cost-effective mild steel automatic doors" },
              { name: "Glass Automatic", slug: "glass-automatic", icon: DoorOpen, gradient: "from-cyan-500 via-blue-500 to-cyan-600", description: "Modern glass doors with high visibility" },
              { name: "SS Hairline Autodoor", slug: "ss-hairline-autodoor", icon: DoorOpen, gradient: "from-zinc-500 via-gray-500 to-zinc-600", description: "Premium brushed stainless steel finish" },
              { name: "Telescopic / Side Opening Auto", slug: "telescopic-side-opening-auto", icon: DoorOpen, gradient: "from-indigo-500 via-purple-500 to-indigo-600", description: "Space-efficient telescopic door system" },
              { name: "Swing Doors", slug: "swing-doors", icon: DoorOpen, gradient: "from-amber-500 via-orange-500 to-amber-600", description: "Classic traditional swing door design" },
              { name: "Collapsible Gates", slug: "collapsible-gates", icon: DoorOpen, gradient: "from-teal-500 via-green-500 to-teal-600", description: "Industrial grade collapsible gates" },
              { name: "MS Imperforate Door", slug: "ms-imperforate-door", icon: DoorOpen, gradient: "from-blue-500 via-indigo-500 to-blue-600", description: "Modern accordion-style metallic door" },
              { name: "MS Powder Coated Door", slug: "ms-powder-coated-door", icon: DoorOpen, gradient: "from-yellow-500 via-amber-500 to-yellow-600", description: "Custom color powder coated doors" }
            ].map((door, index) => {
              const Icon = door.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Link href={`/landing-doors/${door.slug}`}>
                    <Card className="group relative h-full overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src={typeof heroElevatorImg === 'string' ? heroElevatorImg : heroElevatorImg.src}
                          alt={door.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${door.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`} />
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
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={typeof heroElevatorImg === 'string' ? heroElevatorImg : heroElevatorImg.src}
                        alt={mode.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${mode.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`} />
                    </div>
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
