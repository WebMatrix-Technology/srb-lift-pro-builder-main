"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, Award, TrendingUp, Users, CheckCircle2, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Safety",
      description: "We prioritize safety above all else, ensuring every installation meets the highest industry standards and certifications.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project we undertake with precision and care.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Our clients trust us for consistent, dependable service and support throughout the project lifecycle.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "Staying ahead with the latest elevator technology and best practices in the industry.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const expertise = [
    "Supply, Installation and Commissioning",
    "Modernisation of existing elevator systems",
    "Preventive maintenance, Repairs and AMC services",
    "Emergency breakdown support",
    "Technical consultancy and project planning",
    "Safety inspections and compliance certification",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <Reveal className="max-w-3xl" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              About Us
            </div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              About <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">SRB ELEVATOR</span>
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              Your trusted partner in elevator solutions with years of experience and an unwavering commitment to excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal variant="fade-right">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Who We Are
              </div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Who We Are</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  SRB ELEVATOR is a quality-centric company offering complete lift solutions across residential, commercial, industrial and institutional projects.
                </p>
                <p>
                  We provide Supply, Installation, Commissioning, Servicing, AMC and Modification for lifts of all types including Passenger, Hospital/Stretcher, Industrial/Goods, Dumbwaiter/Service, Capsule and Hydraulic lifts.
                </p>
                <p>
                  Our manufacturing and technical capabilities enable reliable, high‑grade equipment supported by experienced engineers and modern infrastructure.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fade-left">
              <Card className="h-full border-2">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-hover">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Expertise</h2>
                  </div>
                  <ul className="space-y-4">
                    {expertise.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <Reveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Our Foundation
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Mission, Vision & <span className="gradient-text">Commitment</span>
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal variant="fade-up">
              <Card className="group relative h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    To provide safe, reliable, and efficient elevator solutions that exceed our clients' expectations while maintaining the highest standards of professionalism and service quality.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="fade-up" delayMs={100}>
              <Card className="group relative h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    To be the most trusted and preferred elevator service provider, recognized for innovation, reliability, and customer satisfaction across all sectors we serve.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="fade-up" delayMs={200}>
              <Card className="group relative h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">Our Commitment</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    Safety-first operations, continuous training of our team, use of quality components, and dedicated customer support define our unwavering commitment to excellence.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Reveal className="mb-16 text-center" variant="fade-up">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Core Values
            </div>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              The Principles That <span className="gradient-text">Guide Us</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The foundation of everything we do
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={index} variant="zoom-in" delayMs={index * 120}>
                  <Card className="group relative h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                    <CardContent className="p-8 text-center">
                      <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Stats */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-hover to-primary py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <Reveal variant="fade-up">
              <div className="group">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-5xl font-bold text-white md:text-6xl">
                  <CountUp end={15} suffix="+" />
                </div>
                <div className="text-lg text-white/90">Years Experience</div>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delayMs={100}>
              <div className="group">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-5xl font-bold text-white md:text-6xl">
                  <CountUp end={500} suffix="+" />
                </div>
                <div className="text-lg text-white/90">Projects Completed</div>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delayMs={200}>
              <div className="group">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-5xl font-bold text-white md:text-6xl">
                  <CountUp end={300} suffix="+" />
                </div>
                <div className="text-lg text-white/90">Active AMC Clients</div>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delayMs={300}>
              <div className="group">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-5xl font-bold text-white md:text-6xl">
                  <CountUp end={24} />/<CountUp end={7} />
                </div>
                <div className="text-lg text-white/90">Support Available</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}