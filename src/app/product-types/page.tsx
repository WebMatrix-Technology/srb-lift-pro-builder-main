"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Car, Droplets, Sparkles, Building2, Stethoscope } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function ProductTypes() {
  const productTypes = [
    {
      icon: Package,
      title: "Dumbwaiter Lifts",
      description: "Perfect for hotels, restaurants, banks, shopping centers, libraries, laboratories, and laundries. Used for delivering food, drinks, tableware, dairy products, documents, medicine, books, and instruments.",
      features: [
        "Stainless steel construction for heat and moisture resistance",
        "Custom design options",
        "Compact and space-efficient",
        "Ideal for multi-level facilities",
      ],
      applications: ["Hotels", "Restaurants", "Hospitals", "Libraries", "Shopping Centers"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Car,
      title: "Car Lifts",
      description: "Designed for moving cars in condominiums, showrooms, garages, and homes. Compact, easy-to-use basement/rooftop parking solutions for crowded and high-density spaces.",
      features: [
        "Cost-effective space-saving solution",
        "Design flexibility",
        "Suitable for high-density areas",
        "Easy operation and maintenance",
      ],
      applications: ["Residential Buildings", "Car Showrooms", "Parking Garages", "Private Homes"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Droplets,
      title: "Hydraulic Lifts",
      description: "Operate using oil pressure to move a piston upwards and gravitational force for lowering. Ultra-smooth and quiet ride quality with no pit or headroom requirements.",
      features: [
        "Ultra-smooth and quiet operation",
        "No pit or headroom required",
        "Single-phase power operation",
        "Reliable hydraulic system",
      ],
      applications: ["Low-rise Buildings", "Residential Complexes", "Small Commercial Spaces"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Capsule Lifts",
      description: "Architectural highlights for prestigious buildings, offering high visibility and aesthetically attractive interiors. Available in 3-side glass, 5-side glass, and round shapes.",
      features: [
        "High visibility panoramic design",
        "Multiple shape options",
        "Aesthetically attractive",
        "Perfect for architectural statements",
      ],
      applications: ["Shopping Malls", "Commercial Complexes", "Hospitality Industry", "Luxury Buildings"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Building2,
      title: "Passenger Lifts",
      description: "Designed for carrying people with electric motor power. Features comfort, elegance, speed, safety, and customizable features for various building types.",
      features: [
        "Microprocessor controlled",
        "Smooth and comfortable travel",
        "Automatic doors",
        "Multiple capacity options",
      ],
      applications: ["Office Buildings", "Residential Complexes", "Commercial Spaces"],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Stethoscope,
      title: "Hospital / Stretcher Lifts",
      description: "Designed specifically for hospitals with emphasis on reliability, safety, hygiene, and easy-to-clean materials. Wide cabins accommodate stretchers and medical equipment.",
      features: [
        "Hygienic interiors",
        "Precise leveling",
        "Robust performance",
        "Easy-to-clean materials",
      ],
      applications: ["Hospitals", "Medical Facilities", "Clinics", "Healthcare Centers"],
      gradient: "from-teal-500 to-cyan-500",
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
              Product Types
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Complete Range of <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Lift Solutions</span>
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Specialized lifts for every application and building type
            </p>
          </Reveal>
        </div>
      </section>

      {/* Product Types Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productTypes.map((product, index) => {
              const Icon = product.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Card className="group relative h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                    <CardHeader>
                      <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="leading-relaxed text-muted-foreground">{product.description}</p>
                      
                      <div>
                        <h4 className="mb-2 text-sm font-semibold">Key Features:</h4>
                        <ul className="space-y-1.5">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 text-sm font-semibold">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full group/btn" variant="outline" asChild>
                        <Link href="/contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary-hover/5">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Our Product Range Includes:</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Types:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Passenger Lifts</li>
                      <li>• Industrial/Goods Lift</li>
                      <li>• Hospital/Stretcher Lifts</li>
                      <li>• Dumbwaiter/Service Lifts</li>
                      <li>• Capsule Lifts</li>
                      <li>• Car Lifts</li>
                      <li>• Hydraulic Lifts</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Door Options:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• SS Automatic</li>
                      <li>• MS Automatic</li>
                      <li>• Glass Doors</li>
                      <li>• Swing Doors</li>
                      <li>• Telescopic/Side Opening Auto</li>
                      <li>• Collapsible Gates</li>
                    </ul>
                  </div>
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
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Ready to Choose Your Lift?</h2>
            <p className="mb-8 text-xl text-white/90">
              Our experts will help you select the perfect lift solution for your needs
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
                <Link href="/contact">Get Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
                <Link href="/products">View Specifications</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
