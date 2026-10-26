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

export const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.twoshocks.app";

export type ContactDetails = { email: string; socialLinks: [] };

export type LegalEntity = {
  name: string;
  companyNumber: string;
  registeredOffice: string;
};

export const siteUrl = "https://www.2shocks.com";

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

// UK reference price; the store supplies applicable pricing and renewal terms.
export const riderPlans = {
  freeBikes: 1,
  plusBikes: 20,
  plusMonthlyGbp: 3.99,
} as const;

export const features: Feature[] = [
  {
    id: "passport",
    eyebrow: "Your bike, at a glance · Included in Free",
    title: "Your motorcycle passport.",
    description:
      "A bike record started from your UK registration. Find available MOT information and your next saved service plan together.",
    points: ["Identity and model details", "MOT status and history", "Available recorded MOT mileage"],
    screen: {
      src: "/screens/store-2026-10-22/02-mot-history-capture.png",
      alt: "2Shocks motorcycle passport showing illustrative demo MOT results, advisories and recorded mileage",
      label: "Motorcycle passport",
    },
  },
  {
    id: "planning",
    eyebrow: "The work you’ve done · Included in Free",
    title: "Remember what was done.",
    description:
      "An oil change, new tyres or a workshop visit. Record the work, date and mileage while the details are fresh.",
    points: ["Add completed maintenance", "Keep your own service notes", "Record dates and mileage"],
    screen: {
      src: "/screens/store-2026-10-22/01-service-history-capture.png",
      alt: "2Shocks demo service history with dates, mileage and private rider notes",
      label: "Service history",
    },
  },
  {
    id: "plus",
    eyebrow: "Room for your collection",
    title: "Every bike organised in one place.",
    description:
      "Free includes service plans, service history, garage sheets and automatic bike alerts for one active motorcycle. Upgrade to Plus for up to 20 active motorcycles, custom reminders and an ad-free experience.",
    points: ["Up to 20 active motorcycles", "Custom reminders", "An ad-free experience"],
    screen: {
      src: "/screens/store-2026-10-22/07-plus-garage-capture.png",
      alt: "2Shocks motorcycle collection showing six illustrative motorcycles and the current 20-bike Plus limit",
      label: "2Shocks Plus",
    },
  },
];
