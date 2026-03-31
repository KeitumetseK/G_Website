export const productivitySolutionsPageData = {
  heroSection: {
    title: "Productivity Suite",
  },
  choosePerfectSolution: {
    title: "Choose Your Perfect Solution",
    description:
      "Tailored productivity solutions designed to fit your specific needs and budget. Select the platform that works best for your business.",
    cards: [
      {
        id: 1,
        title: "One Office",
        description: "Essential productivity suite for growing businesses",
        cardVariant: "green",
        bgColor: "linear-gradient(181deg, #F3F9FF 1.13%, #03D9CC 395.77%)",
        features: [
          "Built-in document editing suite (Word, Excel, PowerPoint)",
          "Cloud storage with on-the-fly expansion",
          "VoIP calls and instant messaging",
          "Email system with phishing detection",
        ],
        button: {
          label: "Learn more about one office",
          variant: "secondary",
          link: "/services/package-solutions/one-office",
        },
      },
      {
        id: 2,
        title: "Modern Workplace",
        description: "Enterprise workplace transformation with advanced security",
        cardVariant: "blue",
        bgColor: "linear-gradient(182deg, #F3F9FF 1.32%, rgba(75, 166, 255, 0.13) 499.95%)",
        features: [
          "Zero Trust security architecture",
          "Advanced device management with Intune",
          "Microsoft Defender threat protection",
          "Compliance and data governance",
        ],
        button: {
          label: "Explore Modern Workplace",
          variant: "primary",
          link: "/services/package-solutions/modern-workplace",
        },
      },
    ],
  },
  understandingOptions: {
    title: "Understanding Your Options",
    description:
      "Get a clear picture of what each solution offers and which one fits your business needs",
    tabs: [
      { label: "One Office", value: "one-office" },
      { label: "Modern Workplace", value: "modern-workplace" },
    ],
    slides: [
      {
        id: 1,
        oneOffice: {
          title: "One Office",
          description:
            "One Office is an all-in-one cloud business solution that brings together all the tools companies need in one easy-to-use application. Built with security-first approach, it offers a compelling alternative to traditional packages with military-grade security on your own server.",
        },
        modernWorkplace: {
          title: "Modern Workplace",
          description:
            "Modern Workplace is Microsoft's enterprise-grade solution that transforms how organizations work. It goes beyond productivity tools to provide comprehensive security, device management, and strategic consulting.",
        },
      },
      {
        id: 2,
        oneOffice: {
          title: "Includes",
          features: [
            "Built-in document editing suite (Word, Excel, PowerPoint)",
            "Cloud storage with on-the-fly expansion",
            "VoIP calls and instant messaging",
            "Email system with phishing detection",
          ],
        },
        modernWorkplace: {
          title: "Includes",
          features: [
            "Built-in document editing suite (Word, Excel, PowerPoint)",
            "Cloud storage with on-the-fly expansion",
            "VoIP calls and instant messaging",
            "Email system with phishing detection",
          ],
        },
      },
      {
        id: 3,
        oneOffice: {
          title: "Best for",
          description:
            "Businesses seeking a complete, secure, cost-effective alternative to traditional office suites with no third-party dependencies and military-grade security.",
        },
        modernWorkplace: {
          title: "Best for",
          description:
            "Large enterprises that need advanced security, compliance, device management, and strategic workplace transformation guidance.",
        },
      },
    ],
  },
  solutionComparison: {
    title: "Solution Comparison",
    description:
      "Compare key differences to find the right fit for your organization",
    columns: ["Features", "One Office", "Modern Workplace"],
    rows: [
      {
        feature: "Target Audience",
        oneOffice: "All businesses seeking complete cloud solution",
        modernWorkplace: "Enterprise organizations of any size",
      },
      {
        feature: "Primary Focus",
        oneOffice: "All-in-one cloud business solution",
        modernWorkplace: "Complete workplace transformation",
      },
      {
        feature: "Security Level",
        oneOffice: "Military-grade security with isolation & encryption",
        modernWorkplace: "Enterprise-grade Zero Trust security",
      },
      {
        feature: "Implementation",
        oneOffice: "Military-grade security with isolation & encryption",
        modernWorkplace: "Strategic transformation with consulting",
      },
      {
        feature: "Investment Level",
        oneOffice: "Cost-effective alternative to traditional packages",
        modernWorkplace: "Strategic transformation with consulting",
      },
      {
        feature: "Infrastructure",
        oneOffice: "Your own server on Huawei Cloud",
        modernWorkplace: "Microsoft Azure cloud integration",
      },
    ],
  },
  startJourneySection: {
    title: "Ready to Transform Your Business?",
    description:
      "Let our experts help you choose and implement the perfect Microsoft solution",
    button: {
      label: "Schedule Consultation",
      link: "/contact-us?service=packaged-business-solutions",
    },
    button2: {
      label: "Download Comparison Guide",
      link: "",
    },
  },
};