"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DoorOpen, ArrowRight, ArrowLeft, CheckCircle2, Factory, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function CollapsibleGates() {
  const image = "/images/doors/ms_collapsible_door.png";
  const features = [
    "Robust industrial design",
    "High visibility",
    "Industrial grade construction",
    "Secure operation",
    "Diamond lattice pattern",
    "Durable materials",
  ];

  const applications = [
    "Industrial Facilities",
    "Warehouses",
    "Factories",
    "Loading Docks",
    "Industrial Buildings",
    "Heavy-Duty Applications",
  ];

  const specifications = [
    { label: "Type", value: "Collapsible Gate" },
    { label: "Pattern", value: "Diamond Lattice" },
    { label: "Design", value: "Industrial Grade" },
    { label: "Visibility", value: "High" },
    { label: "Security", value: "High" },
    { label: "Durability", value: "Robust" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-green-600 to-teal-700 py-28 md:py-36">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              <DoorOpen className="h-4 w-4" />
              Collapsible Gates
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Collapsible <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">Gates</span>
            </h1>
            <p className="mb-8 text-xl text-white/95 md:text-2xl">
              Gate-like door with diamond lattice pattern, ideal for industrial applications. Robust design with high visibility and security.
            </p>
            <Button size="lg" className="bg-white text-teal-700 hover:bg-white/90 hover:shadow-xl transition-all duration-300" asChild>
              <Link href="/landing-doors">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Landing Doors
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal variant="fade-up">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-muted/20">
                <img src={image} alt="Collapsible Gate" className="h-full w-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </Reveal>
            <Reveal variant="fade-up" delayMs={100}>
              <Card className="h-full border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Collapsible gates feature a distinctive diamond lattice pattern, making them ideal for industrial applications. These robust gates offer high visibility, secure operation, and industrial-grade construction, perfect for warehouses, factories, and heavy-duty environments.
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
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-green-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-green-500 shadow-lg">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-semibold text-foreground">{app}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-green-600 to-teal-700 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Need Collapsible Gates?</h2>
            <p className="mb-10 text-xl text-white/95">Contact us for industrial gate solutions</p>
            <Button size="lg" className="bg-white text-teal-700 hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-16 px-10 text-lg font-semibold" asChild>
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

