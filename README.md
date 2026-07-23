<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/c9484b93-ffd8-403f-8852-7e83bdeec5a3

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## External image hosting

GitHub's 100 MB restriction applies to an individual file, not to a maximum of
100 image files. For a landing page with many or large images, keep the images
in an image CDN and keep only the URLs in this repository.

The site centralizes all external image URLs in
`src/config/imageUrls.ts`. Replace the example Unsplash URLs with public
delivery URLs from one of these services:

- **Cloudinary**: easiest for image resizing, format conversion, and CDN delivery.
- **Cloudflare R2 + custom domain**: suitable for large collections and low-cost storage.
- **Supabase Storage**: convenient when the project already uses Supabase.

Example Cloudinary delivery URL:

`https://res.cloudinary.com/<cloud-name>/image/upload/f_auto,q_auto,w_1600/<public-id>.jpg`

Upload images through the provider's dashboard, make the delivery asset public,
then paste its delivery URL into `imageUrls.ts`. Do not commit API secrets or
private upload keys to GitHub. GitHub Pages will fetch the public images from
the CDN when visitors open the site.
