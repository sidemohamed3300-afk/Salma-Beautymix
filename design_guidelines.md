# Design Guidelines: Alam Salma for Mixtures

## Design Approach
**Reference-Based: SHEIN E-commerce Pattern** - Modern, feminine, visual-rich shopping experience optimized for beauty products with WhatsApp-first ordering model.

## Core Design Principles

### Layout System
- **Container widths**: max-w-7xl for main content, full-width for hero sections
- **Spacing units**: Tailwind 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- **Grid patterns**: 2-4 column product grids (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- **Section padding**: py-12 mobile, py-20 desktop

### Typography Hierarchy
**Primary Font**: Poppins (Google Fonts) - modern, friendly, feminine  
**Secondary Font**: Inter for body text

- **H1 (Hero)**: 3xl md:5xl, font-bold, tracking-tight
- **H2 (Section Headers)**: 2xl md:4xl, font-semibold
- **H3 (Product Names)**: lg md:xl, font-medium
- **Body**: base, font-normal, line-height relaxed
- **Buttons**: sm md:base, font-semibold, uppercase tracking-wide

### Component Library

#### Header/Navigation
- Fixed top navigation with blur backdrop
- Logo left, category navigation center, Light/Dark toggle + WhatsApp icon right
- Mobile: Hamburger menu with slide-out drawer
- Sticky on scroll with shadow elevation

#### Hero Section
- **Full-width carousel** with 2-3 rotating banners
- Images: Lifestyle beauty product photography, models with natural mixtures
- Overlay: Gradient backdrop for text readability
- CTA buttons with blur background effect (backdrop-filter blur-md)
- Height: 60vh mobile, 80vh desktop

#### Product Cards (Critical Component)
- **Card structure**: Rounded corners (rounded-xl), shadow on hover
- **Image**: 1:1 aspect ratio, rounded-t-xl, object-cover
- **Content padding**: p-4
- **Product name**: font-semibold, truncate after 2 lines
- **Description**: text-sm, 3 line clamp, muted opacity
- **Order Now Button**: Full-width, prominent, rounded-lg, py-3
- **Hover state**: Card lifts with shadow-lg transition
- No price display anywhere

#### "Why Choose Us" Section
- 4-column grid (mobile stacks to 1)
- Icon + headline + short description format
- Icons: Leaf/nature, heart/care, check/quality, star/reviews themes
- Centered layout with generous spacing

#### Testimonials
- 3-column card grid
- Each card: Customer photo (circular), star rating, quote, name/location
- Alternating card heights for visual interest
- Soft shadows and rounded-xl borders

#### Contact Section
- 2-column split: Contact info left, WhatsApp CTA right
- Large WhatsApp button with icon
- Business hours, social media links
- Background: Subtle pattern or gradient

### Light/Dark Mode Specifications

**Light Mode (Default)**:
- Backgrounds: White, soft pink tints (pink-50)
- Cards: White with subtle shadows
- Text: Dark gray (gray-900), muted (gray-600)
- Accents: Pink primary, green secondary

**Dark Mode**:
- Backgrounds: Dark gray (gray-900), deep pink tints (pink-950)
- Cards: gray-800 with stronger shadows
- Text: White (gray-50), muted (gray-400)
- Accents: Lighter pink/green variants for contrast

**Toggle**: Moon/sun icon in header, smooth transition-all duration-300

### Responsive Breakpoints
- Mobile-first approach
- Breakpoints: md (768px), lg (1024px), xl (1280px)
- Product grid: 1 column mobile → 2 tablet → 3-4 desktop
- Navigation: Hamburger below md, full menu above
- Hero text: Smaller sizing and centered on mobile

### Images

**Required Images**:
1. **Hero Carousel (3 images)**: Lifestyle shots of women using natural beauty products, spa-like settings with green plants, close-ups of natural mixtures/ingredients
2. **Product Images (8-12)**: Clean product photography with white/pink backgrounds, consistent 1:1 ratio
3. **Testimonial Photos (6)**: Diverse customer headshots, circular crop
4. **Why Choose Icons**: SVG icons from Heroicons (leaf, heart, shield-check, star)

### Animations (Minimal)
- Card hover lift: transform scale-105, duration-200
- Hero carousel: Fade transition, 5s interval
- Light/Dark mode: Smooth color transition-all duration-300
- Scroll reveals: Subtle fade-in for sections (intersection observer)

### WhatsApp Integration UX
- Order Now buttons: Vibrant green (#25D366 - WhatsApp brand color)
- Hover: Brightness increase, no complex effects
- Prefill message format: "Hi, I'm interested in [Product Name] from Alam Salma"
- Contact section: Large WhatsApp FAB (floating action button) on mobile

### Feminine Design Elements
- Rounded corners throughout (rounded-lg to rounded-2xl)
- Soft shadows (shadow-sm to shadow-lg)
- Pink-green color harmony with plenty of white space
- Organic shapes, flowing layouts
- Delicate border accents where appropriate
- Photography with natural lighting and botanical elements