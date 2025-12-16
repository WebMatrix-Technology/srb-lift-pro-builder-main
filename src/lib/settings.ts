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
  phones: ["New Installation", "+918700962643", "+919716645685", "Engineer & Emergency Support", "+917705888341", "+918384060176", "+918368407899", "+919682356956"],
  email: "srbelevatorlift@gmail.com",
  address:
    "Plot No. 302, Gali No. 4, Vijay Public School, Aarthala, Mohan Nagar, Ghaziabad (UP) - 201007",
  whatsapp: "918700962643",
};

/**
 * Helper function to parse phones array into categories
 * Format: ["Category1", "phone1", "phone2", "Category2", "phone3", ...]
 */
export function parsePhoneCategories(phones: string[]): Array<{ title: string; numbers: string[] }> {
  const categories: Array<{ title: string; numbers: string[] }> = [];
  let currentCategory: { title: string; numbers: string[] } | null = null;

  // Check if string looks like a phone number (starts with + or contains only digits)
  const isPhoneNumber = (str: string): boolean => {
    return /^\+?\d{10,}$/.test(str.trim());
  };

  phones.forEach((item) => {
    const trimmed = item.trim();
    if (!trimmed) return;

    if (isPhoneNumber(trimmed)) {
      // It's a phone number
      if (currentCategory) {
        currentCategory.numbers.push(trimmed);
      } else {
        // No category yet, create a default one
        categories.push({ title: "Contact", numbers: [trimmed] });
      }
    } else {
      // It's a category title
      // Save previous category if exists
      if (currentCategory) {
        categories.push(currentCategory);
      }
      // Start new category
      currentCategory = { title: trimmed, numbers: [] };
    }
  });

  // Don't forget the last category
  if (currentCategory && currentCategory.numbers.length > 0) {
    categories.push(currentCategory);
  }

  return categories;
}

/**
 * Helper function to get all phone numbers (for backward compatibility)
 */
export function getAllPhoneNumbers(phones: string[]): string[] {
  return phones.filter((p) => /^\+?\d{10,}$/.test(p.trim()));
}

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

