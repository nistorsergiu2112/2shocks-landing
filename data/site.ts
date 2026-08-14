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
  isMock: boolean;
};

export const siteUrl = "https://2shocks.com";

export const contact: ContactDetails = {
  email: "info@2shocks.com",
  socialLinks: [],
};

export const legalEntity: LegalEntity = {
  name: "2Shocks Technologies Ltd",
  companyNumber: "00000000",
  registeredOffice: "123 Example Street, London, EC1A 1AA, United Kingdom",
  isMock: true,
};

export const stores: StoreAvailability[] = [
  { store: "App Store", available: false },
  { store: "Google Play", available: false },
];

export const features: Feature[] = [
  {
    id: "passport",
    eyebrow: "01 / Motorcycle passport",
    title: "Your bike, resolved from its registration.",
    description:
      "Start with a UK registration and turn scattered ownership details into one clear motorcycle record.",
    points: ["Identity and model details", "MOT status and history", "Latest official mileage"],
    screen: {
      src: "/screens/add-bike.png",
      alt: "2Shocks registration lookup screen with a sample UK plate",
      label: "Registration lookup",
    },
  },
  {
    id: "planning",
    eyebrow: "02 / Maintenance record",
    title: "Keep maintenance context with the motorcycle.",
    description:
      "Record completed work and prepare what may need attention next, without rebuilding the story from memory.",
    points: ["Rider-entered service history", "Saved service plans", "Notes, dates and mileage together"],
    screen: {
      src: "/screens/add-history.png",
      alt: "2Shocks screen for adding a motorcycle service-history entry",
      label: "Service history",
    },
  },
  {
    id: "plus",
    eyebrow: "03 / 2Shocks Plus",
    title: "Every bike organised in one place.",
    description:
      "Move from a single motorcycle to a collection, with each bike keeping its own reminders, parts and history.",
    points: ["Up to five active motorcycles", "Separate records for every bike", "Richer ownership organisation"],
    screen: {
      src: "/screens/plus.png",
      alt: "2Shocks Plus comparison showing multi-bike organisation",
      label: "2Shocks Plus",
    },
  },
];
