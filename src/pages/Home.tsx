import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Shield, Clock, Users, Wrench, Building2, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-elevator.jpg";
import installationImg from "@/assets/service-installation.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import modernizationImg from "@/assets/service-modernization.jpg";
import Reveal from "@/components/Reveal";
import ElevatorScene from "@/components/ElevatorScene";
import HeroDoors from "@/components/HeroDoors";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Lift Installation",
      description: "Professional installation of modern elevator systems for all building types.",
      image: installationImg,
    },
    {
      icon: Cog,
      title: "Lift Modernisation",
      description: "Upgrade your existing lifts with the latest technology and safety features.",
      image: modernizationImg,
    },
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance and rapid repair services to keep your lifts running.",
      image: maintenanceImg,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Industry-leading safety standards and certifications",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency support and rapid response",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained and certified technicians",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assured",
      description: "Premium components and proven reliability",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "Commercial Tower",
      text: "Excellent service! SRB ELEVATOR installed our building's elevator system efficiently and professionally.",
    },
    {
      name: "Sarah Johnson",
      company: "Residential Complex",
      text: "Their AMC service has been outstanding. Quick response times and reliable maintenance.",
    },
    {
      name: "Michael Brown",
      company: "Office Building",
      text: "Modernisation of our old lift was seamless. Highly recommend their expertise!",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        onClick={() => window.dispatchEvent(new Event("toggle-hero-doors"))}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <HeroDoors enableAutoCycle={false} />
        </div>
        
        <div className="container relative z-20 mx-auto grid grid-cols-1 items-center gap-8 px-4 py-24 md:grid-cols-2 md:py-32">
          <Reveal className="max-w-2xl" variant="fade-up">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Reliable Elevator Solutions for Every Building
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Professional lift installation, repair, modernisation, and AMC services for residential, commercial, and industrial buildings.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:+917705888341">Call Now</a>
              </Button>
            </div>
          </Reveal>
          <Reveal variant="zoom-in" className="justify-self-center">
            <ElevatorScene />
          </Reveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive elevator solutions tailored to your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={index} variant="fade-up" delayMs={index * 100}>
                  <Card className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Icon className="mb-4 h-8 w-8 text-primary" />
                      <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose SRB ELEVATOR?</h2>
            <p className="text-lg text-muted-foreground">
              Excellence in every aspect of elevator services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={index} variant="zoom-in" delayMs={index * 120}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Trusted by businesses across the region
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={index} variant="fade-up" delayMs={index * 120}>
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-4 text-muted-foreground">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-white/90">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/amc">Learn About AMC</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;