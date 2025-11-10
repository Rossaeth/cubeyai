const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  {
  "accountAssociation": {
    "header": "eyJmaWQiOjExMTIzMTksInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg0MjBiMzgzZmFBN0ZGNTFFODNCYjUzZkJERTVkYUMzZjBkMWJhOUIyIn0",
    "payload": "eyJkb21haW4iOiJjdWJleWFpLnZlcmNlbC5hcHAifQ",
    "signature": "lisC9ZZYUIoqtxfWPr7SYIBAeQh0CCu2DK8LqA5E2fJRI1KrlzLx1x9+hQGWb2YT4K5nA7i7H7Slkk1elLQyfhs="
  }
}.
  miniapp: {
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

