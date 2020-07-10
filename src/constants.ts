export const origin =
  process.env.NODE_ENV === "production"
    ? "https://plants.10factory.com"
    : "http://localhost:3000";

export const baseURL = "https://trefle.io/api";

export const authEndpoint = `${baseURL}/auth/claim?token=${process.env.API_KEY}&origin=${origin}`;
