"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ArrowRight, ArrowLeft, CheckCircle2, Factory, Zap, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function IndustrialGoodsLift() {
  const images = [
    "/images/products/goodslift_1.png",
    "/images/products/goodslift_2.png",
  ];
  const features = [
    "Heavy-duty construction for industrial loads",
    "Large capacity options (500-4000 KG)",
    "Robust steel frame and components",
    "Wide entrance for easy loading",
    "Durable door systems",
    "Industrial-grade safety features",
  ];

  const applications = [
    "Factories and Manufacturing",
    "Warehouses and Storage",
    "Distribution Centers",
    "Industrial Facilities",
    "Loading Docks",
    "Multi-level Production",
  ];

  const specifications = [
    { label: "Capacity", value: "500-4000 KG" },
    { label: "Speed", value: "0.7 m/s" },
    { label: "Entrance Width", value: "1200-3000 mm" },
    { label: "Car Dimensions", value: "Customizable" },
    { label: "Door Type", value: "Heavy-duty Automatic" },
    { label: "Control", value: "Industrial Control System" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-600 via-slate-600 to-gray-700 py-28 md:py-36">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              <Package className="h-4 w-4" />
              Industrial / Goods Lift
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Industrial / <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">Goods Lift</span>
            </h1>
            <p className="mb-8 text-xl text-white/95 md:text-2xl">
              Heavy-duty lifts designed for transporting industrial goods and materials between floor levels
            </p>
            <Button size="lg" className="bg-white text-gray-700 hover:bg-white/90 hover:shadow-xl transition-all duration-300" asChild>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Products
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal variant="fade-up">
              <div className="space-y-4">
                {images.map((imageSrc, index) => (
                  <div key={index} className="relative aspect-video w-full overflow-hidden rounded-2xl">
                    <img src={imageSrc} alt={`Industrial Goods Lift ${index + 1}`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal variant="fade-up" delayMs={100}>
              <Card className="h-full border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Industrial and goods lifts are specifically designed for transferring heavy materials, equipment, and goods between different floor levels in factories, warehouses, and industrial facilities. Built with robust construction to handle demanding industrial applications.
                  </p>
                  <div className="grid gap-4">
                    {specifications.map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-lg bg-primary/5 p-4">
                        <span className="font-semibold text-foreground">{spec.label}:</span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">{spec.value}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-muted/30 via-background to-muted/50">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Key <span className="gradient-text">Features</span></h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                <Card className="group h-full border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-500 to-slate-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-medium text-foreground">{feature}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Industrial <span className="gradient-text">Applications</span></h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => (
              <Reveal key={index} variant="fade-up" delayMs={index * 50}>
                <div className="group flex items-center gap-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary-hover/5 p-6 transition-all duration-300 hover:from-primary/10 hover:to-primary-hover/10 hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-500 to-slate-500 shadow-lg">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-foreground">{app}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-600 via-slate-600 to-gray-700 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Need Industrial Lift Solutions?</h2>
            <p className="mb-10 text-xl text-white/95">Contact us for heavy-duty lift solutions</p>
            <Button size="lg" className="bg-white text-gray-700 hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-16 px-10 text-lg font-semibold" asChild>
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

