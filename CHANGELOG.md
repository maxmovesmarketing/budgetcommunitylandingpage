# Changelog

## [2025-02-14]
### Changed
- Reverted Hero section to original state to maintain stable design

## [2025-02-14] - Added Login Page
- Created new Login page component
- Added email/password form with validation
- Implemented social login options (Google, Facebook)
- Styled according to design system guidelines

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.4] - 2025-02-13

### Added
- New FAQ section with common questions and answers

### Changed
- Added floating sticky button with availability notice
- Removed WhatsApp button from CallToAction section and component
- Updated TimeForChange section title to "Huidige en gewenste situatie"
- Fixed TypeScript errors in TimeForChange component
- Simplified layout for better user experience
- Updated login button to use heading font
- Fixed syntax errors in mobile menu
- Fixed TypeScript errors in Navbar and Features components
- Removed submenu code from navigation
- Applied heading font to mobile menu items
- Removed arrow icons from buttons
- Adjusted button padding and minimum width for better text fit
- Removed gap between button text and icons

## [0.3.3] - 2025-02-13

### Changed
- Updated navigation menu items to new structure
- Applied heading font to navigation items and buttons
- Made navigation and button text uppercase
- Updated logo to new version
- Changed heading font to PPAgrandir
- Changed body font to custom font
- Updated all font references in components

## [0.3.2] - 2025-02-13

### Changed
- Removed floating image cards from the animated hero section for a cleaner design

## [0.3.1] - 2025-02-13

### Changed
- Removed floating image cards from the Hero section for a cleaner design

## [0.3.0] - 2025-02-11

### Added
- New interactive Hero section with floating images and dynamic text
- Added TextRotate component for animated text transitions
- Added Floating and FloatingElement components for parallax effects
- Added useMousePositionRef hook for smooth mouse tracking

## [0.2.0] - 2025-02-09

### Focus Areas
- Current focus: Styling and visual refinement of all components
- Previous: Completed initial site structure and component layout

### Changed
- Removed old Hero component in favor of animated-hero
- Updated Hero section:
  - Added TAN-PARADISO font for main heading
  - Improved typography and spacing
  - Enhanced visual hierarchy
- Reduced heading line height in `animated-hero.tsx`:
  - Changed `leading-[1.1]` to `leading-[1.05]` for the main h1 heading for a tighter, more compact appearance as per updated typography guidelines.
- Updated Reviews section with new design system:
  - Added motion animations for cards
  - Updated color scheme to match style guide
  - Added consistent button styling
  - Improved typography and spacing

- Enhanced TimeForChange section:
  - Added staggered animations for problem points
  - Updated background to soft beige (#E4E2DC)
  - Implemented new button system with rounded corners
  - Improved layout and spacing following design system
  - Added motion effects for better user engagement

- Revamped TrackRecord section:
  - Added white stat cards with hover effects
  - Updated background to soft beige (#E4E2DC)
  - Added staggered animations for stats
  - Improved typography and spacing
  - Added descriptive subtitle
  - Changed number separator to Dutch format (.)

- Redesigned WhyChooseUs section:
  - Added white benefit cards with shadow effects
  - Updated background to soft beige (#E4E2DC)
  - Added staggered animations for benefits list
  - Improved button styling and layout
  - Enhanced typography and spacing
  - Added motion effects for image and content

- Updated PricingPlans section:
  - Switched to white cards on soft beige background
  - Added brown ring highlight for popular plan
  - Implemented consistent button system
  - Added staggered animations for features
  - Improved typography and spacing
  - Added green checkmarks for features
  - Enhanced mobile responsiveness

- Redesigned Roadmap section:
  - Added white content cards with shadow
  - Updated background to soft beige (#E4E2DC)
  - Changed timeline line color to brown
  - Added slide-in animations for content
  - Improved typography and spacing
  - Enhanced mobile responsiveness

- Enhanced CallToAction section:
  - Updated to brown background with subtle video overlay
  - Added descriptive subtitle
  - Implemented consistent button system
  - Added WhatsApp button option
  - Improved typography and spacing
  - Enhanced mobile responsiveness

- Revamped Footer section:
  - Updated to brown background (#6D5656)
  - Added slide-in animations for content
  - Added hover effects for links with arrow indicators
  - Styled social media icons with circular backgrounds
  - Improved typography and spacing
  - Enhanced mobile responsiveness

- Made the animated hero section fully mobile-first responsive:
  - Default layout is stacked vertically (flex-col) and full width on mobile.
  - Added px-4 for mobile padding, increased at sm/md breakpoints.
  - Removed -translate-x-1/2 and left-1/2 for proper mobile centering.
  - Adjusted top margin for mobile (mt-8), increasing at sm/md for better spacing.
  - Ensured all containers are w-full by default, with progressive enhancement at larger breakpoints.

## [0.1.0] - 2025-02-09

### Added
- Initial project setup with Vite, React, and TypeScript
- Integrated Tailwind CSS with custom configuration
- Implemented shadcn/ui components
- Created responsive design system
- Added custom color palette and design tokens
- Established mobile-first design approach
- Created style guide documentation
- Set up base layout components
- Implemented dark mode support
- Added animated track record stats section with Dutch content
- Created reviews section with client testimonials
- Added "Tijd voor verandering" section with image and Dutch content
- Added "Waarom kies je voor onze community" section with checkmarks and Dutch content
- Added pricing plans section with 3 and 6 month subscription options
- Added animated roadmap section with 5 key steps
- Added call-to-action section with background video
- Added footer with contact information and social links
- Restructured codebase into organized components
- Fixed React imports and path aliases in all components
- Added utility functions and custom hooks
- Implemented count-up animation for statistics
- Added financial problems section with interactive elements and Dutch content
- Updated design system with orange accent colors and consistent styling
- Implemented new button styles with orange primary and outlined secondary variants
- Updated style guide with comprehensive documentation of new design system

## [Unreleased]
### Changed
- Removed the background GIF and white overlay from the hero section in `animated-hero.tsx`.
  - Hero section now displays without any background visuals for a cleaner look.
- Switched website font to Poppins:
  - Added local Poppins font files via @font-face in App.css.
  - Set Poppins as the default font-family for html, body, and all Tailwind font utilities (font-sans, font-display, etc.).
  - Updated tailwind.config.ts to use Poppins for display and sans.
- Set the <p> element in the Hero section (animated-hero.tsx) to use the Poppins font (Regular, 400) via Tailwind and inline style. This ensures it loads from public/uploads/Poppins (1)/Poppins-Regular.ttf as configured in @font-face. Typography is now consistent with the user's request for this element.
- The <p> element in the Hero section now uses Poppins Regular (400) from public/uploads/Poppins (1)/Poppins-Regular.ttf and displays the updated Dutch text: "Persoonlijke budgetcoaching, praktische budgettools en een betrokken community. Alles op één plek!"
- All <p> elements in the Features section now use the Poppins Regular font (400) via Tailwind class font-[Poppins] font-normal and inline fontFamily style. This ensures visual consistency and matches @font-face config for Poppins-Regular.ttf.
- The h2 heading in the Features section now uses Poppins Black (900) via Tailwind classes font-[Poppins] font-black and inline style fontFamily/fontWeight. This matches Poppins-Black.ttf for maximum heading emphasis and visual impact.
- The h2 heading in the Features section now reads: 'Welkom bij The Budget Community' (was: 'Waarom The Budget Community?').
- The h2 heading in the TimeForChange section now uses Poppins Black (900) via Tailwind classes font-[Poppins] font-black and inline style fontFamily/fontWeight, matching the Features section heading for strong, consistent emphasis.
- The h2 headings in the following sections now use Poppins Black (900) via Tailwind classes font-[Poppins] font-black and inline style fontFamily/fontWeight, matching the Features and TimeForChange sections for strong, consistent emphasis:
  - Roadmap
  - Reviews
  - PricingPlans
  - FAQ
- The h1 heading and animated titles in the Hero section now use Poppins Black (900) via Tailwind classes font-[Poppins] font-black and inline style fontFamily/fontWeight, matching all other main headings for bold, modern emphasis.
- All Button components now use Poppins Bold (700) via Tailwind classes font-[Poppins] font-bold and inline style fontFamily/fontWeight. This ensures all UI buttons use Poppins-Bold.ttf for consistent, bold button typography across the site.
- All navigation links and the login button in the Navbar now use Poppins Bold (700) via Tailwind classes font-[Poppins] font-bold and inline style fontFamily/fontWeight. This ensures nav consistency with Poppins-Bold.ttf for all main nav elements.
- All Navbar navigation links (<a> elements) now use text-base (16px) to match button text size, ensuring visual consistency between nav links and buttons.
- Removed the INLOGGEN button from the Navbar action buttons area as requested. Only the main call-to-action button remains visible in the Navbar.
- The intro <p> element ("Grip op je geld ...") in the Features section has been removed as requested. Only the heading and feature cards remain visible.
- The background color of the main absolute div in the Hero section is now set to #F2F1EB for a softer, modern look as requested.
- The background color of the main Index page div is now set to #F2F1EB, matching the Hero section and providing a consistent, soft site background.
- The floating sticky button label on the Index page now reads: 'Tijdelijk gratis budgetscan' (was: 'Nog maar 1 plek beschikbaar in maart').

## 2025-04-18

- Hero h1 veel kleiner gemaakt: text-xl sm:text-2xl md:text-3xl (was text-3xl sm:text-4xl md:text-6xl) voor betere visuele balans en minder dominante titel.
