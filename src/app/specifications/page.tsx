"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Stethoscope, Package, Droplets, Download, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Technical Specifications
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Product <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Specifications</span>
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Detailed technical specifications for all our lift solutions
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="border-b bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#passenger" className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
              Passenger Lifts
            </a>
            <a href="#hospital" className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
              Hospital Lifts
            </a>
            <a href="#freight" className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
              Freight Lifts
            </a>
            <a href="#hydraulic" className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
              Hydraulic Lifts
            </a>
          </div>
        </div>
      </section>

      {/* Passenger Lifts Specifications */}
      <section id="passenger" className="section-padding scroll-mt-20">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold md:text-5xl">Passenger Lifts</h2>
                <p className="mt-2 text-muted-foreground">Specifications for passenger elevator systems</p>
              </div>
            </div>
          </Reveal>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Technical Specifications</CardTitle>
              <p className="text-sm text-muted-foreground">All dimensions are in millimeters (mm)</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/10">
                      <TableHead className="font-bold">Person</TableHead>
                      <TableHead className="font-bold">Weight (KG)</TableHead>
                      <TableHead className="font-bold">Width (mm)</TableHead>
                      <TableHead className="font-bold">Depth (mm)</TableHead>
                      <TableHead className="font-bold">Height (mm)</TableHead>
                      <TableHead className="font-bold">Pit (mm)</TableHead>
                      <TableHead className="font-bold">O.H. (mm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {passengerSpecs.map((spec, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-semibold">{spec.person}</TableCell>
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

          <div className="mt-6 rounded-lg bg-primary/5 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> O.H. = Overhead height, Pit = Pit depth. These specifications are standard and can be customized based on building requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Hospital/Stretcher Lifts Specifications */}
      <section id="hospital" className="section-padding bg-muted/50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold md:text-5xl">Hospital / Stretcher Lifts</h2>
                <p className="mt-2 text-muted-foreground">Specifications for medical and healthcare facilities</p>
              </div>
            </div>
          </Reveal>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Technical Specifications</CardTitle>
              <p className="text-sm text-muted-foreground">Designed for medical equipment and stretcher transport</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/10">
                      <TableHead className="font-bold">Person</TableHead>
                      <TableHead className="font-bold">Capacity (KG)</TableHead>
                      <TableHead className="font-bold">Shaft-W (mm)</TableHead>
                      <TableHead className="font-bold">Shaft-D (mm)</TableHead>
                      <TableHead className="font-bold">Car-W (mm)</TableHead>
                      <TableHead className="font-bold">Car-D (mm)</TableHead>
                      <TableHead className="font-bold">Entrance (mm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {hospitalSpecs.map((spec, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-semibold">{spec.person}</TableCell>
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

          <div className="mt-6 rounded-lg bg-primary/5 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Features:</strong> Hygienic interiors, precise leveling, robust performance, and easy-to-clean materials. Wide cabins accommodate stretchers and medical equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Freight/Goods Lifts Specifications */}
      <section id="freight" className="section-padding scroll-mt-20">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                <Package className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold md:text-5xl">Freight / Goods Lifts</h2>
                <p className="mt-2 text-muted-foreground">Specifications for industrial and warehouse applications</p>
              </div>
            </div>
          </Reveal>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Technical Specifications</CardTitle>
              <p className="text-sm text-muted-foreground">Heavy-duty lifts for industrial goods transportation</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/10">
                      <TableHead className="font-bold">Load (KG)</TableHead>
                      <TableHead className="font-bold">Lift Wall Width (mm)</TableHead>
                      <TableHead className="font-bold">Car Inside Depth (mm)</TableHead>
                      <TableHead className="font-bold">Entrance Depth (mm)</TableHead>
                      <TableHead className="font-bold">Entrance Width (mm)</TableHead>
                      <TableHead className="font-bold">Machine Room Depth (mm)</TableHead>
                      <TableHead className="font-bold">Machine Room Height (mm)</TableHead>
                      <TableHead className="font-bold">Speed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {freightSpecs.map((spec, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-semibold">{spec.load}</TableCell>
                        <TableCell>{spec.width}</TableCell>
                        <TableCell>{spec.depth}</TableCell>
                        <TableCell>{spec.entDepth}</TableCell>
                        <TableCell>{spec.entWidth}</TableCell>
                        <TableCell>{spec.mrDepth}</TableCell>
                        <TableCell>{spec.mrHeight}</TableCell>
                        <TableCell>{spec.speed}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 rounded-lg bg-primary/5 p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Applications:</strong> Designed for transferring industrial goods between floor levels of factories and storage facilities. Suitable for multilevel store buildings and warehouses.
            </p>
          </div>
        </div>
      </section>

      {/* Hydraulic Lifts Specifications */}
      <section id="hydraulic" className="section-padding bg-muted/50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover shadow-lg">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold md:text-5xl">Hydraulic Lifts</h2>
                <p className="mt-2 text-muted-foreground">Specifications for hydraulic elevator systems</p>
              </div>
            </div>
          </Reveal>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Technical Specifications</CardTitle>
              <p className="text-sm text-muted-foreground">Ultra-smooth operation with no pit or headroom requirements</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/10">
                      <TableHead className="font-bold">Person</TableHead>
                      <TableHead className="font-bold">Capacity (KG)</TableHead>
                      <TableHead className="font-bold">Car-W (mm)</TableHead>
                      <TableHead className="font-bold">Car-F (mm)</TableHead>
                      <TableHead className="font-bold">Shaft-W (mm)</TableHead>
                      <TableHead className="font-bold">Shaft-D (mm)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {hydraulicSpecs.map((spec, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-semibold">{spec.person}</TableCell>
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
            <div className="rounded-lg bg-primary/5 p-4">
              <h4 className="mb-2 font-semibold">Key Features:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Ultra-smooth and quiet operation</li>
                <li>• No pit or headroom required</li>
                <li>• Single-phase power operation</li>
                <li>• Reliable hydraulic system</li>
              </ul>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h4 className="mb-2 font-semibold">Operation:</h4>
              <p className="text-sm text-muted-foreground">
                Hydraulic lifts operate using oil pressure to move a piston upwards and gravitational force for lowering. Perfect for low-rise buildings and residential complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Reveal variant="fade-up">
            <Card className="border-2 bg-gradient-to-br from-primary/5 to-primary-hover/5">
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-bold">Important Notes</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Custom Specifications:</h4>
                    <p className="text-sm text-muted-foreground">
                      All specifications can be customized based on your building requirements and space constraints. Contact us for custom solutions.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Standards Compliance:</h4>
                    <p className="text-sm text-muted-foreground">
                      All lifts are designed and manufactured according to industry norms and safety standards, ensuring maximum safety and reliability.
                    </p>
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
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Need Custom Specifications?</h2>
            <p className="mb-8 text-xl text-white/90">
              Our technical team can provide detailed specifications tailored to your specific requirements
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
                <Link href="/contact">
                  Request Custom Specs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
                <Link href="/products">
                  View Product Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
