import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const AMC = () => {
  const plans = [
    { name: "Basic", price: "₹5,000 - ₹10,000", visits: "Quarterly visits", features: ["Regular maintenance", "Basic inspections", "Phone support"] },
    { name: "Standard", price: "₹12,000 - ₹20,000", visits: "Bi-monthly visits", features: ["Preventive maintenance", "Priority repairs", "Discounted parts", "24/7 support"] },
    { name: "Premium", price: "₹25,000 - ₹40,000", visits: "Monthly visits", features: ["Comprehensive coverage", "Free repairs", "Emergency support", "Component replacement"] },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-primary to-primary-hover py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Annual Maintenance Contracts</h1>
          <p className="text-lg text-white/90">Protect your investment with comprehensive AMC plans</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-4 text-3xl font-bold text-primary">{plan.price}</p>
                  <p className="mb-6 text-sm text-muted-foreground">{plan.visits}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AMC;