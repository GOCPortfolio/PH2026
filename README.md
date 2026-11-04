# Precious & Honesty — Wedding Invitation Website

Saturday, 12th December 2026 · #PRECIOUSHONEY2026

## 1. What is in this folder

| File | What it does |
|---|---|
| `index.html` | The page structure and link-preview tags |
| `styles.css` | Colours, fonts, layout (phone and wide-screen) |
| `script.js` | **CONFIG at the top holds every name, date, venue and number.** Below it is the code. |
| `google-apps-script.gs` | Saves RSVPs into a Google Sheet |
| `assets/` | Photos, florals, music, link-preview picture |

## 2. Changing the wording

Open `script.js`. Everything between the top and the line `APP CODE` can be edited: names, parents, venues, colours, story, toast, FAQ, bank details, phone numbers. Lines marked `⚠ CONFIRM` are guesses or placeholders.

**Still to fill in or confirm**

- Story: a draft was written for the couple; edit freely in `story`
- Tagline (currently "Two Hearts, One Promise")
- Bride's title (currently "Mrs") and surname (currently "Chibuike")
- Reception: spelling of "Margrat Hall", full street address, and start time
- Exact Google Maps text for both venues (`mapQuery`), or paste a Maps link into `mapsUrl`
- Coordinator's name, parking and accommodation notes
- Father of the Day and vendors (both hidden until you fill `fatherOfTheDay` / `vendors`)
- Your RSVP link (`rsvp.endpoint`, section 4)
- Replace `assets/music.mp3` (section 6)

## 3. Photos

Each photo has a full version and a small `-sm` thumbnail (for example `proposal.webp` and `proposal-sm.webp`). To replace one, save a new WebP with the same name. `hero.webp` is the top picture, `envelope-card.webp` is the photo that slides out of the envelope, `footer-arch.webp` is the arched photo at the bottom.

## 4. Collecting RSVPs in a Google Sheet

1. Create a new Google Sheet.
2. Click **Extensions > Apps Script**, delete what is there and paste the whole of `google-apps-script.gs`. Save.
3. Click **Deploy > New deployment**, choose **Web app**. Set *Execute as* to **Me** and *Who has access* to **Anyone**. Deploy and approve the permissions.
4. Copy the **Web app URL** and paste it into `script.js` at `rsvp: { endpoint: "…" }`.
5. Open the live site, send a real test RSVP and check that a row appears in the "RSVPs" tab.
6. If you ever change the script, use **Deploy > Manage deployments > Edit > New version**.

Until the URL is set, the form politely points guests to the WhatsApp and Call buttons.

## 5. Link preview (WhatsApp, Facebook, Twitter)

The preview picture is `assets/og-image-2.jpg` and the text is "You are invited to celebrate our union in marriage." The addresses in `index.html` are written as `https://gocportfolio.github.io/PH2026/`. **If your final web address is different, change it in these 4 places:**
`<link rel="canonical">`, `og:url`, `og:image` and `twitter:image` (then also `site.url` and `site.ogImage` in `script.js`).

WhatsApp remembers old previews. To refresh: rename the image (e.g. `og-image-3.jpg`, and update the two tags), or share the link with `?v=2` on the end, then use the Facebook Sharing Debugger and press **Scrape Again**.

## 6. Music

`assets/music.mp3` is only a short generated placeholder. Replace it with a song you are licensed to use (do not use copyrighted songs without permission). Keep it under about 1.5 MB:

```
ffmpeg -i song.mp3 -ac 2 -b:a 96k -t 180 music.mp3
```

Music starts when the guest taps the seal; the speaker button (top right) mutes it and the choice is remembered.

## 7. Putting it online

- **GitHub Pages:** upload the contents of this folder to your repository (`index.html` at the top level), then *Settings > Pages > Deploy from branch > main / root*.
- **Netlify:** drag the folder onto app.netlify.com/drop.
- **Vercel:** import the repository or use `vercel` in this folder.
- **Custom domain:** add the A / CNAME records your host shows, then update the 4 addresses in section 5.

## 8. Personal guest links

Add `?guest=Name` to the link to greet a guest on the envelope and card and pre-fill their RSVP name. Write spaces as `%20` and `&` as `%26`, e.g. `…/PH2026/?guest=Mr%20%26%20Mrs%20Okafor`. Add `?nointro` to skip the envelope (useful for testing).
