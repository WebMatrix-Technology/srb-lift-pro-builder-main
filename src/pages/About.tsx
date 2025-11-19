import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety",
      description: "We prioritize safety above all else, ensuring every installation meets the highest industry standards.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project we undertake.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Our clients trust us for consistent, dependable service and support.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "Staying ahead with the latest elevator technology and best practices.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-hover py-16 text-white">
        <div className="container mx-auto px-4">
          <Reveal className="max-w-3xl" variant="fade-up">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">About SRB ELEVATOR</h1>
            <p className="text-lg text-white/90 md:text-xl">
              Your trusted partner in elevator solutions with years of experience and a commitment to excellence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal variant="fade-right">
              <h2 className="mb-6 text-3xl font-bold">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground">
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
              <h2 className="mb-6 text-3xl font-bold">Our Expertise</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Supply, Installation and Commissioning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Modernisation of existing elevator systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Preventive maintenance, Repairs and AMC services</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Emergency breakdown support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Technical consultancy and project planning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Safety inspections and compliance certification</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Reveal variant="fade-up">
              <Card>
                <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide safe, reliable, and efficient elevator solutions that exceed our clients' expectations while maintaining the highest standards of professionalism and service quality.
                </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="fade-up" delayMs={100}>
              <Card>
                <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and preferred elevator service provider, recognized for innovation, reliability, and customer satisfaction across all sectors we serve.
                </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal variant="fade-up" delayMs={200}>
              <Card>
                <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Our Commitment</h3>
                <p className="text-muted-foreground">
                  Safety-first operations, continuous training of our team, use of quality components, and dedicated customer support define our unwavering commitment to excellence.
                </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={index} variant="zoom-in" delayMs={index * 120}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold">
                <CountUp end={15} suffix="+" />
              </div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">
                <CountUp end={500} suffix="+" />
              </div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">
                <CountUp end={300} suffix="+" />
              </div>
              <div className="text-white/80">Active AMC Clients</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">
                <CountUp end={24} />/<CountUp end={7} />
              </div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;