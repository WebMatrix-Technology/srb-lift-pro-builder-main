"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import installationImg from "@/assets/service-installation.jpg";
import modernizationImg from "@/assets/service-modernization.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import repairImg from "@/assets/service-repair.jpg";
import consultancyImg from "@/assets/service-consultancy.jpg";
import Reveal from "@/components/Reveal";
import { defaultServices } from "@/lib/data";

export default function Services() {
  // Map image paths to actual imported images
  const imageMap: Record<string, typeof installationImg> = {
    "/assets/service-installation.jpg": installationImg,
    "/assets/service-modernization.jpg": modernizationImg,
    "/assets/service-maintenance.jpg": maintenanceImg,
    "/assets/service-repair.jpg": repairImg,
    "/assets/service-consultancy.jpg": consultancyImg,
  };

  // Map services with actual image imports
  const services = defaultServices.map((service) => ({
    ...service,
    image: typeof service.image === "string" && imageMap[service.image]
      ? imageMap[service.image]
      : service.image,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <Reveal className="max-w-3xl" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Our Services
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Complete <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Lift Solutions</span>
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Supply • Installation • Commissioning • Servicing • AMC • Modification
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Reveal key={index} variant="fade-up" delayMs={index * 120}>
                <Card className="group overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                  <div className="grid md:grid-cols-2">
                    <div className={`relative aspect-square md:aspect-auto ${index % 2 === 1 ? "md:order-2" : ""} overflow-hidden`}>
                      <img
                        src={typeof service.image === 'string' ? service.image : service.image.src}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <CardContent className="flex flex-col justify-center p-8 md:p-12">
                      <h2 className="mb-4 text-3xl font-bold md:text-4xl">{service.title}</h2>
                      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{service.description}</p>
                      
                      <div className="mb-8 space-y-3">
                        <h3 className="text-lg font-semibold">Key Benefits:</h3>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-primary to-primary-hover hover:shadow-lg transition-all duration-300" asChild>
                        <Link href="/contact">
                          Request a Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Product Range
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Elevators for <span className="gradient-text">Every Application</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive range of lift solutions tailored to your specific needs
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal variant="fade-up">
              <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">Passenger Lifts</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">Microprocessor controlled, smooth and comfortable travel with automatic doors.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={80}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Hospital / Stretcher Lifts</h3>
                <p className="text-sm text-muted-foreground">Hygienic interiors, precise leveling and robust performance for healthcare needs.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={160}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Industrial / Goods Lifts</h3>
                <p className="text-sm text-muted-foreground">Heavy‑duty lifts designed for warehouses and factories; full collective/ selective controls.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={240}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Dumbwaiter / Service Lifts</h3>
                <p className="text-sm text-muted-foreground">Compact lifts for restaurants, hotels and hospitals to move goods efficiently.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={320}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Capsule Lifts</h3>
                <p className="text-sm text-muted-foreground">Architectural highlights with panoramic visibility; various shapes and capacities.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={400}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Hydraulic & Car Lifts</h3>
                <p className="text-sm text-muted-foreground">Optimal for specific applications with collapsible/ telescopic doors and smooth operation.</p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Salient & Safety Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Salient Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Designed and engineered for smooth, comfortable and quiet ride</li>
                <li>Variable frequency drives for precise control and energy efficiency</li>
                <li>Economical operations throughout lift life cycle</li>
                <li>Maximum cabin space with optimized shaft and door dimensions</li>
                <li>Compatibility with latest next‑generation technologies</li>
                <li>Multiple design options for interior finishes and ceilings</li>
                <li>Contact‑less sensors and precise leveling for safe movement of passengers and goods</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold">Safety Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Door interlocking and emergency alarm</li>
                <li>Overspeed governor and final limit switch</li>
                <li>Emergency stop switch and fireman switch</li>
                <li>Infrared full‑length door sensors</li>
                <li>Automatic rescue device (ARD) for power failure</li>
                <li>Robust braking and mechanical safety systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Explore More</h2>
            <p className="text-lg text-muted-foreground">Discover our complete range of products and technical solutions</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <Reveal variant="fade-up">
              <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 font-bold">Product Catalog</h3>
                  <p className="mb-4 text-sm text-muted-foreground">View detailed specifications</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/products">View Products</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={100}>
              <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 font-bold">Elevator Types</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Explore different lift types</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/product-types">View Types</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={200}>
              <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 font-bold">Technical Specs</h3>
                  <p className="mb-4 text-sm text-muted-foreground">MRL, controllers & safety</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/technical">View Technical</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={300}>
              <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 font-bold">Landing Doors</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Door options & designs</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/landing-doors">View Doors</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={400}>
              <Card className="group border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2 font-bold">Specifications</h3>
                  <p className="mb-4 text-sm text-muted-foreground">Detailed technical specs</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/specifications">View Specs</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Need a Custom Solution?</h2>
            <p className="mb-8 text-xl text-white/90">
              Contact us to discuss your specific requirements
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

