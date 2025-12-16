import { LucideIcon } from "lucide-react";

/**
 * Service type for displaying services offered by the company
 */
export type Service = {
  title: string;
  image: string | { src: string };
  description: string;
  benefits?: string[];
  color?: string;
  icon?: LucideIcon;
};

/**
 * Feature type for highlighting key features/benefits
 */
export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
};

/**
 * Testimonial type for client reviews
 */
export type Testimonial = {
  name: string;
  company: string;
  text: string;
  rating: number;
};

/**
 * Stat type for displaying statistics/numbers
 */
export type Stat = {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
};

/**
 * Product type for elevator/lift products
 */
export type ProductType = {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  features: string[];
  applications: string[];
  gradient: string;
  bgGradient: string;
  image?: string; // Path to product image
};

/**
 * Door type for elevator landing doors
 */
export type DoorType = {
  name: string;
  slug: string;
  type: "Automatic" | "Manual";
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
  bgGradient: string;
  image?: string; // Path to door image
};

/**
 * Mode of operation type for elevator control systems
 */
export type ModeOfOperation = {
  name: string;
  slug: string;
  description: string;
  features?: string[];
  applications?: string[];
  icon?: LucideIcon;
  gradient?: string;
  bgGradient?: string;
};

/**
 * Project type for showcasing completed projects
 */
export type Project = {
  title: string;
  location: string;
  type: string;
  category: string;
  image: string | { src: string };
  year: string | number;
};

/**
 * Navigation link type
 */
export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

/**
 * Contact form data type
 */
export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

/**
 * Specification type for technical specifications
 */
export type Specification = {
  category: string;
  title: string;
  items: string[];
  icon?: LucideIcon;
};

/**
 * Value type for company values
 */
export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
};

/**
 * Passenger specification type
 */
export type PassengerSpec = {
  person: number;
  weight: number;
  width: string;
  depth: string;
  height: string;
  pit: string;
  oh: string;
};

/**
 * Hospital specification type
 */
export type HospitalSpec = {
  person: number;
  capacity: number;
  shaftW: string;
  shaftD: string;
  carW: string;
  carD: string;
  entrance: string;
};

/**
 * Freight specification type
 */
export type FreightSpec = {
  load: number;
  width: string;
  depth: string;
  entDepth: string;
  entWidth: string;
  mrDepth: string;
  mrHeight: string;
  speed: string;
};

/**
 * Hydraulic specification type
 */
export type HydraulicSpec = {
  person: number;
  capacity: number;
  carW: string;
  carF: string;
  shaftW: string;
  shaftD: string;
};

/**
 * Safety feature type
 */
export type SafetyFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

/**
 * Contact method type
 */
export type ContactMethod = {
  icon: LucideIcon;
  title: string;
  content: string[];
  link: (val: string) => string;
  type: "phone" | "email" | "address";
};

/**
 * Admin sidebar item type
 */
export type AdminSidebarItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

/**
 * Detail page specification type
 */
export type DetailSpecification = {
  label: string;
  value: string;
};

/**
 * Detail page data type (for product/door/mode-of-operation detail pages)
 */
export type DetailPageData = {
  features: string[];
  applications: string[];
  specifications: DetailSpecification[];
};

/**
 * Navigation link type
 */
export type NavigationLink = {
  name: string;
  href: string;
  description?: string;
};

/**
 * Social link type
 */
export type SocialLink = {
  name: string;
  icon: LucideIcon;
  href: string;
};

/**
 * Team member type
 */
export type TeamMember = {
  name: string;
  position: string;
  image?: string;
  bio?: string;
  gradient: string;
};

/**
 * Design image type for design gallery
 */
export type DesignImage = {
  id: string;
  image: string;
  title?: string;
  category?: string;
};

