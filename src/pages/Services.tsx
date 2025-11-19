import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import installationImg from "@/assets/service-installation.jpg";
import modernizationImg from "@/assets/service-modernization.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import repairImg from "@/assets/service-repair.jpg";
import consultancyImg from "@/assets/service-consultancy.jpg";
import Reveal from "@/components/Reveal";

const Services = () => {
  const services = [
    {
      title: "Lift Installation",
      image: installationImg,
      description:
        "Complete end-to-end lift installation services for new buildings and renovations. Our expert team handles everything from initial consultation and design to installation and commissioning.",
      benefits: [
        "Custom design solutions for your building",
        "Latest technology and safety features",
        "Compliance with all safety regulations",
        "Professional installation by certified technicians",
        "Post-installation support and warranty",
        "Minimal disruption to building operations",
      ],
    },
    {
      title: "Lift Modernisation",
      image: modernizationImg,
      description:
        "Upgrade your existing elevator systems with cutting-edge technology to improve performance, safety, and energy efficiency. Extend the life of your lifts with our comprehensive modernisation solutions.",
      benefits: [
        "Enhanced safety with modern control systems",
        "Improved energy efficiency",
        "Better ride quality and comfort",
        "Updated aesthetics and cabin design",
        "Reduced maintenance costs",
        "Increased property value",
      ],
    },
    {
      title: "Lift Maintenance",
      image: maintenanceImg,
      description:
        "Regular preventive maintenance to ensure your elevators operate smoothly and safely. Our comprehensive maintenance programs minimize downtime and extend equipment life.",
      benefits: [
        "Scheduled preventive maintenance",
        "Thorough safety inspections",
        "Component lubrication and adjustment",
        "Early problem detection",
        "Detailed maintenance reports",
        "Extended equipment lifespan",
      ],
    },
    {
      title: "Lift Repair",
      image: repairImg,
      description:
        "Fast and reliable repair services for all types of elevator issues. Our experienced technicians are available 24/7 to handle emergency breakdowns and ensure minimal downtime.",
      benefits: [
        "24/7 emergency repair service",
        "Rapid response times",
        "Skilled diagnostic capabilities",
        "Genuine spare parts",
        "Comprehensive troubleshooting",
        "Minimal downtime guarantee",
      ],
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      image: maintenanceImg,
      description:
        "Comprehensive AMC packages tailored to your needs. Enjoy peace of mind with regular maintenance, priority support, and cost-effective service plans.",
      benefits: [
        "Regular scheduled maintenance visits",
        "Priority breakdown support",
        "Discounted repair costs",
        "Comprehensive service reports",
        "Budget-friendly annual plans",
        "Predictable maintenance costs",
      ],
    },
    {
      title: "Elevator Consultancy",
      image: consultancyImg,
      description:
        "Expert consultancy services for elevator planning, selection, and project management. We help you make informed decisions for your vertical transportation needs.",
      benefits: [
        "Technical expertise and guidance",
        "Project planning and management",
        "Equipment selection assistance",
        "Compliance and safety consulting",
        "Cost optimization strategies",
        "Long-term maintenance planning",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover py-16 text-white">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-3xl" variant="fade-up">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-lg text-white/90 md:text-xl">
              Complete Lift Solutions: Supply • Installation • Commissioning • Servicing • AMC • Modification
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Reveal key={index} variant="fade-up" delayMs={index * 120}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className={`aspect-square md:aspect-auto ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="flex flex-col justify-center p-6 md:p-10">
                      <h2 className="mb-4 text-2xl font-bold md:text-3xl">{service.title}</h2>
                      <p className="mb-6 text-muted-foreground">{service.description}</p>
                      
                      <div className="mb-6 space-y-2">
                        <h3 className="font-semibold">Key Benefits:</h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild>
                        <Link to="/contact">
                          Request a Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Our Product Range</h2>
            <p className="text-muted-foreground">Elevators for every application</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Reveal variant="fade-up">
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Passenger Lifts</h3>
                <p className="text-sm text-muted-foreground">Microprocessor controlled, smooth and comfortable travel with automatic doors.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={80}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Hospital / Stretcher Lifts</h3>
                <p className="text-sm text-muted-foreground">Hygienic interiors, precise leveling and robust performance for healthcare needs.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={160}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Industrial / Goods Lifts</h3>
                <p className="text-sm text-muted-foreground">Heavy‑duty lifts designed for warehouses and factories; full collective/ selective controls.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={240}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Dumbwaiter / Service Lifts</h3>
                <p className="text-sm text-muted-foreground">Compact lifts for restaurants, hotels and hospitals to move goods efficiently.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={320}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Capsule Lifts</h3>
                <p className="text-sm text-muted-foreground">Architectural highlights with panoramic visibility; various shapes and capacities.</p>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal variant="fade-up" delayMs={400}>
              <Card>
                <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Hydraulic & Car Lifts</h3>
                <p className="text-sm text-muted-foreground">Optimal for specific applications with collapsible/ telescopic doors and smooth operation.</p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Salient & Safety Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Salient Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Designed and engineered for smooth, comfortable and quiet ride</li>
                <li>Variable frequency drives for precise control and energy efficiency</li>
                <li>Economical operations throughout lift life cycle</li>
                <li>Maximum cabin space with optimized shaft and door dimensions</li>
                <li>Compatibility with latest next‑generation technologies</li>
                <li>Multiple design options for interior finishes and ceilings</li>
                <li>Contact‑less sensors and precise leveling for safe movement of passengers and goods</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold">Safety Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Door interlocking and emergency alarm</li>
                <li>Overspeed governor and final limit switch</li>
                <li>Emergency stop switch and fireman switch</li>
                <li>Infrared full‑length door sensors</li>
                <li>Automatic rescue device (ARD) for power failure</li>
                <li>Robust braking and mechanical safety systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Need a Custom Solution?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Contact us to discuss your specific requirements
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/amc">Explore AMC Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;