import {
  Building2,
  Cog,
  Wrench,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  Star,
  TrendingUp,
  Package,
  Car,
  Droplets,
  Sparkles,
  Stethoscope,
  Factory,
  DoorOpen,
  Target,
  Award,
  Eye,
  AlertTriangle,
  Phone,
  Mail,
  MapPin,
  LayoutDashboard,
  Settings as SettingsIcon,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  type LucideIcon,
} from "lucide-react";
import type {
  Service,
  Feature,
  Testimonial,
  Stat,
  ProductType,
  DoorType,
  Project,
  Value,
  PassengerSpec,
  HospitalSpec,
  FreightSpec,
  HydraulicSpec,
  SafetyFeature,
  ContactMethod,
  AdminSidebarItem,
  NavigationLink,
  SocialLink,
  TeamMember,
  DesignImage,
} from "./types";

/**
 * Default services data
 */
export const defaultServices: Service[] = [
  {
    title: "Lift Installation",
    image: "/assets/service-installation.jpg",
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
    color: "from-blue-500 to-blue-600",
    icon: Building2,
  },
  {
    title: "Lift Modernisation",
    image: "/assets/service-modernization.jpg",
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
    color: "from-purple-500 to-purple-600",
    icon: Cog,
  },
  {
    title: "Lift Maintenance",
    image: "/images/services/Lift_maintainace.jpeg",
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
    color: "from-green-500 to-green-600",
    icon: Wrench,
  },
  {
    title: "Lift Repair",
    image: "/assets/service-repair.jpg",
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
    color: "from-red-500 to-red-600",
    icon: Wrench,
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    image: "/images/services/AMC.png",
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
    color: "from-green-500 to-green-600",
    icon: Cog,
  },
  {
    title: "Elevator Consultancy",
    image: "/assets/service-consultancy.jpg",
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
    color: "from-indigo-500 to-indigo-600",
    icon: Building2,
  },
];

/**
 * Default features data
 */
export const defaultFeatures: Feature[] = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Industry-leading safety standards and certifications ensuring maximum protection",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock emergency support and rapid response for all your needs",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Highly trained and certified technicians with years of experience",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assured",
    description: "Premium components and proven reliability in every installation",
    gradient: "from-orange-500 to-red-500",
  },
];

/**
 * Default testimonials data
 */
export const defaultTestimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    company: "Commercial Tower",
    text: "Excellent service! SRB ELEVATOR installed our building's elevator system efficiently and professionally. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Residential Complex",
    text: "Their AMC service has been outstanding. Quick response times and reliable maintenance. Very satisfied with their work.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Office Building",
    text: "Modernisation of our old lift was seamless. The team was professional and the results exceeded our expectations!",
    rating: 5,
  },
];

/**
 * Default stats data
 */
export const defaultStats: Stat[] = [
  { label: "Years Experience", value: 8, suffix: "+", icon: TrendingUp },
  { label: "Projects Completed", value: 300, suffix: "+", icon: Building2 },
  { label: "Active AMC Clients", value: 147, suffix: "+", icon: Users },
  { label: "Support Available", value: 24, suffix: "/7", icon: Clock },
];

/**
 * Default product types data
 */
export const defaultProductTypes: ProductType[] = [
  {
    icon: Package,
    title: "Dumbwaiter Lifts",
    slug: "dumbwaiter-service-lifts",
    description:
      "Perfect for hotels, restaurants, banks, shopping centers, libraries, laboratories, and laundries. Used for delivering food, drinks, tableware, dairy products, documents, medicine, books, and instruments.",
    features: [
      "Stainless steel construction for heat and moisture resistance",
      "Custom design options",
      "Compact and space-efficient",
      "Ideal for multi-level facilities",
    ],
    applications: [
      "Hotels",
      "Restaurants",
      "Hospitals",
      "Libraries",
      "Shopping Centers",
    ],
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    bgGradient: "from-blue-50 to-cyan-50",
    image: "/images/products/dumbwaiter_1.png",
  },
  {
    icon: Car,
    title: "Car Lifts",
    slug: "car-lifts",
    description:
      "Designed for moving cars in condominiums, showrooms, garages, and homes. Compact, easy-to-use basement/rooftop parking solutions for crowded and high-density spaces.",
    features: [
      "Cost-effective space-saving solution",
      "Design flexibility",
      "Suitable for high-density areas",
      "Easy operation and maintenance",
    ],
    applications: [
      "Residential Buildings",
      "Car Showrooms",
      "Parking Garages",
      "Private Homes",
    ],
    gradient: "from-purple-500 via-pink-500 to-purple-600",
    bgGradient: "from-purple-50 to-pink-50",
    image: "/images/products/car_lift_1.png",
  },
  {
    icon: Droplets,
    title: "Hydraulic Lifts",
    slug: "hydraulic-lifts",
    description:
      "Operate using oil pressure to move a piston upwards and gravitational force for lowering. Ultra-smooth and quiet ride quality with no pit or headroom requirements.",
    features: [
      "Ultra-smooth and quiet operation",
      "No pit or headroom required",
      "Single-phase power operation",
      "Reliable hydraulic system",
    ],
    applications: [
      "Low-rise Buildings",
      "Residential Complexes",
      "Small Commercial Spaces",
    ],
    gradient: "from-green-500 via-emerald-500 to-green-600",
    bgGradient: "from-green-50 to-emerald-50",
    image: "/images/doors/hydrolic_lift_1.png",
  },
  {
    icon: Sparkles,
    title: "Capsule Lifts",
    slug: "capsule-lifts",
    description:
      "Architectural highlights for prestigious buildings, offering high visibility and aesthetically attractive interiors. Available in 3-side glass, 5-side glass, and round shapes.",
    features: [
      "High visibility panoramic design",
      "Multiple shape options",
      "Aesthetically attractive",
      "Perfect for architectural statements",
    ],
    applications: [
      "Shopping Malls",
      "Commercial Complexes",
      "Hospitality Industry",
      "Luxury Buildings",
    ],
    gradient: "from-orange-500 via-red-500 to-orange-600",
    bgGradient: "from-orange-50 to-red-50",
    image: "/images/products/capsulelift_1.png",
  },
  {
    icon: Building2,
    title: "Passenger Lifts",
    slug: "passenger-lifts",
    description:
      "Designed for carrying people with electric motor power. Features comfort, elegance, speed, safety, and customizable features for various building types.",
    features: [
      "Microprocessor controlled",
      "Smooth and comfortable travel",
      "Automatic doors",
      "Multiple capacity options",
    ],
    applications: [
      "Office Buildings",
      "Residential Complexes",
      "Commercial Spaces",
    ],
    gradient: "from-indigo-500 via-blue-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-blue-50",
    image: "/images/products/passengerlift_1.png",
  },
  {
    icon: Factory,
    title: "Industrial / Goods Lift",
    slug: "industrial-goods-lift",
    description:
      "Heavy-duty lifts designed for transporting industrial goods and materials between floor levels. Built with robust construction to handle demanding industrial applications.",
    features: [
      "Heavy-duty construction",
      "Large capacity options (500-4000 KG)",
      "Robust steel frame",
      "Industrial-grade safety",
    ],
    applications: [
      "Factories",
      "Warehouses",
      "Distribution Centers",
      "Industrial Facilities",
    ],
    gradient: "from-gray-500 via-slate-500 to-gray-600",
    bgGradient: "from-gray-50 to-slate-50",
    image: "/images/products/goodslift_1.png",
  },
  {
    icon: Stethoscope,
    title: "Hospital / Stretcher Lifts",
    slug: "hospital-stretcher-lifts",
    description:
      "Designed specifically for hospitals with emphasis on reliability, safety, hygiene, and easy-to-clean materials. Wide cabins accommodate stretchers and medical equipment.",
    features: [
      "Hygienic interiors",
      "Precise leveling",
      "Robust performance",
      "Easy-to-clean materials",
    ],
    applications: [
      "Hospitals",
      "Medical Facilities",
      "Clinics",
      "Healthcare Centers",
    ],
    gradient: "from-teal-500 via-cyan-500 to-teal-600",
    bgGradient: "from-teal-50 to-cyan-50",
    image: "/images/products/hospitallift_1.png",
  },
];

/**
 * Default door types data
 */
export const defaultDoorTypes: DoorType[] = [
  // {
  //   name: "SS Automatic",
  //   slug: "ss-automatic",
  //   type: "Automatic",
  //   description:
  //     "Stainless steel automatic doors with sleek finish and smooth operation. Perfect for modern buildings requiring premium aesthetics.",
  //   features: [
  //     "Premium stainless steel",
  //     "Smooth automatic operation",
  //     "Corrosion resistant",
  //     "Easy maintenance",
  //   ],
  //   icon: Shield,
  //   gradient: "from-slate-500 to-slate-600",
  //   bgGradient: "from-slate-50 to-slate-100",
  //   image: "/images/doors/ss_autodoor.png",
  // },
  // {
  //   name: "MS Automatic",
  //   slug: "ms-automatic",
  //   type: "Automatic",
  //   description:
  //     "Mild steel automatic doors with durable construction. Cost-effective solution with reliable performance for various applications.",
  //   features: [
  //     "Durable construction",
  //     "Cost-effective",
  //     "Reliable performance",
  //     "Multiple finish options",
  //   ],
  //   icon: DoorOpen,
  //   gradient: "from-gray-500 to-gray-600",
  //   bgGradient: "from-gray-50 to-gray-100",
  //   image: "/images/doors/ss_autodoor.png", // Using SS autodoor as fallback, you can add MS specific image if available
  // },
  {
    name: "Glass Automatic",
    slug: "glass-automatic",
    type: "Automatic",
    description:
      "Double-panel glass doors with thin metal frames for modern aesthetics. High visibility and elegant design for contemporary spaces with automatic operation.",
    features: [
      "Modern appearance",
      "High visibility",
      "Elegant design",
      "Automatic operation",
    ],
    icon: Sparkles,
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    image: "/images/doors/glass_door.png",
  },
  {
    name: "SS Hairline Autodoor",
    slug: "ss-hairline-autodoor",
    type: "Automatic",
    description:
      "Plain brushed stainless steel double door with sleek finish and automatic operation. Premium appearance with smooth functionality.",
    features: [
      "Premium finish",
      "Corrosion resistant",
      "Easy to clean",
      "Automatic operation",
    ],
    icon: Shield,
    gradient: "from-zinc-500 to-gray-500",
    bgGradient: "from-zinc-50 to-gray-50",
    image: "/images/doors/ss_autodoor.png",
  },
  {
    name: "Telescopic / Side Opening Auto",
    slug: "telescopic-side-opening-auto",
    type: "Automatic",
    description:
      "Advanced telescopic door system with side opening mechanism. Space-efficient solution ideal for narrow shafts and modern installations.",
    features: [
      "Space efficient",
      "Advanced mechanism",
      "Smooth operation",
      "Modern technology",
    ],
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    image: "/images/doors/telescopicdoor_1.png", // Using SS autodoor as fallback, you can add telescopic specific image if available
  },
  {
    name: "Swing Doors",
    slug: "swing-doors",
    type: "Manual",
    description:
      "Single-panel door with rectangular window, perfect for traditional settings. Classic design with easy operation and maintenance.",
    features: [
      "Classic design",
      "Easy maintenance",
      "Cost-effective",
      "Versatile application",
    ],
    icon: DoorOpen,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    image: "/images/doors/ms_swing_door.png",
  },
  {
    name: "Collapsible Gates",
    slug: "collapsible-gates",
    type: "Manual",
    description:
      "Gate-like door with diamond lattice pattern, ideal for industrial applications. Robust design with high visibility and security.",
    features: [
      "Robust design",
      "High visibility",
      "Industrial grade",
      "Secure operation",
    ],
    icon: DoorOpen,
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-50 to-green-50",
    image: "/images/doors/ms_collapsible_door.png",
  },
  {
    name: "MS Imperforate Door",
    slug: "ms-imperforate-door",
    type: "Manual",
    description:
      "Metallic accordion-style door with smooth operation and modern design. Durable construction for various applications.",
    features: [
      "Durable construction",
      "Smooth operation",
      "Space efficient",
      "Modern design",
    ],
    icon: DoorOpen,
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    image: "/images/doors/ms_imperforate_door.png",
  },
  {
    name: "MS Powder Coated Door",
    slug: "ms-powder-coated-door",
    type: "Manual",
    description:
      "Light beige/cream colored double door with rectangular window, set within darker frame. Custom colors available for versatile design.",
    features: [
      "Custom colors",
      "Weather resistant",
      "Versatile design",
      "Easy maintenance",
    ],
    icon: DoorOpen,
    gradient: "from-yellow-500 to-amber-500",
    bgGradient: "from-yellow-50 to-amber-50",
    image: "/images/doors/ms_powdercoated_door.png",
  },
];

/**
 * Default projects data
 */
export const defaultProjects: Project[] = [
  {
    title: "Corporate Tower A",
    location: "Downtown District",
    type: "Commercial Installation",
    category: "Commercial",
    image: "/assets/service-installation.jpg",
    year: "2023",
  },
  {
    title: "Residential Complex B",
    location: "Suburban Area",
    type: "Complete Modernisation",
    category: "Residential",
    image: "/assets/service-modernization.jpg",
    year: "2023",
  },
  {
    title: "Shopping Mall C",
    location: "City Center",
    type: "Multiple Lift Installation",
    category: "Commercial",
    image: "/assets/service-installation.jpg",
    year: "2022",
  },
  {
    title: "Office Building D",
    location: "Business Park",
    type: "AMC & Maintenance",
    category: "Commercial",
    image: "/assets/service-maintenance.jpg",
    year: "2024",
  },
  {
    title: "Hospital Complex E",
    location: "Medical District",
    type: "Hospital Lift Installation",
    category: "Healthcare",
    image: "/assets/service-installation.jpg",
    year: "2023",
  },
  {
    title: "Industrial Facility F",
    location: "Industrial Zone",
    type: "Goods Lift Installation",
    category: "Industrial",
    image: "/assets/service-modernization.jpg",
    year: "2022",
  },
];

/**
 * Default project categories
 */
export const defaultProjectCategories = [
  "All",
  "Commercial",
  "Residential",
  "Healthcare",
  "Industrial",
];

/**
 * Default values data (for About page)
 */
export const defaultValues: Value[] = [
  {
    icon: Shield,
    title: "Safety",
    description:
      "We prioritize safety above all else, ensuring every installation meets the highest industry standards and certifications.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to delivering exceptional quality in every project we undertake with precision and care.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "Reliability",
    description:
      "Our clients trust us for consistent, dependable service and support throughout the project lifecycle.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "Staying ahead with the latest elevator technology and best practices in the industry.",
    gradient: "from-orange-500 to-red-500",
  },
];

/**
 * Default expertise list (for About page)
 */
export const defaultExpertise = [
  "Supply, Installation and Commissioning",
  "Modernisation of existing elevator systems",
  "Preventive maintenance, Repairs and AMC services",
  "Emergency breakdown support",
  "Technical consultancy and project planning",
  "Safety inspections and compliance certification",
];

/**
 * Default passenger specifications
 */
export const defaultPassengerSpecs: PassengerSpec[] = [
  {
    person: 4,
    weight: 272,
    width: "900",
    depth: "1000",
    height: "2100",
    pit: "1400",
    oh: "3800",
  },
  {
    person: 6,
    weight: 408,
    width: "1100",
    depth: "1000",
    height: "2100",
    pit: "1400",
    oh: "3800",
  },
  {
    person: 8,
    weight: 544,
    width: "1100",
    depth: "1400",
    height: "2200",
    pit: "1500",
    oh: "4000",
  },
  {
    person: 10,
    weight: 680,
    width: "1350",
    depth: "1400",
    height: "2200",
    pit: "1500",
    oh: "4000",
  },
  {
    person: 13,
    weight: 884,
    width: "1600",
    depth: "1400",
    height: "2300",
    pit: "1600",
    oh: "4200",
  },
  {
    person: 16,
    weight: 1088,
    width: "1600",
    depth: "1500",
    height: "2300",
    pit: "1600",
    oh: "4200",
  },
  {
    person: 20,
    weight: 1360,
    width: "1800",
    depth: "1500",
    height: "2400",
    pit: "1700",
    oh: "4500",
  },
];

/**
 * Default hospital specifications
 */
export const defaultHospitalSpecs: HospitalSpec[] = [
  {
    person: 15,
    capacity: 1020,
    shaftW: "2100",
    shaftD: "2400",
    carW: "1600",
    carD: "2400",
    entrance: "1100",
  },
  {
    person: 20,
    capacity: 1360,
    shaftW: "2400",
    shaftD: "2600",
    carW: "2000",
    carD: "2600",
    entrance: "1100",
  },
  {
    person: 26,
    capacity: 1766,
    shaftW: "2400",
    shaftD: "3000",
    carW: "2000",
    carD: "3000",
    entrance: "1100",
  },
];

/**
 * Default freight specifications
 */
export const defaultFreightSpecs: FreightSpec[] = [
  {
    load: 500,
    width: "1500",
    depth: "1500",
    entDepth: "1500",
    entWidth: "1200",
    mrDepth: "2000",
    mrHeight: "2200",
    speed: "0.7 m/s",
  },
  {
    load: 1000,
    width: "2000",
    depth: "2000",
    entDepth: "2000",
    entWidth: "1500",
    mrDepth: "2500",
    mrHeight: "2400",
    speed: "0.7 m/s",
  },
  {
    load: 2000,
    width: "2500",
    depth: "2500",
    entDepth: "2500",
    entWidth: "2000",
    mrDepth: "3000",
    mrHeight: "2600",
    speed: "0.7 m/s",
  },
  {
    load: 3000,
    width: "3000",
    depth: "3000",
    entDepth: "3000",
    entWidth: "2500",
    mrDepth: "3500",
    mrHeight: "2800",
    speed: "0.7 m/s",
  },
  {
    load: 4000,
    width: "3500",
    depth: "3500",
    entDepth: "3500",
    entWidth: "3000",
    mrDepth: "4000",
    mrHeight: "3000",
    speed: "0.7 m/s",
  },
];

/**
 * Default hydraulic specifications
 */
export const defaultHydraulicSpecs: HydraulicSpec[] = [
  {
    person: 3,
    capacity: 204,
    carW: "800",
    carF: "1500",
    shaftW: "1500",
    shaftD: "1500",
  },
  {
    person: 3,
    capacity: 272,
    carW: "850",
    carF: "1050",
    shaftW: "1550",
    shaftD: "1550",
  },
  {
    person: 5,
    capacity: 340,
    carW: "1000",
    carF: "1200",
    shaftW: "1600",
    shaftD: "1600",
  },
  {
    person: 8,
    capacity: 408,
    carW: "1100",
    carF: "1250",
    shaftW: "1700",
    shaftD: "1700",
  },
  {
    person: 8,
    capacity: 544,
    carW: "1200",
    carF: "1500",
    shaftW: "1700",
    shaftD: "1800",
  },
  {
    person: 8,
    capacity: 680,
    carW: "1200",
    carF: "1700",
    shaftW: "1700",
    shaftD: "2000",
  },
  {
    person: 12,
    capacity: 844,
    carW: "1300",
    carF: "1800",
    shaftW: "1900",
    shaftD: "2100",
  },
  {
    person: 12,
    capacity: 1088,
    carW: "1300",
    carF: "2200",
    shaftW: "2000",
    shaftD: "2500",
  },
  {
    person: 20,
    capacity: 1428,
    carW: "1400",
    carF: "2500",
    shaftW: "2100",
    shaftD: "2800",
  },
  {
    person: 20,
    capacity: 1700,
    carW: "1500",
    carF: "2500",
    shaftW: "2200",
    shaftD: "2800",
  },
];

/**
 * Default MRL benefits (for Technical page)
 */
export const defaultMRLBenefits = [
  "Latest Technology in The World",
  "Smoothest Travel",
  "Absolute Freedom in Building Designs",
  "Substantial Saving on Electricity Cost",
  "Save The Construction Cost",
  "More Safe",
];

/**
 * Default VFD benefits (for Technical page)
 */
export const defaultVFDBenefits = [
  "Setting/altering any parameters at site",
  "All input signals NO/NC selection can be set on site",
  "Power on reset run to ground floor is not required",
  "All inputs and outputs are user programmable",
  "All parameters can be password protected",
  "Providing under voltage, over voltage and earth protection for controller",
];

/**
 * Default safety features (for Technical page)
 */
export const defaultSafetyFeatures: SafetyFeature[] = [
  {
    icon: Shield,
    title: "Automate Rescue Device (ARD)",
    description:
      "Advanced system for passenger rescue during power failure, ensuring safe evacuation without manual intervention.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: AlertTriangle,
    title: "Infrared Full Length Door Sensors",
    description:
      "Detect objects in the door's path, preventing accidents and ensuring safe operation.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: CheckCircle2,
    title: "Door Interlocking",
    description:
      "Prevents elevator movement when doors are open, ensuring maximum safety.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Over Speed Governor",
    description: "Automatically activates if elevator exceeds safe speed limits.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Alarm",
    description: "Allows passengers to alert in case of emergency situations.",
    color: "from-red-500 to-orange-500",
  },
];

/**
 * Default admin sidebar items
 */
export const defaultAdminSidebarItems: AdminSidebarItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "settings", label: "Site Settings", icon: SettingsIcon },
  { id: "messages", label: "Messages", icon: MessageSquare },
];

/**
 * Default navigation links (for Header)
 */
export const defaultNavigationLinks: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Our Design", href: "/our-design" },
  { name: "Contact", href: "/contact" },
];

/**
 * Default product menu items (for Header)
 */
export const defaultProductMenuItems: NavigationLink[] = [
  { name: "Products", href: "/products", description: "Browse all products" },
  { name: "Elevator Types", href: "/product-types", description: "Explore categories" },
  { name: "Landing Doors", href: "/landing-doors", description: "Door solutions" },
  { name: "Technical", href: "/technical", description: "Technical details" },
  { name: "Specifications", href: "/specifications", description: "Full specifications" },
];

/**
 * Default footer quick links
 */
export const defaultFooterQuickLinks: NavigationLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
];

/**
 * Default footer product links
 */
export const defaultFooterProductLinks: NavigationLink[] = [
  { name: "Elevator Types", href: "/product-types" },
  { name: "Specifications", href: "/specifications" },
  { name: "Technical", href: "/technical" },
  { name: "Landing Doors", href: "/landing-doors" },
];

/**
 * Default footer service links
 */
export const defaultFooterServiceLinks: NavigationLink[] = [
  { name: "Lift Installation", href: "/services" },
  { name: "Lift Modernisation", href: "/services" },
  { name: "Maintenance & Repair", href: "/services" },
];

/**
 * Default social links (for Footer)
 */
export const defaultSocialLinks: SocialLink[] = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

/**
 * Helper function to get contact methods (requires settings)
 * This is exported as a function since it depends on settings
 */
export function getContactMethods(settings: {
  phones: string[];
  email: string;
  address: string;
}): ContactMethod[] {
  // Filter out category titles, keep only phone numbers
  const phoneNumbers = settings.phones.filter((p) => /^\+?\d{10,}$/.test(p.trim()));
  
  return [
    {
      icon: Phone,
      title: "Phone",
      content: phoneNumbers,
      link: (val: string) => `tel:${val}`,
      type: "phone",
    },
    {
      icon: Mail,
      title: "Email",
      content: [settings.email],
      link: (val: string) => `mailto:${val}`,
      type: "email",
    },
    {
      icon: MapPin,
      title: "Address",
      content: [settings.address],
      link: () => "#",
      type: "address",
    },
  ];
}

/**
 * Default team members
 */
export const defaultTeamMembers: TeamMember[] = [
  {
    name: "John Doe",
    position: "CEO & Founder",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Jane Smith",
    position: "Technical Director",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Mike Johnson",
    position: "Operations Manager",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Sarah Williams",
    position: "Head of Engineering",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "David Brown",
    position: "Sales Director",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "Emily Davis",
    position: "Service Manager",
    gradient: "from-rose-500 to-pink-500",
  },
];

/**
 * Default design images
 */
export const defaultDesignImages: DesignImage[] = [
  {
    id: "design-1",
    image: "/images/design/D1.jpeg",
    title: "Design 1",
    category: "Designs",
  },
  {
    id: "design-2",
    image: "/images/design/D2.jpeg",
    title: "Design 2",
    category: "Designs",
  },
  {
    id: "design-3",
    image: "/images/design/D3.jpeg",
    title: "Design 3",
    category: "Designs",
  },
  {
    id: "design-4",
    image: "/images/design/D4.jpeg",
    title: "Design 4",
    category: "Designs",
  },
  {
    id: "design-5",
    image: "/images/design/D5.jpeg",
    title: "Design 5",
    category: "Designs",
  },
  {
    id: "design-6",
    image: "/images/design/D6.jpeg",
    title: "Design 6",
    category: "Designs",
  },
  {
    id: "design-7",
    image: "/images/design/D7.jpeg",
    title: "Design 7",
    category: "Designs",
  },
  {
    id: "design-8",
    image: "/images/design/D8.jpeg",
    title: "Design 8",
    category: "Designs",
  },
  {
    id: "design-9",
    image: "/images/design/D9.jpeg",
    title: "Design 9",
    category: "Designs",
  },
  {
    id: "design-10",
    image: "/images/design/D10.jpeg",
    title: "Design 10",
    category: "Designs",
  },
  {
    id: "design-11",
    image: "/images/design/D11.jpeg",
    title: "Design 11",
    category: "Designs",
  },
  {
    id: "design-12",
    image: "/images/design/D12.jpeg",
    title: "Design 12",
    category: "Designs",
  },
];

