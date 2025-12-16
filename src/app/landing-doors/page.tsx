"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, DoorOpen } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { defaultDoorTypes } from "@/lib/data";

export default function LandingDoors() {
  const allDoorTypes = defaultDoorTypes;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-28 md:py-36">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              <DoorOpen className="h-4 w-4" />
              Door Solutions
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Landing <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">Doors</span>
            </h1>
            <p className="mb-8 text-xl text-white/95 md:text-2xl">
              Wide range of door options to match your building's style and requirements
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Products
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* All Door Types Grid */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Door Types
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Complete Range of <span className="gradient-text">Door Solutions</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose from various door types designed for different applications and aesthetics - both automatic and manual options available
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allDoorTypes.map((door, index) => {
              const Icon = door.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Link href={`/landing-doors/${door.slug}`}>
                    <Card className="group relative h-full overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer">
                    <div className="relative aspect-video w-full overflow-hidden bg-muted/20">
                      <img
                        src={door.image || "/placeholder.svg"}
                        alt={door.name}
                        className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${door.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none`} />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${door.gradient} shadow-xl shadow-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl z-10`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={door.type === "Automatic" 
                            ? "bg-green-100 text-green-700 border-green-200 z-10" 
                            : "bg-blue-100 text-blue-700 border-blue-200 z-10"
                          }
                        >
                          {door.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${door.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-50`} />
                      <CardHeader className="relative z-10 pt-6">
                        <CardTitle className="text-2xl font-bold leading-tight">{door.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10 space-y-6">
                      <p className="leading-relaxed text-muted-foreground">{door.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Key Features:
                        </h4>
                        <ul className="space-y-2.5">
                          {door.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                    </div>
                  </Card>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Information Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Reveal variant="fade-up">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/3 to-primary-hover/5 shadow-xl">
                <CardContent className="p-10">
                  <div className="mb-8 text-center">
                    <h3 className="mb-3 text-3xl font-bold">Door Options Available</h3>
                    <p className="text-muted-foreground">Comprehensive door solutions for every need</p>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold">Automatic Doors</h4>
                      </div>
                      <ul className="space-y-2.5 text-muted-foreground">
                        {["SS Automatic", "MS Automatic", "Glass Automatic", "SS Hairline Autodoor", "Telescopic/Side Opening Auto"].map((door, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                            <span>{door}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                          <DoorOpen className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold">Manual Doors</h4>
                      </div>
                      <ul className="space-y-2.5 text-muted-foreground">
                        {["Swing Doors", "Collapsible Gates", "Telescopic/Side Opening", "Powder Coated Options", "MS Imperforate Door"].map((door, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                            <span>{door}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 rounded-xl bg-background/80 p-6 backdrop-blur-sm">
                    <p className="text-center text-muted-foreground">
                      <strong className="text-foreground">All doors</strong> are designed for smooth operation, durability, and safety. We offer custom solutions to match your building's architectural style and functional requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Need Help Choosing?
            </h2>
            <p className="mb-10 text-xl text-white/95 md:text-2xl">
              Our experts will help you select the perfect door solution for your project
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-16 px-10 text-lg font-semibold" 
              asChild
            >
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
