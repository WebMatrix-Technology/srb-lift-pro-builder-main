"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import heroImage from "@/assets/hero-elevator.jpg";
import installationImg from "@/assets/service-installation.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import modernizationImg from "@/assets/service-modernization.jpg";
import Reveal from "@/components/Reveal";
import ElevatorScene from "@/components/ElevatorScene";
import HeroDoors from "@/components/HeroDoors";
import CountUp from "@/components/CountUp";
import { defaultServices, defaultFeatures, defaultTestimonials, defaultStats } from "@/lib/data";

export default function Home() {
  // Map image paths to actual imported images
  const imageMap: Record<string, typeof installationImg> = {
    "/assets/service-installation.jpg": installationImg,
    "/assets/service-modernization.jpg": modernizationImg,
    "/assets/service-maintenance.jpg": maintenanceImg,
  };

  // Map services with actual image imports
  const services = defaultServices.slice(0, 3).map((service) => ({
    ...service,
    image: typeof service.image === "string" && imageMap[service.image]
      ? imageMap[service.image]
      : service.image,
  }));

  const features = defaultFeatures;
  const testimonials = defaultTestimonials;
  const stats = defaultStats;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("toggle-hero-doors"));
          }
        }}
      >
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${typeof heroImage === 'string' ? heroImage : heroImage.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-primary-hover/40" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        <HeroDoors enableAutoCycle={false} />
        
        <div className="container relative z-20 mx-auto grid grid-cols-1 items-center gap-12 px-4 py-24 lg:grid-cols-2 lg:py-32">
          <Reveal className="max-w-2xl" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Trusted by 500+ Projects
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Elevating Your
              <span className="block bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                Building's Future
              </span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl lg:text-2xl">
              Professional lift installation, repair, modernisation, and AMC services for residential, commercial, and industrial buildings.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 h-14 px-8 text-lg font-semibold"
                asChild
              >
                <a href="tel:+917705888341">Call Now</a>
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="mb-1 text-3xl font-bold text-white">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal variant="zoom-in" className="justify-self-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary to-primary-hover opacity-20 blur-2xl" />
              <div className="relative rounded-2xl bg-white/10 p-4 backdrop-blur-md">
                <ElevatorScene />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Overview - Enhanced */}
      <section className="section-padding bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Our Services
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Complete <span className="gradient-text">Elevator Solutions</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive elevator solutions tailored to your specific needs with cutting-edge technology
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 transition-opacity duration-300 group-hover:opacity-20`} />
                      <img
                        src={typeof service.image === 'string' ? service.image : service.image.src}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                      <p className="mb-4 text-muted-foreground leading-relaxed">{service.description}</p>
                      <Button variant="ghost" className="group/btn w-full justify-between" asChild>
                        <Link href="/services">
                          Learn More
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-12 text-center" variant="fade-up">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-hover hover:shadow-xl transition-all duration-300" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Why Choose Us
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Excellence in Every <span className="gradient-text">Aspect</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We deliver unmatched quality and service in every project we undertake
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={index} variant="zoom-in" delayMs={index * 120}>
                  <Card className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                    <div className={`absolute top-0 h-1 w-full bg-gradient-to-r ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                    <CardContent className="p-8 text-center">
                      <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-hover to-primary py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 text-center md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <div className="group">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="mb-2 text-5xl font-bold text-white md:text-6xl">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-lg text-white/90">{stat.label}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Client Testimonials
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Trusted by businesses and individuals across the region
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={index} variant="fade-up" delayMs={index * 120}>
                <Card className="group relative h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="mb-4 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-6 text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4 text-center">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300 h-14 px-8 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 h-14 px-8 text-lg font-semibold"
                asChild
              >
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}