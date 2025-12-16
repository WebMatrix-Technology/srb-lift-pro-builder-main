"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Cpu, Zap, ArrowRight, Settings, AlertTriangle, ArrowLeft, Sparkles, Gauge } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import {
  defaultMRLBenefits,
  defaultVFDBenefits,
  defaultSafetyFeatures,
} from "@/lib/data";

export default function Technical() {
  const mrlBenefits = defaultMRLBenefits;
  const vfdBenefits = defaultVFDBenefits;
  const safetyFeatures = defaultSafetyFeatures;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-28 md:py-36">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
              <Cpu className="h-4 w-4" />
              Technical Excellence
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Advanced <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="mb-8 text-xl text-white/95 md:text-2xl">
              Cutting-edge lift technology and safety systems
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

      {/* Machine Room Less (MRL) */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-hover/5 opacity-50" />
              <CardHeader className="relative z-10">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover shadow-xl">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold md:text-4xl">Machine Room Less (MRL)</CardTitle>
                    <p className="mt-2 text-muted-foreground">Space-saving technology for modern buildings</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  MRL lifts save valuable building space by integrating most components within the hoistway. The main controller is installed on the top floor next to the landing door, using conventional steel ropes for smooth operation.
                </p>
                
                <div>
                  <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                    <Sparkles className="h-6 w-6 text-primary" />
                    Key Benefits:
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {mrlBenefits.map((benefit, index) => (
                      <div key={index} className="group flex items-start gap-3 rounded-xl bg-gradient-to-br from-primary/5 to-primary-hover/5 p-4 transition-all duration-300 hover:from-primary/10 hover:to-primary-hover/10 hover:shadow-md">
                        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                        <span className="font-medium text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 p-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Traditional</Badge>
                      <h4 className="font-bold">With Machine Room</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        <span>Separate machine room required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        <span>Additional construction cost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        <span>More space consumption</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Modern</Badge>
                      <h4 className="font-bold">Without Machine Room (MRL)</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                        <span>Components integrated in hoistway</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                        <span>Saves construction cost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-green-500" />
                        <span>More design flexibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Integrated Controller */}
      <section className="section-padding bg-gradient-to-b from-muted/30 via-background to-muted/50">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-hover/5 opacity-50" />
              <CardHeader className="relative z-10">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover shadow-xl">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold md:text-4xl">Integrated Serial & Parallel Controller</CardTitle>
                    <p className="mt-2 text-muted-foreground">Advanced control technology</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our intelligent integrated panels feature advanced global technology with serial and parallel communication, sophisticated software, sturdy construction, and long service life. The system integrates various control technologies including frequency conversion, intelligent lift control, and network communication.
                </p>

                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                    <Gauge className="h-5 w-5 text-primary" />
                    System Performance:
                  </h3>
                  <div className="grid gap-3 md:grid-cols-3">
                    {["Single speed, two speed, or Variable Frequency Drive (VFD) operation", "Manual/auto door options", "Error message display modes (LCD/Dot Matrix/7 segment) for quick diagnosis"].map((item, idx) => (
                      <div key={idx} className="rounded-lg bg-gradient-to-br from-primary/5 to-primary-hover/5 p-4">
                        <p className="text-sm font-medium text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                    <Sparkles className="h-6 w-6 text-primary" />
                    Use of VFD Helps In:
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {vfdBenefits.map((benefit, index) => (
                      <div key={index} className="group flex items-start gap-3 rounded-xl bg-gradient-to-br from-primary/5 to-primary-hover/5 p-4 transition-all duration-300 hover:from-primary/10 hover:to-primary-hover/10 hover:shadow-md">
                        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                        <span className="text-sm font-medium text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Safety Features */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              Safety First
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Lift Safety <span className="gradient-text">Features</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive safety systems ensuring maximum protection and peace of mind
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Card className="group relative h-full overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />
                    <CardContent className="relative z-10 p-6">
                      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="mb-3 text-lg font-bold leading-tight">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Salient Features */}
      <section className="section-padding bg-gradient-to-b from-muted/50 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/3 to-primary-hover/5 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold md:text-4xl">Salient Features</CardTitle>
                <p className="mt-2 text-muted-foreground">Advanced engineering and design excellence</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Design & Engineering</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        "Designed & Engineered for smooth, comfortable & quiet ride",
                        "Variable Frequency Drive Systems for precise power control",
                        "Economical operations throughout the lift's life cycle",
                        "Maximum flexibility in car, door, and shaft dimensions",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">Technology & Innovation</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      {[
                        "Future-ready to interface with Next Generation technologies",
                        "Multiple design options for building interiors",
                        "Contact-free sensors for millimeter-precise leveling",
                        "Ensuring safe and seamless movement",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Want to Know More?
            </h2>
            <p className="mb-10 text-xl text-white/95 md:text-2xl">
              Contact our technical team for detailed specifications and consultations
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-16 px-10 text-lg font-semibold" 
              asChild
            >
              <Link href="/contact">
                Contact Technical Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
