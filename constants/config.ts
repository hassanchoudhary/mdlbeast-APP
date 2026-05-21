// All EXPO_PUBLIC_* values are bundled into the client and are NOT secret.
// True secrets must stay on the backend (see Sentry vars in .env.example).

export const CONFIG = {
  PEOPLEVINE_API_URL: process.env.EXPO_PUBLIC_PEOPLEVINE_API_URL ?? '',
  PEOPLEVINE_API_KEY: process.env.EXPO_PUBLIC_PEOPLEVINE_API_KEY ?? '',

  STRAPI_URL: process.env.EXPO_PUBLIC_STRAPI_URL ?? '',
  STRAPI_TOKEN: process.env.EXPO_PUBLIC_STRAPI_TOKEN ?? '',

  SEVENROOMS_WEBSTORE_URL: process.env.EXPO_PUBLIC_SEVENROOMS_WEBSTORE_URL ?? '',
  SEVENROOMS_API_KEY: process.env.EXPO_PUBLIC_SEVENROOMS_API_KEY ?? '',

  SYNXIS_BOOKING_URL: process.env.EXPO_PUBLIC_SYNXIS_BOOKING_URL ?? '',

  WEBSTORE_URL: process.env.EXPO_PUBLIC_WEBSTORE_URL ?? '',

  CLOUDINARY_CLOUD_NAME: process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME ?? '',

  APP_SCHEME: process.env.EXPO_PUBLIC_APP_SCHEME ?? 'mdlbeast',
} as const;
