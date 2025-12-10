"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Cpu, Zap, ArrowRight, Settings, AlertTriangle } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function Technical() {
  const mrlBenefits = [
    "Latest Technology in The World",
    "Smoothest Travel",
    "Absolute Freedom in Building Designs",
    "Substantial Saving on Electricity Cost",
    "Save The Construction Cost",
    "More Safe",
  ];

  const vfdBenefits = [
    "Setting/altering any parameters at site",
    "All input signals NO/NC selection can be set on site",
    "Power on reset run to ground floor is not required",
    "All inputs and outputs are user programmable",
    "All parameters can be password protected",
    "Providing under voltage, over voltage and earth protection for controller",
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "Automate Rescue Device (ARD)",
      description: "Advanced system for passenger rescue during power failure, ensuring safe evacuation without manual intervention.",
    },
    {
      icon: AlertTriangle,
      title: "Infrared Full Length Door Sensors",
      description: "Detect objects in the door's path, preventing accidents and ensuring safe operation.",
    },
    {
      icon: CheckCircle2,
      title: "Door Interlocking",
      description: "Prevents elevator movement when doors are open, ensuring maximum safety.",
    },
    {
      icon: Shield,
      title: "Over Speed Governor",
      description: "Automatically activates if elevator exceeds safe speed limits.",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Alarm",
      description: "Allows passengers to alert in case of emergency situations.",
    },
    {
      icon: Settings,
      title: "Emergency Stop Switch",
      description: "Immediate stop capability for emergency situations.",
    },
    {
      icon: Shield,
      title: "Fireman Switch",
      description: "Special mode for fire service operations.",
    },
    {
      icon: CheckCircle2,
      title: "DBG Mechanical Safety",
      description: "Backup mechanical safety system for ultimate protection.",
    },
    {
      icon: AlertTriangle,
      title: "Final Limit Switch",
      description: "Prevents over-travel beyond safe limits.",
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
              Technical Excellence
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Advanced <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Cutting-edge lift technology and safety systems
            </p>
          </Reveal>
        </div>
      </section>

      {/* Machine Room Less (MRL) */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold md:text-4xl">Machine Room Less (MRL)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  MRL lifts save valuable building space by integrating most components within the hoistway. The main controller is installed on the top floor next to the landing door, using conventional steel ropes for smooth operation.
                </p>
                
                <div>
                  <h3 className="mb-4 text-xl font-bold">Key Benefits:</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {mrlBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 rounded-lg bg-muted/50 p-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold">With Machine Room</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Separate machine room required</li>
                      <li>• Additional construction cost</li>
                      <li>• More space consumption</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Without Machine Room (MRL)</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Components integrated in hoistway</li>
                      <li>• Saves construction cost</li>
                      <li>• More design flexibility</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Integrated Controller */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold md:text-4xl">Integrated Serial & Parallel Controller</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our intelligent integrated panels feature advanced global technology with serial and parallel communication, sophisticated software, sturdy construction, and long service life. The system integrates various control technologies including frequency conversion, intelligent lift control, and network communication.
                </p>

                <div>
                  <h3 className="mb-4 text-xl font-bold">System Performance:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Single speed, two speed, or Variable Frequency Drive (VFD) operation</li>
                    <li>• Manual/auto door options</li>
                    <li>• Error message display modes (LCD/Dot Matrix/7 segment) for quick diagnosis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-bold">Use of VFD Helps In:</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {vfdBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{benefit}</span>
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
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
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
                  <Card className="group h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
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
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl font-bold md:text-4xl">Salient Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-xl font-bold">Design & Engineering</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Designed & Engineered for smooth, comfortable & quiet ride</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Variable Frequency Drive Systems for precise power control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Economical operations throughout the lift's life cycle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Maximum flexibility in car, door, and shaft dimensions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-bold">Technology & Innovation</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Future-ready to interface with Next Generation technologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Multiple design options for building interiors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Contact-free sensors for millimeter-precise leveling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Ensuring safe and seamless movement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Want to Know More?</h2>
            <p className="mb-8 text-xl text-white/90">
              Contact our technical team for detailed specifications and consultations
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
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
