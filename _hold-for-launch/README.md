# Held back from launch

## Client stories (`client-stories/`)

The **Client stories** page and its data are kept here so the `/client-stories` route is not built until you are ready.

### To publish client stories again

1. Copy `client-stories/client-stories.astro` → `src/pages/client-stories.astro`
2. Copy `client-stories/clientStories.ts` → `src/data/clientStories.ts`
3. In `src/config/site.ts`, set `showClientStories` to `true`
4. In `astro.config.mjs`, set redirects to:
   - `'/case-studies': '/client-stories'` (and remove `'/client-stories': '/working-together'` if you added it for the hidden launch)
5. Run `npm run build` and check nav, home, Working Together, `/client-stories`, and the sitemap.

Old URLs `/client-stories` and `/case-studies` currently redirect to `/working-together` while this feature is off.
