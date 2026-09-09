export type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  screen: ScreenshotAsset;
};

export type ScreenshotAsset = {
  src: string;
  alt: string;
  label: string;
};

export type StoreAvailability = {
  store: "App Store" | "Google Play";
  available: false;
};

export type ContactDetails = { email: string; socialLinks: [] };

export type LegalEntity = {
  name: string;
  companyNumber: string;
  registeredOffice: string;
};

export const siteUrl = "https://2shocks.com";

export const contact: ContactDetails = {
  email: "info@2shocks.com",
  socialLinks: [],
};

export const contactEmailUrl = `mailto:${contact.email}?subject=${encodeURIComponent("2Shocks enquiry")}`;

export const legalEntity: LegalEntity = {
  name: "2 SHOCKS LTD",
  companyNumber: "17067783",
  registeredOffice: "2 Spring Corner, High Street, TW13 4PA, Feltham, United Kingdom",
};

export const stores: StoreAvailability[] = [
  { store: "App Store", available: false },
  { store: "Google Play", available: false },
];

// Proposed launch offer. Match these values to mobile store products before launch.
export const riderPlans = {
  freeBikes: 1,
  plusBikes: 5,
  plusAnnualGbp: 29.99,
  plusMonthlyGbp: 3.99,
} as const;

export const features: Feature[] = [
  {
    id: "passport",
    eyebrow: "Your bike, at a glance",
    title: "Your motorcycle passport.",
    description:
      "A bike record started from your UK registration. Find available MOT information and your next saved service plan together.",
    points: ["Identity and model details", "MOT status and history", "Latest official mileage"],
    screen: {
      src: "/screens/home.webp",
      alt: "2Shocks motorcycle passport showing a Honda, its MOT record and next service plan",
      label: "Motorcycle passport",
    },
  },
  {
    id: "planning",
    eyebrow: "The work you’ve done",
    title: "Remember what was done.",
    description:
      "An oil change, new tyres or a workshop visit. Record the work, date and mileage while the details are fresh.",
    points: ["Add completed maintenance", "Keep your own service notes", "Record dates and mileage"],
    screen: {
      src: "/screens/add-history.webp",
      alt: "2Shocks screen for adding a motorcycle service-history entry",
      label: "Service history",
    },
  },
  {
    id: "plus",
    eyebrow: "Room for your collection",
    title: "Every bike organised in one place.",
    description:
      "With Plus, keep up to five bikes active together. Each has its own record, so your service plans and maintenance notes stay with the right motorcycle.",
    points: ["Up to five active motorcycles", "Separate records for every bike", "Parts and service plans for each bike"],
    screen: {
      src: "/screens/collection.webp",
      alt: "2Shocks motorcycle collection showing a separate record and capacity for five active bikes",
      label: "2Shocks Plus",
    },
  },
];
