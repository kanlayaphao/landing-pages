/**
 * External image CDN URLs.
 * Replace these URLs with your Cloudinary, Cloudflare R2, Supabase Storage,
 * or other public CDN URLs without changing the components.
 */
export const imageUrls = {
  hero: 'https://res.cloudinary.com/plrshybt/image/upload/v1784778910/ezgif-frame-001_dbyxbk.jpg',
  // Upload frames 001–280 to this folder with the same public ID pattern.
  // The canvas animation will use the available frames and fall back to hero.
  frame: (index: number) =>
    `https://res.cloudinary.com/plrshybt/image/upload/f_auto,q_auto,w_2400/ezgif-frame-${index.toString().padStart(3, '0')}_dbyxbk.jpg`,
  frameCount: 280,
  cards: [
    'https://res.cloudinary.com/plrshybt/image/upload/v1784778910/ezgif-frame-001_dbyxbk.jpg',
    'https://res.cloudinary.com/plrshybt/image/upload/v1784778910/ezgif-frame-001_dbyxbk.jpg',
    'https://res.cloudinary.com/plrshybt/image/upload/v1784778910/ezgif-frame-001_dbyxbk.jpg',
  ],
} as const;
