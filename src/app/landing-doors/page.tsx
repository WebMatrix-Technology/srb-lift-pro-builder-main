"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DoorOpen, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingDoors() {
  const doorTypes = [
    {
      name: "MS Imperforate Door",
      description: "Metallic accordion-style door with smooth operation and modern design.",
      features: ["Durable construction", "Smooth operation", "Space efficient"],
    },
    {
      name: "MS Swing Door",
      description: "Single-panel door with rectangular window, perfect for traditional settings.",
      features: ["Classic design", "Easy maintenance", "Cost-effective"],
    },
    {
      name: "MS Collapsible Door",
      description: "Gate-like door with diamond lattice pattern, ideal for industrial applications.",
      features: ["Robust design", "High visibility", "Industrial grade"],
    },
    {
      name: "Glass Door",
      description: "Double-panel door made of glass with thin metal frames for modern aesthetics.",
      features: ["Modern appearance", "High visibility", "Elegant design"],
    },
    {
      name: "SS Hairline Autodoor",
      description: "Plain brushed stainless steel double door with sleek finish.",
      features: ["Premium finish", "Corrosion resistant", "Easy to clean"],
    },
    {
      name: "MS Powder Coated Door",
      description: "Light beige/cream colored double door with rectangular window, set within darker frame.",
      features: ["Custom colors", "Weather resistant", "Versatile design"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Door Solutions
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Landing <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Doors</span>
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Wide range of door options to match your building's style and requirements
            </p>
          </Reveal>
        </div>
      </section>

      {/* Door Types Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Door Types
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Complete Range of <span className="gradient-text">Door Solutions</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose from various door types designed for different applications and aesthetics
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {doorTypes.map((door, index) => (
              <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                <Card className="group h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <DoorOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{door.name}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{door.description}</p>
                    <ul className="mb-4 space-y-2">
                      {door.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full group/btn" asChild>
                      <Link href="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary-hover/5">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Door Options Available</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Automatic Doors:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• SS Automatic</li>
                      <li>• MS Automatic</li>
                      <li>• Glass Automatic</li>
                      <li>• SS Hairline Autodoor</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Manual Doors:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Swing Doors</li>
                      <li>• Collapsible Gates</li>
                      <li>• Telescopic/Side Opening</li>
                      <li>• Powder Coated Options</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 rounded-lg bg-background p-4">
                  <p className="text-sm text-muted-foreground">
                    All doors are designed for smooth operation, durability, and safety. We offer custom solutions to match your building's architectural style and functional requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Need Help Choosing?</h2>
            <p className="mb-8 text-xl text-white/90">
              Our experts will help you select the perfect door solution for your project
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
              <Link href="/contact">
                Get Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
