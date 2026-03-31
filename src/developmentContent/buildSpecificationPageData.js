export const buildSpecificationPageData = {
  headingSection: {
    title: "Build Your Perfect Instance",
    description: "Configure your specifications and watch the pricing update in real-time",
  },
  contentHeader: {
    title: "Configure Your Specifications",
    description: "Adjust each component to match your requirements",
  },
  billingCycle: {
    label: "Billing Cycle",
    tabs: [
      { label: "Monthly", value: "monthly" },
      { label: "Yearly", value: "yearly" },
    ],
  },
  region: {
    label: "Region",
    options: [
      { label: "South Africa (Cape Town)", value: "south-africa-cape-town" },
      { label: "Europe (London)", value: "europe-london" },
      { label: "North America (New York)", value: "north-america-new-york" },
      { label: "India", value: "india" },
      { label: "United States", value: "united-states" },
    ],
  },
  instanceType: {
    label: "Instance Type",
    options: [
      { label: "Standard", value: "standard" },
      { label: "High CPU", value: "high-cpu" },
      { label: "High Memory", value: "high-memory" },
    ],
  },
  resources: {
    cpuCores: {
      label: "CPU Cores",
      min: 1,
      max: 16,
      basePrice: 11.84,
    },
    memoryRam: {
      label: "Memory (RAM)",
      min: 1,
      max: 32,
      basePrice: 11.84,
    },
    ssdStorage: {
      label: "SSD Storage",
      min: 1,
      max: 1000,
      basePrice: 11.84,
    },
  },
  additionalServices: {
    title: "Additional services",
    services: [
      {
        id: "managed-services",
        title: "Managed Services",
        description: "Automated updates, patches, and maintenance",
        price: 83.40,
      },
      {
        id: "automated-backup",
        title: "Automated Backup",
        description: "Daily automated backups with 30-day retention",
        price: 55.60,
      },
      {
        id: "advanced-monitoring",
        title: "Advanced Monitoring",
        description: "Real-time metrics, alerts, and performance insights",
        price: 41.70,
      },
    ],
  },
  pricingCard: {
    title: "Development Tier",
    description: "Perfect for testing and development",
    baseInstancePrice: 278.00,
    disclaimer: "Prices in ZAR, exclude taxes. 24/7 support included.",
  },
  instancePricingCard: {
    title: "Development Tier",
    totalPrice: 278,
    description: "Perfect for testing and development",
    costBreakdown: [
      { label: "Base Instance", price: 278 },
      { label: "CPU (1 core)", price: 11.84 },
      { label: "Memory (1 GB)", price: 11.84 },
      { label: "Storage (1 GB)", price: 11.84 },
    ],
    disclaimer: "Prices in ZAR, exclude taxes. 24/7 support included.",
  },
  goleCompute: {
    headingSection: {
      title: "Why Choose GOLE Compute?",
      description: "Built for developers who demand transparency, performance, and flexibility",
    },
    features: [
      {
        _id: 1,
        title: "Real-Time Pricing",
        description: "See exactly what you'll pay as you configure your instance. No hidden fees, no surprises.",
        image: "/svgs/processor.svg",
      },
      {
        _id: 2,
        title: "Auto-Scaling",
        description: "Automatically scale resources up or down based on demand. Pay only for what you use.",
        image: "/svgs/scaling.svg",
      },
      {
        _id: 3,
        title: "Enterprise Security",
        description: "Bank-grade security with DDoS protection, SSL certificates, and compliance ready infrastructure.",
        image: "/svgs/security.svg",
      },
      {
        _id: 4,
        title: "African Regions",
        description: "Deploy across 8 African regions including SADC countries with transparent regional pricing.",
        image: "/svgs/world.svg",
      },
      {
        _id: 5,
        title: "99.99% Uptime",
        description: "Industry-leading uptime SLA with 24/7 monitoring and instant failover capabilities.",
        image: "/svgs/blue-check.svg",
      },
      {
        _id: 6,
        title: "Flexible Instances",
        description: "Choose from standard, compute-optimized, memory-optimized, or storage-optimized instances.",
        image: "/svgs/flexible-instances.svg",
      },
    ],
  },
};
