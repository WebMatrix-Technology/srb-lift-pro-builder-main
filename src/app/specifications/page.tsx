"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Stethoscope, Package, Droplets, ArrowRight, ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Specifications() {
  const passengerSpecs = [
    { person: 4, weight: 272, width: "900", depth: "1000", height: "2100", pit: "1400", oh: "3800" },
    { person: 6, weight: 408, width: "1100", depth: "1000", height: "2100", pit: "1400", oh: "3800" },
    { person: 8, weight: 544, width: "1100", depth: "1400", height: "2200", pit: "1500", oh: "4000" },
    { person: 10, weight: 680, width: "1350", depth: "1400", height: "2200", pit: "1500", oh: "4000" },
    { person: 13, weight: 884, width: "1600", depth: "1400", height: "2300", pit: "1600", oh: "4200" },
    { person: 16, weight: 1088, width: "1600", depth: "1500", height: "2300", pit: "1600", oh: "4200" },
    { person: 20, weight: 1360, width: "1800", depth: "1500", height: "2400", pit: "1700", oh: "4500" },
  ];

  const hospitalSpecs = [
    { person: 15, capacity: 1020, shaftW: "2100", shaftD: "2400", carW: "1600", carD: "2400", entrance: "1100" },
    { person: 20, capacity: 1360, shaftW: "2400", shaftD: "2600", carW: "2000", carD: "2600", entrance: "1100" },
    { person: 26, capacity: 1766, shaftW: "2400", shaftD: "3000", carW: "2000", carD: "3000", entrance: "1100" },
  ];

  const freightSpecs = [
    { load: 500, width: "1500", depth: "1500", entDepth: "1500", entWidth: "1200", mrDepth: "2000", mrHeight: "2200", speed: "0.7 m/s" },
    { load: 1000, width: "2000", depth: "2000", entDepth: "2000", entWidth: "1500", mrDepth: "2500", mrHeight: "2400", speed: "0.7 m/s" },
    { load: 2000, width: "2500", depth: "2500", entDepth: "2500", entWidth: "2000", mrDepth: "3000", mrHeight: "2600", speed: "0.7 m/s" },
    { load: 3000, width: "3000", depth: "3000", entDepth: "3000", entWidth: "2500", mrDepth: "3500", mrHeight: "2800", speed: "0.7 m/s" },
    { load: 4000, width: "3500", depth: "3500", entDepth: "3500", entWidth: "3000", mrDepth: "4000", mrHeight: "3000", speed: "0.7 m/s" },
  ];

  const hydraulicSpecs = [
    { person: 3, capacity: 204, carW: "1100", carF: "1000", shaftW: "1500", shaftD: "1400" },
    { person: 5, capacity: 340, carW: "1100", carF: "1400", shaftW: "1500", shaftD: "1800" },
    { person: 8, capacity: 544, carW: "1350", carF: "1400", shaftW: "1800", shaftD: "1800" },
    { person: 12, capacity: 816, carW: "1600", carF: "1400", shaftW: "2000", shaftD: "1800" },
    { person: 20, capacity: 1360, carW: "1600", carF: "1500", shaftW: "2000", shaftD: "1900" },
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
              <FileText className="h-4 w-4" />
              Technical Specifications
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Product <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">Specifications</span>
            </h1>
            <p className="mb-8 text-xl text-white/95 md:text-2xl">
              Detailed technical specifications for all our lift solutions
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

      {/* Enhanced Quick Navigation */}
      <section className="sticky top-20 z-40 border-b border-border/50 bg-background/95 backdrop-blur-xl py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "passenger", label: "Passenger Lifts", icon: Building2 },
              { id: "hospital", label: "Hospital Lifts", icon: Stethoscope },
              { id: "freight", label: "Freight Lifts", icon: Package },
              { id: "hydraulic", label: "Hydraulic Lifts", icon: Droplets },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group flex items-center gap-2 rounded-xl bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover:shadow-md"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Passenger Lifts Specifications */}
      <section id="passenger" className="section-padding scroll-mt-32 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover shadow-xl">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold md:text-5xl">Passenger Lifts</h2>
                <p className="mt-2 text-lg text-muted-foreground">Specifications for passenger elevator systems</p>
              </div>
            </div>
          </Reveal>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-hover/10">
              <CardTitle className="text-2xl font-bold">Technical Specifications</CardTitle>
              <p className="text-sm text-muted-foreground">All dimensions are in millimeters (mm)</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-primary/10 to-primary-hover/10 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary-hover/15">
                      <TableHead className="font-bold text-foreground">Person</TableHead>
                      <TableHead className="font-bold text-foreground">Weight (KG)</TableHead>
                      <TableHead className="font-bold text-foreground">Width (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Depth (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Height (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Pit (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">O.H. (mm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {passengerSpecs.map((spec, index) => (
                      <TableRow 
                        key={index} 
                        className="transition-colors hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary-hover/5"
                      >
                        <TableCell className="font-semibold text-primary">{spec.person}</TableCell>
                        <TableCell>{spec.weight}</TableCell>
                        <TableCell>{spec.width}</TableCell>
                        <TableCell>{spec.depth}</TableCell>
                        <TableCell>{spec.height}</TableCell>
                        <TableCell>{spec.pit}</TableCell>
                        <TableCell>{spec.oh}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary-hover/10 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> O.H. = Overhead height, Pit = Pit depth. These specifications are standard and can be customized based on building requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital/Stretcher Lifts Specifications */}
      <section id="hospital" className="section-padding scroll-mt-32 bg-gradient-to-b from-muted/50 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover shadow-xl">
                <Stethoscope className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold md:text-5xl">Hospital / Stretcher Lifts</h2>
                <p className="mt-2 text-lg text-muted-foreground">Specifications for medical and healthcare facilities</p>
              </div>
            </div>
          </Reveal>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-hover/10">
              <CardTitle className="text-2xl font-bold">Technical Specifications</CardTitle>
              <p className="text-sm text-muted-foreground">Designed for medical equipment and stretcher transport</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-primary/10 to-primary-hover/10 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary-hover/15">
                      <TableHead className="font-bold text-foreground">Person</TableHead>
                      <TableHead className="font-bold text-foreground">Capacity (KG)</TableHead>
                      <TableHead className="font-bold text-foreground">Shaft-W (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Shaft-D (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Car-W (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Car-D (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Entrance (mm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {hospitalSpecs.map((spec, index) => (
                      <TableRow 
                        key={index} 
                        className="transition-colors hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary-hover/5"
                      >
                        <TableCell className="font-semibold text-primary">{spec.person}</TableCell>
                        <TableCell>{spec.capacity}</TableCell>
                        <TableCell>{spec.shaftW}</TableCell>
                        <TableCell>{spec.shaftD}</TableCell>
                        <TableCell>{spec.carW}</TableCell>
                        <TableCell>{spec.carD}</TableCell>
                        <TableCell>{spec.entrance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary-hover/10 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Features:</strong> Hygienic interiors, precise leveling, robust performance, and easy-to-clean materials. Wide cabins accommodate stretchers and medical equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Freight/Goods Lifts Specifications */}
      <section id="freight" className="section-padding scroll-mt-32 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover shadow-xl">
                <Package className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold md:text-5xl">Freight / Goods Lifts</h2>
                <p className="mt-2 text-lg text-muted-foreground">Specifications for industrial and warehouse applications</p>
              </div>
            </div>
          </Reveal>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-hover/10">
              <CardTitle className="text-2xl font-bold">Technical Specifications</CardTitle>
              <p className="text-sm text-muted-foreground">Heavy-duty lifts for industrial goods transportation</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-primary/10 to-primary-hover/10 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary-hover/15">
                      <TableHead className="font-bold text-foreground">Load (KG)</TableHead>
                      <TableHead className="font-bold text-foreground">Lift Wall Width (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Car Inside Depth (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Entrance Depth (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Entrance Width (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Machine Room Depth (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Machine Room Height (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Speed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {freightSpecs.map((spec, index) => (
                      <TableRow 
                        key={index} 
                        className="transition-colors hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary-hover/5"
                      >
                        <TableCell className="font-semibold text-primary">{spec.load}</TableCell>
                        <TableCell>{spec.width}</TableCell>
                        <TableCell>{spec.depth}</TableCell>
                        <TableCell>{spec.entDepth}</TableCell>
                        <TableCell>{spec.entWidth}</TableCell>
                        <TableCell>{spec.mrDepth}</TableCell>
                        <TableCell>{spec.mrHeight}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {spec.speed}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary-hover/10 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Applications:</strong> Designed for transferring industrial goods between floor levels of factories and storage facilities. Suitable for multilevel store buildings and warehouses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hydraulic Lifts Specifications */}
      <section id="hydraulic" className="section-padding scroll-mt-32 bg-gradient-to-b from-muted/50 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover shadow-xl">
                <Droplets className="h-10 w-10 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold md:text-5xl">Hydraulic Lifts</h2>
                <p className="mt-2 text-lg text-muted-foreground">Specifications for hydraulic elevator systems</p>
              </div>
            </div>
          </Reveal>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-hover/10">
              <CardTitle className="text-2xl font-bold">Technical Specifications</CardTitle>
              <p className="text-sm text-muted-foreground">Ultra-smooth operation with no pit or headroom requirements</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-primary/10 to-primary-hover/10 hover:bg-gradient-to-r hover:from-primary/15 hover:to-primary-hover/15">
                      <TableHead className="font-bold text-foreground">Person</TableHead>
                      <TableHead className="font-bold text-foreground">Capacity (KG)</TableHead>
                      <TableHead className="font-bold text-foreground">Car-W (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Car-F (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Shaft-W (mm)</TableHead>
                      <TableHead className="font-bold text-foreground">Shaft-D (mm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {hydraulicSpecs.map((spec, index) => (
                      <TableRow 
                        key={index} 
                        className="transition-colors hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary-hover/5"
                      >
                        <TableCell className="font-semibold text-primary">{spec.person}</TableCell>
                        <TableCell>{spec.capacity}</TableCell>
                        <TableCell>{spec.carW}</TableCell>
                        <TableCell>{spec.carF}</TableCell>
                        <TableCell>{spec.shaftW}</TableCell>
                        <TableCell>{spec.shaftD}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary-hover/10 p-6 backdrop-blur-sm">
              <h4 className="mb-3 flex items-center gap-2 font-bold">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Key Features:
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Ultra-smooth and quiet operation", "No pit or headroom required", "Single-phase power operation", "Reliable hydraulic system"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary-hover/10 p-6 backdrop-blur-sm">
              <h4 className="mb-3 flex items-center gap-2 font-bold">
                <Droplets className="h-5 w-5 text-primary" />
                Operation:
              </h4>
              <p className="text-sm text-muted-foreground">
                Hydraulic lifts operate using oil pressure to move a piston upwards and gravitational force for lowering. Perfect for low-rise buildings and residential complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Information Section */}
      <section className="section-padding bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/3 to-primary-hover/5 shadow-xl">
              <CardContent className="p-10">
                <div className="mb-8 text-center">
                  <h3 className="mb-3 text-3xl font-bold">Important Notes</h3>
                  <p className="text-muted-foreground">Understanding our specifications</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3 rounded-xl bg-background/80 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold">Custom Specifications</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      All specifications can be customized based on your building requirements and space constraints. Contact us for custom solutions tailored to your specific needs.
                    </p>
                  </div>
                  <div className="space-y-3 rounded-xl bg-background/80 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                        <CheckCircle2 className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold">Standards Compliance</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      All lifts are designed and manufactured according to industry norms and safety standards, ensuring maximum safety and reliability for all applications.
                    </p>
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
              Need Custom Specifications?
            </h2>
            <p className="mb-10 text-xl text-white/95 md:text-2xl">
              Our technical team can provide detailed specifications tailored to your specific requirements
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-16 px-10 text-lg font-semibold" 
                asChild
              >
                <Link href="/contact">
                  Request Custom Specs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/50 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-primary hover:border-white transition-all duration-300 h-16 px-10 text-lg font-semibold" 
                asChild
              >
                <Link href="/products">View Product Catalog</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
