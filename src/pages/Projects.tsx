import { Card, CardContent } from "@/components/ui/card";
import installationImg from "@/assets/service-installation.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";

const Projects = () => {
  const projects = [
    { title: "Corporate Tower A", location: "Downtown District", type: "Commercial Installation", image: installationImg },
    { title: "Residential Complex B", location: "Suburban Area", type: "Complete Modernisation", image: maintenanceImg },
    { title: "Shopping Mall C", location: "City Center", type: "Multiple Lift Installation", image: installationImg },
    { title: "Office Building D", location: "Business Park", type: "AMC & Maintenance", image: maintenanceImg },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-primary to-primary-hover py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Projects</h1>
          <p className="text-lg text-white/90 md:text-xl">Showcasing our expertise across various sectors</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <img src={project.image} alt={project.title} className="aspect-video w-full object-cover" />
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{project.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;