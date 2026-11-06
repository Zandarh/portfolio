export const site = {
  name: "Alexander Ubaka",
  role: "Full-Stack Web Developer",
  title: "Alexander Ubaka | Full-Stack Web Developer",
  headline: "I build websites and platforms for businesses and organisations.",
  subheadline:
    "From member portals and payments to dashboards and content systems: secure, fast, and easy for your team to manage.",
  description:
    "Alexander Ubaka is a full-stack web developer in Nigeria building websites, member portals, payments, dashboards and content systems for businesses and organisations.",
  location: "Based in Nigeria, working with clients locally and abroad.",
  url: "https://alexanderubaka.vercel.app",
  email: "tekunainnovations@gmail.com",
  whatsappDisplay: "+234 814 233 9580",
  whatsapp: "https://wa.me/2348142339580",
  github: "https://github.com/Zandarh",
};

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "PHP",
  "Python",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Paystack payments",
  "REST APIs",
];

export const services = [
  {
    title: "Websites",
    body: "Fast, well-structured sites for businesses, schools, clinics and personal brands, with content you can update yourself.",
  },
  {
    title: "Member & customer portals",
    body: "Secure logins and accounts so members, students or customers can manage their own profiles and information.",
  },
  {
    title: "Payments & subscriptions",
    body: "Paystack checkout, one-off payments, access passes and recurring subscriptions, wired into your platform.",
  },
  {
    title: "Admin dashboards & content systems",
    body: "Back-office tools that let your team manage orders, users and content without touching code.",
  },
];

export const steps = [
  {
    title: "Plan",
    body: "We agree on goals, pages and features in writing, and you approve the plan before any work starts.",
  },
  {
    title: "Design",
    body: "You review the look and layout and sign off on it before I build anything.",
  },
  {
    title: "Build & test on a private link",
    body: "I build and test on a private link you can click through, give feedback on, and approve.",
  },
  {
    title: "Launch & handover",
    body: "With your final go-ahead we go live, and I hand over access and show your team how to manage it.",
  },
];

export type Project = {
  title: string;
  url: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  /** Private projects show a note instead of a "Visit site" link. */
  private?: boolean;
};

export const projects: Project[] = [
  {
    title: "Chefmark",
    url: "https://chefmark.ng",
    description:
      "A platform for finding and hiring professional chefs in Nigeria. Designed and built: chef and hirer accounts, portfolios, ID-verified badges, search by city and need, and paid access passes.",
    tags: ["Next.js", "Payments", "Verification", "User accounts"],
    image: "/projects/chefmark.webp",
    imageAlt: "Chefmark homepage with a chef search form and a grid of dishes from verified chefs",
  },
  {
    title: "Abuja Culinary School",
    url: "https://abujaculinaryschool.com",
    description:
      "Website for a culinary school with courses, blog, alumni, shop and a student login portal. Designed and built the site and its content management.",
    tags: ["PHP", "Student portal", "CMS", "Shop"],
    image: "/projects/abujaculinary.webp",
    imageAlt: "Abuja Culinary School homepage hero reading “The Best Culinary School in Nigeria”",
  },
  {
    title: "GiveTake",
    url: "https://givetake.xyz",
    description:
      "A community platform where neighbours give away items, skills and time for free. Designed and built: user accounts, listings with photos, requests, and in-app messaging.",
    tags: ["Next.js", "Community", "Messaging"],
    image: "/projects/givetake.webp",
    imageAlt: "GiveTake homepage reading “Give freely. Share locally. Build community.” with item categories",
  },
  {
    title: "Dr Skin Clinic",
    url: "https://drskinclinic.ng",
    description:
      "Website for a dermatology clinic with three locations in Lagos, covering the skin, hair and nail conditions it treats, skin guides and FAQs. Designed and built, with booking by WhatsApp or phone.",
    tags: ["Healthcare", "Skin guides", "Multi-location", "WhatsApp booking"],
    image: "/projects/drskin.webp",
    imageAlt: "Dr Skin Clinic homepage introducing a dermatologist in Lagos, with WhatsApp and call buttons",
  },
  {
    title: "OnyiPraize",
    url: "https://onyipraizezone.com",
    description:
      "Personal brand website for a US-based gospel artist and nurse, with music, videos, blog and devotionals that the owner manages herself.",
    tags: ["CMS", "Blog", "Media"],
    image: "/projects/onyipraize.webp",
    imageAlt: "OnyiPraize homepage hero reading “Uplift Your Spirit with Quality Music”",
  },
  {
    title: "Ogbonge",
    url: "https://ogbonge.space",
    description:
      "A business operations dashboard, a “commerce command centre” behind a secure login.",
    tags: ["Dashboard", "Admin", "Commerce"],
    image: "/projects/ogbonge.webp",
    imageAlt: "Ogbonge dashboard showing order summary cards and a recent activity log",
    private: true,
  },
];
