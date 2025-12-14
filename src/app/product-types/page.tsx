"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Car, Droplets, Sparkles, Building2, Stethoscope, CheckCircle2, ArrowLeft, Factory } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import heroElevatorImg from "@/assets/hero-elevator.jpg";

export default function ProductTypes() {
  const productTypes = [
    {
      icon: Package,
      title: "Dumbwaiter Lifts",
      slug: "dumbwaiter-service-lifts",
      description: "Perfect for hotels, restaurants, banks, shopping centers, libraries, laboratories, and laundries. Used for delivering food, drinks, tableware, dairy products, documents, medicine, books, and instruments.",
      features: [
        "Stainless steel construction for heat and moisture resistance",
        "Custom design options",
        "Compact and space-efficient",
        "Ideal for multi-level facilities",
      ],
      applications: ["Hotels", "Restaurants", "Hospitals", "Libraries", "Shopping Centers"],
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Car,
      title: "Car Lifts",
      slug: "car-lifts",
      description: "Designed for moving cars in condominiums, showrooms, garages, and homes. Compact, easy-to-use basement/rooftop parking solutions for crowded and high-density spaces.",
      features: [
        "Cost-effective space-saving solution",
        "Design flexibility",
        "Suitable for high-density areas",
        "Easy operation and maintenance",
      ],
      applications: ["Residential Buildings", "Car Showrooms", "Parking Garages", "Private Homes"],
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: Droplets,
      title: "Hydraulic Lifts",
      slug: "hydraulic-lifts",
      description: "Operate using oil pressure to move a piston upwards and gravitational force for lowering. Ultra-smooth and quiet ride quality with no pit or headroom requirements.",
      features: [
        "Ultra-smooth and quiet operation",
        "No pit or headroom required",
        "Single-phase power operation",
        "Reliable hydraulic system",
      ],
      applications: ["Low-rise Buildings", "Residential Complexes", "Small Commercial Spaces"],
      gradient: "from-green-500 via-emerald-500 to-green-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Sparkles,
      title: "Capsule Lifts",
      slug: "capsule-lifts",
      description: "Architectural highlights for prestigious buildings, offering high visibility and aesthetically attractive interiors. Available in 3-side glass, 5-side glass, and round shapes.",
      features: [
        "High visibility panoramic design",
        "Multiple shape options",
        "Aesthetically attractive",
        "Perfect for architectural statements",
      ],
      applications: ["Shopping Malls", "Commercial Complexes", "Hospitality Industry", "Luxury Buildings"],
      gradient: "from-orange-500 via-red-500 to-orange-600",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: Building2,
      title: "Passenger Lifts",
      slug: "passenger-lifts",
      description: "Designed for carrying people with electric motor power. Features comfort, elegance, speed, safety, and customizable features for various building types.",
      features: [
        "Microprocessor controlled",
        "Smooth and comfortable travel",
        "Automatic doors",
        "Multiple capacity options",
      ],
      applications: ["Office Buildings", "Residential Complexes", "Commercial Spaces"],
      gradient: "from-indigo-500 via-blue-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-blue-50",
    },
    {
      icon: Factory,
      title: "Industrial / Goods Lift",
      slug: "industrial-goods-lift",
      description: "Heavy-duty lifts designed for transporting industrial goods and materials between floor levels. Built with robust construction to handle demanding industrial applications.",
      features: [
        "Heavy-duty construction",
        "Large capacity options (500-4000 KG)",
        "Robust steel frame",
        "Industrial-grade safety",
      ],
      applications: ["Factories", "Warehouses", "Distribution Centers", "Industrial Facilities"],
      gradient: "from-gray-500 via-slate-500 to-gray-600",
      bgGradient: "from-gray-50 to-slate-50",
    },
    {
      icon: Stethoscope,
      title: "Hospital / Stretcher Lifts",
      slug: "hospital-stretcher-lifts",
      description: "Designed specifically for hospitals with emphasis on reliability, safety, hygiene, and easy-to-clean materials. Wide cabins accommodate stretchers and medical equipment.",
      features: [
        "Hygienic interiors",
        "Precise leveling",
        "Robust performance",
        "Easy-to-clean materials",
      ],
      applications: ["Hospitals", "Medical Facilities", "Clinics", "Healthcare Centers"],
      gradient: "from-teal-500 via-cyan-500 to-teal-600",
      bgGradient: "from-teal-50 to-cyan-50",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-28 md:py-36">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              <Package className="h-4 w-4" />
              Product Types
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Complete Range of{" "}
              <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">
                Lift Solutions
              </span>
            </h1>
            <p className="mb-8 text-xl text-white/95 md:text-2xl">
              Specialized lifts for every application and building type
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

      {/* Product Types Grid */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Our Product Range
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Explore Our <span className="gradient-text">Lift Solutions</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Each lift type is engineered for specific applications with advanced features and reliable performance
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productTypes.map((product, index) => {
              const Icon = product.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Link href={`/products/${product.slug}`}>
                    <Card className="group relative h-full overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer">
                      <div className="relative aspect-video w-full overflow-hidden">
                        <img
                          src={typeof heroElevatorImg === 'string' ? heroElevatorImg : heroElevatorImg.src}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`} />
                        <div className={`absolute top-4 left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} shadow-xl shadow-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl z-10`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-50`} />
                        <CardHeader className="relative z-10 pb-4 pt-6">
                          <CardTitle className="text-2xl font-bold leading-tight">{product.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 space-y-6">
                        <p className="leading-relaxed text-muted-foreground">{product.description}</p>
                        
                        <div className="space-y-3">
                          <h4 className="flex items-center gap-2 text-sm font-bold text-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            Key Features:
                          </h4>
                          <ul className="space-y-2.5">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-sm font-bold text-foreground">Applications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                              >
                                {app}
                              </Badge>
                            ))}
                          </div>
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
                    <h3 className="mb-3 text-3xl font-bold">Our Complete Product Range</h3>
                    <p className="text-muted-foreground">Comprehensive solutions for every need</p>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                          <Package className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold">Lift Types</h4>
                      </div>
                      <ul className="space-y-2.5 text-muted-foreground">
                        {["Passenger Lifts", "Industrial/Goods Lift", "Hospital/Stretcher Lifts", "Dumbwaiter/Service Lifts", "Capsule Lifts", "Car Lifts", "Hydraulic Lifts"].map((type, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                            <span>{type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                          <Building2 className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold">Door Options</h4>
                      </div>
                      <ul className="space-y-2.5 text-muted-foreground">
                        {["SS Automatic", "MS Automatic", "Glass Doors", "Swing Doors", "Telescopic/Side Opening Auto", "Collapsible Gates"].map((door, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                            <span>{door}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
              Ready to Choose Your Lift?
            </h2>
            <p className="mb-10 text-xl text-white/95 md:text-2xl">
              Our experts will help you select the perfect lift solution for your needs
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/50 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-primary hover:border-white transition-all duration-300 h-16 px-10 text-lg font-semibold" 
                asChild
              >
                <Link href="/specifications">View Specifications</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
