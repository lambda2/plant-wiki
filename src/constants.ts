export const origin =
  process.env.NODE_ENV === "production"
    ? "https://plants.10factory.com"
    : "http://localhost:3000";

export const authEndpoint = `https://v0.trefle.io/api/auth/claim?token=${process.env.API_KEY}&origin="${origin}"`;
