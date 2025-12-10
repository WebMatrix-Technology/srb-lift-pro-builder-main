export type SiteSettings = {
  companyName: string;
  tagline: string;
  phones: string[]; // E.164 numeric strings with country code
  email: string;
  address: string;
  whatsapp: string; // E.164 numeric string without plus
};

const STORAGE_KEY = "site_settings";

export const defaultSettings: SiteSettings = {
  companyName: "SRB ELEVATOR",
  tagline: "Complete Lift Solutions",
  phones: ["+917705888341", "+918384060176", "+918368407899", "+919682356956"],
  email: "srbelevatorlift@gmail.com",
  address:
    "Plot No. 302, Gali No. 4, Vijay Public School, Aarthala, Mohan Nagar, Ghaziabad (UP) - 201007",
  whatsapp: "917705888341",
};

export function loadSettings(): SiteSettings {
  if (typeof window === "undefined") {
    return defaultSettings;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultSettings;
    const parsed = JSON.parse(raw) as Partial<SiteSettings>;
    return {
      ...defaultSettings,
      ...parsed,
      phones: parsed?.phones && parsed.phones.length ? parsed.phones : defaultSettings.phones,
    };
  } catch {
    return defaultSettings;
  }
}

export function saveSettings(settings: SiteSettings) {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

