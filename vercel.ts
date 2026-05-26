import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  framework: "nextjs",
  buildCommand: "next build",
  installCommand: "npm install",
  functions: {
    "app/api/**/route.ts": {
      maxDuration: 300,
    },
  },
};

export default config;
