"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, ArrowRight, BadgeCheck } from "lucide-react";
import installationImg from "@/assets/service-installation.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import modernizationImg from "@/assets/service-modernization.jpg";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { defaultProjects, defaultProjectCategories } from "@/lib/data";

export default function Projects() {
  // Map image paths to actual imported images
  const imageMap: Record<string, typeof installationImg> = {
    "/assets/service-installation.jpg": installationImg,
    "/assets/service-modernization.jpg": modernizationImg,
    "/assets/service-maintenance.jpg": maintenanceImg,
  };

  // Map projects with actual image imports
  const projects = defaultProjects.map((project) => ({
    ...project,
    image: typeof project.image === "string" && imageMap[project.image]
      ? imageMap[project.image]
      : project.image,
  }));

  const categories = defaultProjectCategories;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <Reveal variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Our Work
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Our <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-white/90 md:text-2xl">
              Showcasing our expertise across various sectors and building types
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Portfolio
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Explore our successful installations and modernisations across different sectors
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={typeof project.image === 'string' ? project.image : project.image.src}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="mb-2 flex items-center gap-2">
                        <BadgeCheck className="h-5 w-5 text-white" />
                        <span className="text-sm font-semibold text-white">{project.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <p className="mb-4 font-semibold text-primary">{project.type}</p>
                    <Button variant="outline" className="w-full group/btn" asChild>
                      <Link href="/contact">
                        View Details
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

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Ready to Start Your Project?</h2>
            <p className="mb-8 text-xl text-white/90">
              Let us help you achieve your elevator installation or modernisation goals
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 h-14 px-8 text-lg font-semibold" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}