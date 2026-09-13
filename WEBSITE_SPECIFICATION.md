# Wedding Website — Complete Rebuild Specification
## Mradul & Shreya • Taj Heritage, Goa • February 2 & 3

---

## 1. Website Overview

This is a single-page, mobile-first digital wedding invitation for **Mradul & Shreya**.
The website is designed as a luxury phone-frame experience: a vertical portrait-oriented layout
~430-460 px wide on desktop, centered on screen with a dark outer background (#141414).
Each section fills the full viewport height (100dvh), creating a full-screen paging/scrolling experience.
The site has 20 distinct sections (chapters) experienced in sequence by vertical scrolling.

Couple: Mradul & Shreya
Wedding Dates: February 2nd & 3rd
Venue: Taj Heritage (Taj Cidade de Goa Heritage), Vainguinim Beach, Dona Paula, Goa
Events: 4 events across 2 days
Wedding Hashtag: #MradulWedsShreya

---

## 2. Global Visual Identity

### Color Palette
- Primary warm brown (headings, accents, CTAs): #8C4B27
- Dark rich brown (body text): #4A2E2B
- Deep heritage brown (names, titles): #3D2522
- Muted terracotta (secondary text): #6E4141
- Warm sienna (borders, subtle accents): #5C3D2E
- Crimson red (heart icons): #C24137
- Gold/amber (gift section glow): #D4AF37 / #B8860B
- Warm parchment (page background): #FAF7F2
- Cream background variant: #FAF6EE
- WhatsApp green: #25D366

### Typography
Three font roles:
1. Cursive/Calligraphy font — major section headings, couple names, romantic titles (Google Fonts: Alex Brush / Great Vibes)
2. Serif font — subtitles, quotes, captions, body descriptions
3. Sans-serif font — form labels, inputs, badges, buttons, UI chrome

### Recurring Decorative Motifs
- Diamond star ornament (✦) flanks every section eyebrow label: e.g. "✦ ITINERARY ✦"
- Every section opens with a small-caps, widely-letter-spaced eyebrow label above the calligraphy heading
- Thin 1px hairline dividers between content blocks
- Illustrated full-bleed botanical/architectural background image per section (PNG files)
- Glassmorphism cards: white semi-transparent, soft border, shadow, used for content grouping

### Layout Constraint
Centered vertical column ~430-460 px wide.
On desktop: column centered with dark (#141414) outer background.
On mobile: fills full screen width.

### Background Music
Audio file: background-music.mp3 ("Until I Found You")
Initiated by user tap on opening transition screen. Optional, user-triggered.

---

## 3. Asset Index

| Asset Filename (assets/ folder) | Section(s) Used | Purpose |
|---------------------------------|-----------------|---------|
| opening-transition-parchment-bg.png | Opening Transition | Full-screen parchment/floral bg for the tap-to-open card |
| hero-bg-couple.png | Hero | Full-screen background behind couple names and RSVP CTA |
| countdown-floral-arch-bg.png | Countdown | Illustrated botanical arch background |
| schedule-floral-arch-bg.png | Schedule | Illustrated floral balcony arch background |
| attire-coastal-terrace-arch-bg.png | Attire | Illustrated coastal terrace arch background |
| attire-clothing-illustration.png | Attire | Outfit/clothing illustration |
| attire-floral-crest-header.png | Attire | Floral crest decorative header image |
| venues-botanical-arch-bg.png | Venues, Travel, Helpdesk, WishSection, RSVP | Botanical arch background (reused) |
| accommodations-lantern-arch-bg.png | Accommodations, Important Notes | Illustrated lantern and arch background |
| story-romantic-rose-bg.png | Our Story, Our Families | Romantic illustrated rose background |
| menu-ribbon-lily-frame-bg.png | Menu, Wedding Wish | Satin ribbon and lily illustrated frame |
| gifts-drapery-giftbox-frame-bg.png | Gifts & Contributions | Illustrated golden drapery and gift boxes |
| opening-scroll-top-ornament.png | Opening Transition | Top ornament of decorative scroll |
| opening-scroll-body.png | Opening Transition | Body of decorative scroll |
| opening-scroll-bottom-ornament.png | Opening Transition | Bottom ornament of decorative scroll |
| monogram-ms-crest.png | Countdown, Footer | Circular monogram crest (user-supplied image) |
| favicon.svg | Browser tab | Site favicon |
| icons-sprite.svg | UI chrome | SVG icon sprite |
| opening-lovebirds-icon.svg | Opening Transition | Love birds SVG shown before tap |
| opening-lovebirds-icon-alt.svg | Opening Transition | Alternative love birds SVG |
| background-music.mp3 | Site-wide | Ambient audio track |

NOTE: Story section, Gallery section, and Accommodations section use Unsplash CDN placeholder
photos. These should be replaced with real couple/venue photos.

---

## 4. Opening Transition

### Purpose
A cinematic full-screen "tap to open" experience played before the main website is revealed.
Acts as a digital envelope or luxury invitation card.

### Trigger
Shown immediately on page load. Covers the entire screen (z-index 50).
The rest of the website is rendered beneath it but is not visible until the transition completes.

### State 1: Before Tapping
The user sees:
- Full-screen card (max 440 px wide, 100dvh tall)
- Background: opening-transition-parchment-bg.png (warm parchment and floral illustration)
- Subtle warm wash overlay on top of background
- Centered: an animated Love Birds SVG icon (two illustrated birds in warm browns, red heart between them)
- Below birds: large widely-spaced serif uppercase text "TAP" (color #6E4141)
- Below "TAP": smaller text "TO OPEN" in spaced uppercase (color #8C4B27)
- The birds + text group gently floats up and down in a looping vertical bounce (8px, 1.5s cycle)
- The whole card is clickable/tappable

### State 2: After Tapping (Animation Sequence)
On tap, a GSAP animation timeline fires in this sequence:

Step 1 — Birds fade out (0.5s): love birds and "TAP / TO OPEN" group fades to opacity 0, scales to 0.85.
Step 2 — Invitation text container fades in (0.3s): centered content group becomes visible.
Step 3 — SVG handwriting stroke reveal: four text paths animate with stroke-drawing effect (strokeDashoffset), revealed as if written by hand, sequentially with 0.4s overlap, each taking 1.1s:
  - Line 1: "You are cordially invited" (cursive, size 28)
  - Line 2: "to celebrate the wedding of" (cursive, size 28)
  - Name 1: "Mradul &" (cursive, size 52)
  - Name 2: "Shreya" (cursive, size 54)
Step 4 — Text fill (0.7s): stroke text fills to color #8C4B27 (warm brown).
Step 5 — Event details fade in from below (0.8s, y: 12px to 0):
  - "February 2nd & 3rd" — medium weight serif
  - "TAJ HERITAGE • GOA" — small uppercase tracking text
  - "Vainguinim Beach, Dona Paula, Goa" — small italic
Step 6 — Hold: completed invitation visible ~2.3 seconds.
Step 7 — Dissolve (1.4s): card fades to opacity 0, scales to 1.05. On complete, transition unmounts; main website is revealed.

### Music
Background music starts at the moment of tap.


---

## 5. Section 1 — Hero

### Purpose
The primary landing section. Users arrive here after the opening transition dissolves.
Establishes the couple, the dates, and the venue at a glance. Contains the primary RSVP CTA.

### Background
Asset: hero-bg-couple.png
Used as a full-screen background image covering the entire section.
A cinematic dark gradient overlay is placed on top of the image:
- Gradient runs top to bottom: dark (35% opacity black) → lighter center → dark bottom (50% opacity black)
- This ensures white text is legible over the photo

### Content (top to bottom, centered)
1. Small eyebrow text (uppercase, wide tracking, white/90% opacity):
   "WE ARE GETTING MARRIED"

2. Couple names in large calligraphy script (white, drop shadow):
   "Mradul & Shreya"

3. Decorative divider line:
   Thin horizontal line (left side fades in from transparent to white)
   + Small filled heart icon in color #FFD1D1 (pale pink/rose)
   + Thin horizontal line (right side fades out to transparent)

4. Wedding date in italic serif (white, medium weight):
   "February 2 & 3"

5. Venue line with map pin icon (pale rose #FFD1D1):
   "Taj Heritage • Goa, India"

6. Primary CTA button (below all the above):
   Button label: "RSVP FOR THE CELEBRATION"
   Button style: warm brown (#8C4B27) background, white text, rounded, full-width up to max ~320px
   Left edge: Calendar icon
   On click: scrolls/navigates to the RSVP section

7. Below the button: animated bounce prompt:
   "Scroll to explore ↓" (small text, white/80%, bouncing animation)

### Interactions
- Tapping/clicking the RSVP button scrolls the user to the RSVP section at the bottom.
- "Scroll to explore" bounces to visually cue the user to keep scrolling.

### Mobile/Responsive
Full-screen portrait layout. Text sizes scale up slightly on larger screens.

---

## 6. Section 2 — Countdown

### Purpose
Live countdown timer to the wedding date. Builds excitement and urgency.
Also contains the M&S monogram crest and an "Add to Calendar" button.

### Background
Asset: countdown-floral-arch-bg.png
Full-screen illustrated botanical arch background.

### Content (top to bottom, centered)
1. Monogram Image Crest:
   Circular image (monogram-ms-crest.png), displayed as a perfect circle.
   Subtle drop shadow, hover scale animation.

2. Section eyebrow (small caps, wide tracking, brown):
   "✦ COUNTING DOWN ✦"

3. Calligraphy heading:
   "Until We Say \"I Do\""

4. Italic serif quote:
   "Two souls, one destiny. Every second brings us closer to our Goa celebration."

5. Small heart icon (rose/crimson)

6. Live countdown timer — 4 blocks side by side:
   [ DAYS ] [ HOURS ] [ MINUTES ] [ SECONDS ]
   Each block shows the number in a large serif/serif-style numeral, with the label below in small uppercase.
   Counts down to February 2, 2027 (the next occurrence of Feb 2).

7. Date and venue summary line with calendar icon:
   "February 2 & 3 • 4 Grand Festivities"

8. Venue line with location pin icon:
   "Taj Heritage, Vainguinim Beach, Goa"

9. "Add to Calendar" button:
   Custom styled button with calendar icon.
   Label: "ADD TO CALENDAR"
   Opens the native device calendar / generates .ics / links to Google Calendar.

### Interactions
- Countdown timer ticks live every second.
- "Add to Calendar" button triggers a calendar add action.
- Monogram crest scales up slightly on hover.

---

## 7. Section 3 — Celebration Schedule

### Purpose
Shows the wedding itinerary across 2 days with all 4 events, times, descriptions, and venues.

### Background
Asset: schedule-floral-arch-bg.png
Full-screen illustrated floral balcony/arch background.

### Content (top to bottom, centered)

Eyebrow: "✦ ITINERARY ✦"
Calligraphy heading: "Celebration Schedule"
Italic quote: "Two unforgettable days of love, laughter, and cherished moments."

Day Switcher Tabs — two underline-style text tabs:
  Tab 1: "DAY 1 • HALDI & SANGEET" (active by default)
  Tab 2: "DAY 2 • PHERAS & GALA"
  Active tab has a warm brown underline indicator.
  Separator dot between the two tabs.

#### DAY 1 CONTENT (default view):

Event 1:
  Time: 11:00 AM
  Title: The Haldi Ceremony
  Description: "Sunshine yellows, marigold floral showers, organic ubtan, lively dhol rhythms, and joyful blessings."
  Location (with pin icon): Oceanfront Palm Lawn • Taj Heritage

Thin hairline divider between events.

Event 2:
  Time: 07:30 PM
  Title: The Sangeet Night
  Description: "Glitz & glamour! High-energy dance performances, live musical acts, craft cocktails, and a Bollywood DJ dance floor."
  Location (with pin icon): The Grand Heritage Ballroom

#### DAY 2 CONTENT (shown when Day 2 tab selected):

Event 1:
  Time: 04:30 PM
  Title: The Baraat & Royal Pheras
  Description: "Grand Baraat procession at 4:30 PM followed by sacred sunset Vedic vows and pheras around the holy fire by the Arabian Sea."
  Location (with pin icon): Beachfront Sunset Mandap

Thin hairline divider between events.

Event 2:
  Time: 08:30 PM
  Title: The Gala Dinner & Afterparty
  Description: "Celebratory champagne toasts, lavish multi-cuisine royal banquet, live band serenades, and starlit dancing."
  Location (with pin icon): Mandovi Royal Terrace

### Interactions
- Tapping "DAY 1" or "DAY 2" tab switches the event list shown.
- Active tab gains warm brown underline indicator; inactive tab is muted/faded.

---

## 8. Section 4 — Attire & Dress Code

### Purpose
Guides guests on what to wear to each of the 4 events.

### Background
Asset: attire-coastal-terrace-arch-bg.png
Full-screen illustrated background.
Additional decorative assets: attire-floral-crest-header.png (header crest) and attire-clothing-illustration.png (outfit illustration).

### Content (top to bottom, centered)

Eyebrow: "✦ DRESS CODE ✦"
Calligraphy heading: "Attire & Dress Code"
Italic quote: "Dress as you feel — elegant, festive, and celebratory."

4-tab event switcher (segmented tabs):
  Tab 1: Haldi
  Tab 2: Sangeet
  Tab 3: Pheras
  Tab 4: Gala Dinner

Each tab shows event-specific dress code details:

HALDI TAB:
  Event: Day 1 Haldi Ceremony
  Dress Code: Sunshine Yellows & Floral Prints
  Colors/Swatches: Yellow palette
  Notes/Description about haldi-appropriate clothing

SANGEET TAB:
  Event: Day 1 Sangeet Night
  Dress Code: Indo-Western Glam, Sequins & Jewel Tones
  Colors/Swatches: Jewel tones (emerald, sapphire, ruby)
  Description about sangeet glamour

PHERAS TAB:
  Event: Day 2 Royal Pheras
  Dress Code: Heritage Pastels & Traditional Weaves
  Colors/Swatches: Pastel palette
  Description about traditional ceremony attire

GALA DINNER TAB:
  Event: Day 2 Gala Dinner
  Dress Code: Black Tie, Cocktail Gowns & Evening Suits
  Colors/Swatches: Formal evening palette
  Description about black tie dress expectations

### Interactions
- Tapping each event tab reveals that event's dress code.
- Active tab is highlighted (warm brown); inactive tabs are muted.

---

## 9. Section 5 — Venues

### Purpose
Showcases the wedding venues at Taj Heritage with photos and descriptions.

### Background
Asset: venues-botanical-arch-bg.png

### Content (top to bottom, centered)

Eyebrow: "✦ THE VENUES ✦" (or similar)
Calligraphy heading: referencing the venue spaces

Two venue cards shown (photo cards with details):

Venue 1 — Oceanfront Palm Lawn:
  Used for: Haldi Ceremony
  Description: Outdoor beachfront lawn area

Venue 2 — The Grand Heritage Ballroom:
  Used for: Sangeet Night
  Description: Grand indoor ballroom

Each card shows:
- Venue photo
- Venue name
- Which event it hosts
- Brief romantic description

### Interactions
- Cards may be scrollable/swipeable horizontally.
- Photo cards have hover effects (subtle scale).

---

## 10. Section 6 — Airports & Reaching Goa (Travel Guide)

### Purpose
Helps guests understand how to travel to the venue, with details on both airports serving Goa.

### Background
Asset: venues-botanical-arch-bg.png (reused)

### Content (top to bottom, centered)

Eyebrow: "✦ TRAVEL & LOGISTICS ✦"
Calligraphy heading: "Airports & Reaching Goa"
Italic quote: "Two airports connect to Goa. Dabolim (GOI) is closest and preferred for Taj Heritage."

Airport Switcher — two tab buttons (rounded, shadcn-style):
  Tab 1 (default active): "Dabolim (GOI) • Preferred" with Plane icon
  Tab 2: "Mopa (GOX)" with Plane icon

#### DABOLIM TAB (default):
Badge: "⭐ Preferred & Closest" (gold-styled badge)
Airport code badge: "GOI" (monospace, warm brown background)
Full name: "Goa International Airport, Dabolim"
Description: "The most convenient airport for attending our wedding at Taj Heritage. Offers the fastest highway transit directly to Dona Paula without heavy city bottlenecks."

Two stat tiles in a 2-column grid:
  Tile 1 — Distance icon + "Distance" label + "~28 km from Taj Heritage"
  Tile 2 — Clock icon + "Travel Time" label + "~40 – 45 minutes"

Route info row (car icon):
  "Recommended Route: Via NH 66, Zuari Bridge & Dona Paula Coastal Road"

Travel tips list ("Arrival & Transit Guidance") with checkmark icons:
  1. "Pre-paid taxi kiosks located immediately outside the baggage claim."
  2. "GoaMiles App and local cabs readily available 24/7."
  3. "Wedding hospitality shuttles will coordinate grouped guest arrivals."

Button: "OPEN DIRECTIONS ON GOOGLE MAPS" (external link icon)
Links to: Google Maps directions from Dabolim Airport to Taj Heritage

#### MOPA TAB:
Badge: "North Goa Gateway"
Airport code badge: "GOX"
Full name: "Manohar International Airport, Mopa"
Description: "Goa's brand-new world-class international terminal in North Goa. Offers wide flight connectivity with a scenic drive overlooking the Mandovi River into Panaji."

Two stat tiles:
  Tile 1 — "~48 km from Taj Heritage"
  Tile 2 — "~70 – 80 minutes"

Route info:
  "Via NH 66, New Mandovi Bridge (Atal Setu) & Panaji Bypass"

Travel tips:
  1. "Pre-paid electric AC buses and airport taxis run frequently to Panaji city center."
  2. "Expect a scenic 1 hour 15 min journey across Atal Setu bridge."
  3. "Advance cab booking recommended during peak evening arrival hours."

Button: "OPEN DIRECTIONS ON GOOGLE MAPS" (external link to Mopa → Taj Heritage directions)

### Interactions
- Tapping airport tabs switches the displayed airport information.
- "Open Directions on Google Maps" opens Google Maps in a new tab/browser.

---

## 11. Section 7 — Important Notes

### Purpose
Practical guest information about check-in/out, food, weather, and concierge.

### Background
Asset: accommodations-lantern-arch-bg.png

### Content

Eyebrow: "✦ GUEST ESSENTIALS ✦"
Calligraphy heading: "Important Notes"
Italic quote: "Helpful guidelines to ensure your stay in Goa is seamless, joyful, and comfortable."

Four information cards (shadcn-style glassmorphism cards), each with:
- Icon in a small square warm-brown icon container
- Card title (serif, bold)
- Badge label (small pill)
- Bullet list of information

Card 1 — Check-in & Check-out Timings [Clock icon] [Badge: "Resort Policy"]
  - Check-in: 2:00 PM (Taj Heritage)
  - Check-out: 11:00 AM
  - Early arrival? Our Wedding Welcome Lounge & Refreshment Suite is open from 10:00 AM with luggage safe-keeping while rooms are readied.

Card 2 — Dining & Food Preferences [Utensils icon] [Badge: "Culinary Care"]
  - Dedicated Pure Vegetarian & Jain counters (prepared strictly without root vegetables on request).
  - Lavish pan-Indian, regional Goan coastal, and global multi-cuisine buffet spreads at all functions.
  - Live interactive chaat, pasta, and dessert stations throughout the celebrations.
  - Please inform us of any severe allergies or dietary preferences via the RSVP form.

Card 3 — Weather & Comfort [Sun icon] [Badge: "Goa in February"]
  - February brings glorious pleasant days (~28°C / 82°F) and gentle, balmy Arabian Sea breezes by night (~21°C / 70°F).
  - Sunglasses and comfortable footwear are recommended for daytime outdoor lawn functions.

Card 4 — Hospitality Concierge [Luggage icon] [Badge: "24/7 Guest Desk"]
  - A dedicated Mradul & Shreya Wedding Helpdesk is stationed in the main lobby for quick room check-ins, transit, and questions.

### Interactions
- Cards have a subtle hover border highlight effect.

---

## 12. Section 8 — Accommodations

### Purpose
Showcases three recommended hotels with photos, amenities, courtesy codes, and booking links.

### Background
Asset: accommodations-lantern-arch-bg.png

### Content

Eyebrow: "✦ GUEST STAY & RETREATS ✦"
Calligraphy heading: "Accommodations"
Italic quote: "Curated luxury estates & coastal resorts reserved with special courtesy rates."

Three-tab hotel switcher (underline-style tabs):
  Tab 1: "Taj Heritage" (primary/default)
  Tab 2: "Taj Horizon"
  Tab 3: "Goa Marriott"

Hotel photo card (full-width, rounded, with image):
  - Left arrow (previous) and right arrow (next) navigation buttons on photo
  - Distance/status badge (top-left of photo): e.g. "Primary Wedding Venue" or "2 mins (Connected Property)"
  - Gradient overlay on photo bottom

Below photo:
  - Hotel type/category label (small uppercase): e.g. "LUXURY PORTUGUESE HERITAGE SUITES"
  - Hotel full name (serif heading): e.g. "Taj Cidade de Goa Heritage"
  - Amenities list (bullet-separated): e.g. "Direct Beachfront Access • Sea-Facing Heritage Balconies • Jiva Wellness Spa"

Courtesy Code row:
  - Label: "Courtesy Code:"
  - Code value (monospace, bold): e.g. "MRADULSHREYA2027"
  - Copy button (small, with copy icon → changes to checkmark + "Copied" on click)

"Book Suite" button (external link, with Building icon and ExternalLink icon)

Pagination dots (3 dots, active dot is wider)

#### HOTEL DETAILS:

Hotel 1 — Taj Cidade de Goa Heritage:
  Type: Luxury Portuguese Heritage Suites
  Status: Primary Wedding Venue
  Courtesy Code: MRADULSHREYA2027
  Amenities: Direct Beachfront Access, Sea-Facing Heritage Balconies, Jiva Wellness Spa
  Website: https://www.tajhotels.com/en-in/taj/taj-cidade-de-goa-heritage/

Hotel 2 — Taj Cidade de Goa Horizon:
  Type: Contemporary Coastal Resort
  Distance: 2 mins (Connected Property)
  Courtesy Code: MRADULSHREYA2027
  Amenities: Rooftop Horizon Pool, Mandovi Bay Vistas, Curated Specialty Dining
  Website: https://www.tajhotels.com/en-in/taj/taj-cidade-de-goa-horizon/

Hotel 3 — Goa Marriott Resort & Spa:
  Type: Miramar Waterfront Sanctuary
  Distance: 8 mins to Taj Heritage
  Courtesy Code: MSWEDDING
  Amenities: Bayview Cabanas, Waterfront Dining, Complimentary Shuttle
  Website: https://www.marriott.com/en-us/hotels/goimc-goa-marriott-resort-and-spa/

### Interactions
- Clicking tabs switches hotel shown.
- Clicking photo arrows cycles through hotels.
- Copying courtesy code changes button to "Copied" state for 2.5 seconds.
- "Book Suite" opens hotel website in new tab.
- Pagination dots are tappable.


---

## 13. Section 9 — Our Love Story

### Purpose
Tells the couple's love story through 4 story milestones in a swipeable carousel.

### Background
Asset: story-romantic-rose-bg.png (full-screen romantic illustrated rose background)

### Content

Eyebrow: "✦ OUR JOURNEY ✦"
Calligraphy heading: "Our Love Story"
Italic quote: "In all the world, there is no heart for me like yours."

Material 3 Hero Carousel — horizontally swipeable card carousel:
  - Active card is large and fully visible (center)
  - Adjacent side cards are partially visible (peeking in from left/right), smaller and dimmer
  - Side cards can be tapped to navigate to them

4 milestones:

Milestone 1:
  Badge (top-left of active card): Heart icon + "Summer 2024"
  Chapter: "Chapter I"
  Year: Summer 2024
  Title: "A Serendipitous Coffee"
  Description: "A brief morning coffee in Paris that blossomed into hours of effortless laughter, deep conversation, and an instant, quiet certainty."
  Photo: Couple at coffee / romantic scene (Unsplash placeholder)

Milestone 2:
  Badge: Heart icon + "Winter 2025"
  Chapter: "Chapter II"
  Year: Winter 2025
  Title: "The Starlit Proposal"
  Description: "On a breathtaking coastal evening under the stars, Mradul got down on one knee, and Shreya whispered the easiest 'Yes' of her life."
  Photo: Proposal / romantic coastal scene (Unsplash placeholder)

Milestone 3:
  Badge: Heart icon + "Autumn 2026"
  Chapter: "Chapter III"
  Year: Autumn 2026
  Title: "Building Our Shared Dream"
  Description: "From spontaneous road trips to building our favorite memories together, every day has been filled with laughter, partnership, and joy."
  Photo: Happy couple outdoors (Unsplash placeholder)

Milestone 4:
  Badge: Heart icon + "February 2 & 3"
  Chapter: "Chapter IV"
  Year: February 2 & 3
  Title: "Beginning Forever in Goa"
  Description: "Surrounded by our dearest family and friends at Taj Heritage, we step hand in hand into the greatest chapter of our lives."
  Photo: Wedding celebration (Unsplash placeholder)

Below carousel:
  - Chapter + Year label: e.g. "Chapter I • Summer 2024"
  - Milestone title (serif heading): e.g. "A Serendipitous Coffee"
  - Romantic narrative description text

Pill/dot pagination indicators (4 dots, active is wider pill)

Left and Right arrow navigation buttons floating on carousel

### Interactions
- Swipe left/right (touch) or drag (mouse) to navigate between milestones
- Tapping side (peeking) cards jumps to that milestone
- Left/right arrow buttons navigate
- Pagination dots are tappable
- Photo card has ambient gradient overlay (dark at bottom, lighter at top)
- Side cards are semi-transparent (75% opacity) and gain opacity on hover

---

## 14. Section 10 — Our Families

### Purpose
Introduces and honors both families — the Agrawals (groom's) and the Sharmas (bride's).

### Background
Asset: story-romantic-rose-bg.png (reused)

### Content

Eyebrow: "✦ WITH BLESSINGS & LOVE ✦"
Calligraphy heading: "Our Families"
Italic quote: "Two families united in love, friendship, and shared celebration."

Two family cards (shadcn glassmorphism style):

Card 1 — Groom's Family [Users icon] [Badge: "Groom's Side"]
  Parents: Mrs. Sunita & Mr. Rajesh Agrawal
  Supporting text: "Along with grandparents, siblings & extended family"
  Family note: "With heartfelt warmth and joy, we welcome you to join us in blessing Mradul as he embarks on this sacred journey of companionship and love."

Card 2 — Bride's Family [Users icon] [Badge: "Bride's Side"]
  Parents: Mrs. Anita & Mr. Suresh Sharma
  Supporting text: "Along with grandparents, siblings & extended family"
  Family note: "With immense love and gratitude, we invite you to share our happiness and shower your dearest blessings on Shreya as she begins her new chapter."

Bottom blessing box (light card):
  Quote: "Your presence, smiles, and warm blessings are the greatest gifts we could ever ask for."

---

## 15. Section 11 — Wedding Helpdesk

### Purpose
Provides direct contact information for the wedding hospitality and travel teams.

### Background
Asset: venues-botanical-arch-bg.png (reused)

### Content

Eyebrow: "✦ 24/7 SUPPORT ✦"
Calligraphy heading: "Wedding Helpdesk"
Italic quote: "Our dedicated hospitality team is available round-the-clock to assist you with anything in Goa."

Two contact cards (shadcn style):

Contact 1:
  Title: "Hospitality & Guest Concierge"
  Badge: "Available"
  Contact name: Karan Agrawal & Team
  Role: Room check-in, resort coordination, stay requests
  Phone: +91 98765 43210
  Actions:
    - Copy phone number button (icon changes to checkmark + "Copied" briefly)
    - WhatsApp button (green #25D366): opens WhatsApp with pre-filled message about wedding stay

Contact 2:
  Title: "Travel & Airport Shuttle Desk"
  Badge: "Available"
  Contact name: Rahul Sharma & Logistics Team
  Role: Airport pick-ups, Dabolim / Mopa cabs, local transit
  Phone: +91 98765 43211
  Actions:
    - Copy phone number button
    - WhatsApp button: opens WhatsApp with pre-filled message about airport transfer

Email/Resort info row (below cards):
  Mail icon + "helpdesk@mradulwedsshreya.com"
  Right label: "Taj Helpdesk"

### Interactions
- Copy button copies phone number to clipboard; shows "Copied" state for 2 seconds
- WhatsApp button opens WhatsApp in new tab with pre-written message

---

## 16. Section 12 — The Banquet Menu

### Purpose
Displays the full wedding banquet menu in an elegant editorial layout.

### Background
Asset: menu-ribbon-lily-frame-bg.png (illustrated satin ribbon and lily frame)

### Content

Eyebrow: "✦ DINING ✦"
Calligraphy heading: "The Banquet Menu"
Italic quote: "A four-course feast celebrating coastal delicacies and fine wine pairings."

Full written menu in 3 courses, each with hairline dividers:

--- STARTERS ---
Dish 1: Burrata & Peach Carpaccio
  Description: Aged Modena balsamic pearls, wild arugula, toasted pine nuts.

Dish 2: Maine Lobster Bisque
  Description: Cognac infusion, fresh tarragon, lemon crème fraîche.

--- MAIN ENTRÉES ---
Dish 1: Pan-Seared Chilean Sea Bass
  Description: Saffron risotto, braised fennel, champagne beurre blanc.

Dish 2: Herb-Crusted Prime Filet Mignon
  Description: Truffle pomme purée, wild chanterelles, Cabernet Franc jus.

Dish 3: Wild Forest Mushroom Ravioli (V)
  Description: Handmade pasta, shaved winter truffles, brown butter sage.

--- DESSERT ---
Dish 1: Tahitian Vanilla & Lemon Raspberry Cake
  Description: Artisan layered sponge, buttercream, fresh berry coulis.

Footer footnote:
  "* Dietary preferences and allergies accommodated via RSVP"

Course headers have decorative hairline lines on both sides of the course name.

---

## 17. Section 13 — Gifts & Contributions

### Purpose
Provides guests with a beautiful, interactive "wishing well" for gifting. Has two states.

### Background
Asset: gifts-drapery-giftbox-frame-bg.png

### Content

Eyebrow: "✦ WISHING WELL ✦" (glows gold when revealed)
Calligraphy heading: "Gifts & Contributions" (subtle glow effect when revealed)
Italic quote: "Your love and presence on our wedding day is the greatest gift of all."

#### STATE 1 — Initial (Before Revealing)
Larger editorial paragraph:
  "If you wish to honor us with a gift, a warm contribution toward our honeymoon and new beginning is deeply appreciated."

Large gift button:
  - Gift box icon (in a circular warm-brown background; turns white on hover)
  - Button label: "SEND A WEDDING GIFT"
  - Sub-label: "✦ Tap to open wishing well ✦"

Footer hint: "With heartfelt gratitude for celebrating our love"

#### STATE 2 — Revealed (After Tapping Gift Button)
Confetti burst fires on reveal.

"Leave a Blessing" form card (light glassmorphism):
  Header: Heart icon + "LEAVE A BLESSING" + "Optional Note" label
  Fields:
    - First Name * (required)
    - Last Name
    - Warm Note & Sent Amount (textarea, e.g. "Share a sweet blessing or sent amount (e.g., $150 via Zelle)...")
  Submit button: "SEND WARM NOTE" (with Send icon)

After submission: form replaced by confirmation banner:
  Green check icon + "NOTE RECORDED WITH LOVE!"
  Text: "Thank you, [Name]! Your heartfelt wishes mean the world to us."

"Direct Transfer Details" section divider

Bank details chips (4 rows), each copyable:
  1. Account Name: "Mradul & Shreya Wedding Registry"
  2. UPI / GPay / PhonePe: "mradulandshreya@upi"
  3. Bank Name: "HDFC Bank Ltd"
  4. Account Number: "5020 0089 4512 34"

Each chip has:
  - Small uppercase label
  - Value (serif, bold)
  - Copy button (pill shape; turns green "Copied!" with checkmark for 2.5s after tap)
  - Copying triggers a confetti burst

"← Close Wishing Well" text link at bottom

Footer hint when revealed: "✨ Tap copy on any account details for celebration confetti ✨"

### Interactions
- Gift button tap: reveals bank details + blessing form, fires confetti
- Copying any bank detail: shows "Copied!" state for 2.5s, fires confetti
- Submitting blessing form: shows thank-you banner, fires confetti
- Close Wishing Well: returns to initial state

---

## 18. Section 14 — Moments & Memories (Gallery)

### Purpose
A photo gallery of the couple's favorite moments together.

### Background
Solid warm parchment (#FAF7F2) — no illustrated background in this section.

### Content

Eyebrow label: "MEMORIES" (small caps, wide tracking, warm brown)
Calligraphy heading: "Moments & Memories"
Italic quote: "A glimpse into our favorite chapters together."

Full-width photo viewer (tall portrait frame, rounded corners):
  - Displays one photo at a time
  - Dark gradient overlay at bottom of photo
  - Photo caption displayed at bottom of photo (italic, white, serif)
  - Left arrow button (floating, dark frosted glass)
  - Right arrow button (floating, dark frosted glass)

5 photos (currently Unsplash placeholders — should be replaced with real photos):
  Photo 1: Caption "Sunset stroll along the Mediterranean coastline"
  Photo 2: Caption "Quiet moments under the olive groves"
  Photo 3: Caption "Laughter, sunshine, and seaside breezes"
  Photo 4: Caption "The unforgettable proposal moment"
  Photo 5: Caption "Dancing under the twilight canopy"

Pagination dots below photo (5 dots; active is a wider pill, inactive are small circles)

### Interactions
- Left/right arrow buttons navigate between photos
- Pagination dots are tappable
- Photo transitions smoothly (700ms)
- On mobile: same layout, single photo at a time

---

## 19. Section 15 — If You Could Have 1 Thing... (Wedding Wish Section)

### Purpose
An interactive guest wishlist and community wish wall. Guests submit one wish for the wedding;
others can upvote. Creates playful engagement and gives the couple ideas.

### Background
Asset: menu-ribbon-lily-frame-bg.png (reused)

### Content

Eyebrow: "✦ GUEST WISHLIST ✦"
Calligraphy heading: "If You Could Have 1 Thing..."
Italic quote: "What is that ONE thing you would love to experience at Mradul & Shreya's wedding?"

Interactive card (shadcn style):

Quick-Pick label: "QUICK-PICK OR TAP YOUR CHOICE:"

6 preset wish buttons (pill/chip style):
  1. "🍜 2 AM Midnight Maggi & Masala Chai Bar"
  2. "🎶 Guaranteed Sangeet Dance Floor Banger"
  3. "🍹 Signature Goan Coconut / Chili Cocktail"
  4. "📸 Polaroid Photo Booth with Quirky Props"
  5. "🍨 Late-Night Artisanal Kulfi & Jalebi Counter"
  6. "🏖️ Post-Wedding Beach Volleyball & Coconut Water"
  Tapping a preset fills the custom wish textarea with that wish.
  Selected preset button turns warm brown/filled; others remain outlined.

Form (below a hairline divider):
  Field 1 — "Your Name" (required): placeholder "e.g. Priya or The Mehra Family"
  Field 2 — "Your 1 Wedding Wish (or customize above)": textarea, placeholder "Type any song, late-night snack, special request, or fun idea..."
  Submit button: Sparkles icon + "SUBMIT MY WEDDING WISH"

After submission:
  Green success banner: checkmark + "Wish added to Mradul & Shreya's wedding wishlist! 🎉"
  Confetti burst fires.
  The new wish immediately appears at the top of the Guest Wish Wall below.

Guest Wish Wall section (below the card):
  Header row: "GUEST WISH WALL" (left) + "Tap ❤️ to upvote" (right, muted)

Pre-loaded community wishes (3 initial entries):
  1. Aman & Riya — "Midnight 2 AM Maggi & Cutting Chai station by the pool!" — 14 votes
  2. Sneha K. — "Retro 90s Bollywood dance segment during Sangeet afterparty!" — 19 votes
  3. Rohan Sharma — "Signature spicy mango feni cocktail at sunset pheras." — 8 votes

Each wish card shows:
  - Guest name (bold, small uppercase, warm brown)
  - Wish text in quotes (serif, dark brown)
  - Upvote button (heart icon + vote count):
    - Default state: outlined pill button
    - Voted state: filled warm brown pill, white text

### Interactions
- Tapping a preset: fills wish textarea, highlights selected preset
- Typing in textarea: clears any selected preset
- Submitting form: adds wish to top of wall, fires confetti, shows success banner
- Upvote button: toggles vote (adds or removes 1 vote), changes button appearance

---

## 20. Section 16 — Frequently Asked Questions

### Purpose
Answers common guest questions in an expandable accordion.

### Background
Solid warm parchment (#FAF7F2) — no illustrated background.

### Content

Eyebrow: "QUESTIONS" (small caps)
Calligraphy heading: "Frequently Asked"
Italic quote: "Everything you need to know before joining our celebration."

5 FAQ items (open-style accordion with hairline dividers):

Q1: Which airport should I fly into?
A1: Dabolim Airport (GOI) is the closest and preferred airport (~28 km / 40-45 mins from Taj Heritage). Manohar International Airport in Mopa (GOX) is also available (~48 km / 75 mins). Pre-paid airport taxis, GoaMiles, and coordinated wedding shuttles are available.

Q2: What are the check-in and check-out timings?
A2: Check-in is at 2:00 PM and check-out is at 11:00 AM. If you arrive early, our Wedding Welcome Lounge is open from 10:00 AM with luggage safe-keeping and refreshments while rooms are readied.

Q3: What is the dress code for each celebration?
A3: Day 1 Haldi: Sunshine yellows & floral prints. Day 1 Sangeet: Indo-Western glam, sequins & jewel tones. Day 2 Pheras: Heritage pastels & traditional weaves. Day 2 Gala Dinner: Black tie, cocktail gowns & evening suits.

Q4: Will vegetarian and Jain food options be available?
A4: Yes, absolutely! We have dedicated Pure Vegetarian and Jain culinary counters (prepared without root vegetables), along with multi-cuisine and live street food stations at all functions.

Q5: Is valet parking available at Taj Heritage?
A5: Yes, complimentary 24/7 valet parking and golf buggy transit are available at the resort main porch for all wedding guests.

### Interactions
- Tapping a question row expands/collapses the answer
- Chevron icon rotates 180° when expanded
- First question is expanded by default (first FAQ open on load)
- Only one FAQ can be open at a time (tapping another closes the current one)

---

## 21. Section 17 — RSVP

### Purpose
The primary guest response form. Collects attendance, guest count, event preferences, dietary needs, song requests, and blessings.

### Background
Asset: venues-botanical-arch-bg.png (reused) with a stronger overlay (~45% warm parchment)

### Content

Eyebrow: "✦ CELEBRATE WITH US ✦"
Calligraphy heading: "Kindly RSVP"
Italic quote: "Please let us know if you will be joining our festivities at Taj Heritage, Goa."

RSVP Form Card (shadcn glassmorphism card, full-width):

#### FORM FIELDS:

1. Full Name * (text input)
   Label: "FULL NAME *"
   Placeholder: "Enter your full name"

2. Phone Number * (country code select + number input)
   Label: "PHONE NUMBER (FOR WHATSAPP UPDATES) *"
   Country code options: 🇮🇳 +91 (India), 🇺🇸 +1 (US/CA), 🇬🇧 +44 (UK), 🇦🇪 +971 (UAE), 🇸🇬 +65 (Singapore), 🇦🇺 +61 (Australia)
   Phone input placeholder: "Mobile number"

3. Email Address * (email input)
   Label: "EMAIL ADDRESS *"
   Placeholder: "your.email@example.com"

4. Will You Attend? * (two segmented pill buttons, full-width 2-column grid)
   Option A: CheckCircle icon + "JOYFULLY ACCEPT" — selected = warm brown filled
   Option B: XCircle icon + "DECLINE WITH LOVE" — selected = dark sienna filled

5. (Only visible when "JOYFULLY ACCEPT" selected — sub-form below hairline divider)

   5a. Total Guests Attending (stepper control)
       Label: "TOTAL GUESTS ATTENDING"
       Sub-label: "Including yourself & family"
       Stepper: [ – ] [ count ] [ + ] (min 1, max 8)

   5b. Events You Will Attend (multi-select 2x2 grid of event cards)
       Label: Calendar icon + "EVENTS YOU WILL ATTEND"
       4 event tiles (all pre-selected by default):
         - "Day 1: Haldi Ceremony" / date: "Feb 2 • 11:00 AM"
         - "Day 1: Sangeet Night" / date: "Feb 2 • 7:30 PM"
         - "Day 2: Royal Pheras" / date: "Feb 3 • 4:30 PM"
         - "Day 2: Gala Dinner" / date: "Feb 3 • 8:30 PM"
       Selected tile: warm brown tinted background + brown border + checkmark in corner
       Deselected tile: white/light background, muted border

   5c. Dietary & Food Preferences (multi-select chip buttons)
       Label: Utensils icon + "DIETARY & FOOD PREFERENCES"
       Pill chips (multi-select, selected turns warm brown):
         - Vegetarian (pre-selected)
         - Pure Jain (No Root Veg)
         - Non-Vegetarian
         - Vegan
         - Gluten-Free
         - Nut Allergy
       Free-text input below chips:
         Placeholder: "Other dietary restriction or food allergy..."

   5d. Sangeet Song Request for DJ (optional text input)
       Label: Music icon + "SANGEET SONG REQUEST FOR DJ (OPTIONAL)"
       Placeholder: "Song title & artist you want to dance to..."

6. Blessings & Message for Mradul & Shreya (textarea)
   Label: Heart icon (crimson) + "BLESSINGS & MESSAGE FOR MRADUL & SHREYA"
   Placeholder: "Share your warm wishes and love..."

7. Submit button (full-width, warm brown, bold uppercase):
   Send icon + "CONFIRM MY RSVP"

#### CONFIRMATION STATE (after successful submission):
Card content is replaced with a centered confirmation view:
  - Large green circular check icon with green ring border
  - Calligraphy text: "Thank You, [Guest Name]!"
  - Message (if attending): "Your RSVP is joyfully confirmed for [N] guest(s). Mradul & Shreya cannot wait to celebrate with you in Goa!"
  - Message (if declining): "We will miss your presence dearly, but thank you for your warm love and blessings for Mradul & Shreya!"
  - Confetti burst fires on submission
  - Text link: "Modify your RSVP details" (returns to form)

### Interactions
- "Joyfully Accept" reveals guest count, event selection, dietary, and song request sub-fields
- "Decline With Love" hides the sub-fields
- Guest count stepper: [ – ] decrements (min 1), [ + ] increments (max 8)
- Event tiles: tap to toggle selected/deselected
- Dietary chips: tap to toggle selected/deselected (multiple can be selected)
- Submit: validates required fields, shows confirmation, fires confetti

---

## 22. Footer

### Purpose
Closing section with monogram, couple names, a final romantic note, family credits, and a "Back to Top" button.

### Background
Solid warm parchment (#FAF7F2) with a subtle top border line.

### Content (top to bottom, centered)

1. Monogram crest image (monogram-ms-crest.png):
   Displayed as a circle, with hover scale-up animation.

2. Couple names in calligraphy:
   "Mradul & Shreya"

3. Closing note (italic serif):
   "With boundless love, joy, and gratitude, our families eagerly look forward to celebrating this sacred new beginning with you by our side in beautiful Goa."

4. Date and venue line (with heart icon):
   Heart icon (crimson/red) + "February 2 & 3 • Taj Heritage, Goa"

5. "Back To Top" button:
   ChevronUp icon + "BACK TO TOP"
   Outlined warm brown button; on hover fills with warm brown background (white text)
   Scrolls page back to the top smoothly

6. Credit line (very small, muted, uppercase serif):
   "WITH LOVE • THE AGRAWAL & SHARMA FAMILIES"

### Interactions
- "Back To Top" button smoothly scrolls to the top of the page.
- Monogram scales up slightly on hover.

---

## 23. Additional Components

### Chapter Dividers
Between some sections, a minimal decorative divider may appear.
Not identifiable in detail from current implementation.

### Audio Player
A background audio player component exists (AudioPlayer.jsx).
It plays background-music.mp3 (the ambient wedding track).
Initiated by the tap on the opening transition.
Not visually prominent — runs in the background.

### Website Share Section
A section exists for sharing the wedding website URL.
Contains the wedding hashtag #MradulWedsShreya.
Allows copying the website link.
Not fully documented — section was not read in detail.

---

## 24. Section Order (Complete Page Flow)

1. Opening Transition (tap-to-open, full-screen overlay)
2. Hero — Mradul & Shreya names, dates, RSVP button
3. Countdown — Live timer + Add to Calendar
4. Celebration Schedule — Day 1 / Day 2 tab switcher
5. Attire & Dress Code — 4-event tab switcher
6. Venues — Venue photo cards
7. Airports & Reaching Goa — Dabolim / Mopa tab switcher
8. Important Notes — 4 info cards
9. Accommodations — 3-hotel carousel
10. Our Love Story — 4-milestone swipeable carousel
11. Our Families — 2 family cards
12. Wedding Helpdesk — 2 contact cards + email
13. The Banquet Menu — Full written menu
14. Gifts & Contributions — Wishing well (2 states)
15. Moments & Memories — 5-photo gallery
16. If You Could Have 1 Thing — Wish form + community wall
17. FAQ — 5-item accordion
18. Kindly RSVP — Full RSVP form
19. Footer — Monogram, closing note, families credit

---

## 25. Mobile / Responsive Observations

- The entire site is designed for mobile-first viewing (portrait, 390-430 px wide).
- On desktop, the website column (430-460 px) is centered with dark surrounding space.
- All section backgrounds fill their container fully regardless of screen size.
- Event cards in the Schedule section stack vertically (one per row).
- Airport tab content fills the full card width.
- Accommodations hotel tabs are spaced horizontally.
- The Story carousel shows 1 large active card + 2 peeking side cards.
- The RSVP event grid is always 2 columns.
- The Dietary chips wrap naturally into multiple rows.
- On very small screens (below ~380px): inner padding reduces slightly.

---

## 26. Final Asset Reference

All assets should be located in: website-rebuild-reference/assets/

| Filename | Used In |
|----------|---------|
| opening-transition-parchment-bg.png | Section 1 (Opening Transition) background |
| hero-bg-couple.png | Section 2 (Hero) full-bleed background photo |
| countdown-floral-arch-bg.png | Section 3 (Countdown) background |
| schedule-floral-arch-bg.png | Section 4 (Schedule) background |
| attire-coastal-terrace-arch-bg.png | Section 5 (Attire) background |
| attire-clothing-illustration.png | Section 5 (Attire) outfit illustration |
| attire-floral-crest-header.png | Section 5 (Attire) header crest |
| venues-botanical-arch-bg.png | Sections 6, 7, 11, 16, 17 (reused) |
| accommodations-lantern-arch-bg.png | Sections 8, 9 |
| story-romantic-rose-bg.png | Sections 10, 11 |
| menu-ribbon-lily-frame-bg.png | Sections 13, 15 |
| gifts-drapery-giftbox-frame-bg.png | Section 14 |
| opening-scroll-top-ornament.png | Opening Transition (scroll decoration) |
| opening-scroll-body.png | Opening Transition (scroll decoration) |
| opening-scroll-bottom-ornament.png | Opening Transition (scroll decoration) |
| monogram-ms-crest.png | Countdown section crest + Footer crest |
| favicon.svg | Browser tab icon |
| icons-sprite.svg | UI icon sprite |
| opening-lovebirds-icon.svg | Opening Transition (love birds illustration) |
| opening-lovebirds-icon-alt.svg | Opening Transition (alternative) |
| background-music.mp3 | Site-wide ambient audio |

---

*End of Wedding Website Complete Rebuild Specification*
*Document covers: Mradul & Shreya • Taj Heritage, Goa • February 2 & 3*
