# Style Guide

## Color Palette

### Primary Colors
- Primary: `#F97316` (Orange 500)
- Secondary: `#FFFFFF` (White)

### Accent Colors
- Orange Light: `#FFEDD5` (Orange 100)
- Orange Dark: `#EA580C` (Orange 600)
- Gray Light: `#F9FAFB` (Gray 50)
- Gray Medium: `#F3F4F6` (Gray 100)

### Text Colors
- Heading Text: `#111827` (Gray 900)
- Body Text: `#4B5563` (Gray 600)
- Light Text: `#9CA3AF` (Gray 400)

### Interactive Elements
- Primary Button: `#F97316` (Orange 500)
- Primary Button Hover: `#EA580C` (Orange 600)
- Secondary Button Border: `#111827` (Gray 900)
- Secondary Button Hover: `#F3F4F6` (Gray 100)

## Typography

### Primary Headings (Paradiso)
- Font Family: Paradiso (font-paradiso)
- Weights: Default weight
- Sizes:
  - H1: text-4xl/2.5rem md:text-6xl/4rem, leading-[1.1], uppercase
  - H2: text-3xl/1.875rem md:text-5xl/3rem, leading-[1.2]
  - H3: text-2xl/1.5rem md:text-4xl/2.5rem, leading-[1.2]
  - H4: text-xl/1.25rem md:text-2xl/1.5rem, leading-[1.3]
- Color: `#6D5656` (warm gray)
- Usage: Main section headings, hero text, important callouts

### Secondary Headings
- Font Family: SF Pro Display
- Weights: Bold (700)
- Sizes:
  - H1: 48px/3rem (md:text-5xl)
  - H2: 36px/2.25rem (md:text-4xl)
  - H3: 30px/1.875rem (md:text-3xl)
  - H4: 24px/1.5rem (md:text-2xl)
- Color: `#6D5656` (warm gray)
- Usage: Sub-sections, card headings, less prominent text

### Body Text
- Font Family: SF Pro Text
- Weights: Regular (400), Medium (500), Semibold (600)
- Sizes:
  - Large: 18px/1.125rem (text-lg)
  - Base: 16px/1rem (text-base)
  - Small: 14px/0.875rem (text-sm)
- Color: `#4B5563` (Gray 600)

## Components

### Buttons
- Primary: 
  - Background: Orange 500 (`#F97316`)
  - Text: White
  - Hover: Orange 600 (`#EA580C`)
  - Class: `bg-orange-500 text-white hover:bg-orange-600`
- Secondary: 
  - Background: Transparent
  - Border: 2px Gray 900
  - Text: Gray 900
  - Hover: Gray 100 background
  - Class: `border-2 border-gray-900 text-gray-900 hover:bg-gray-100`
- Common Styles:
  - Padding: py-3 px-8
  - Border Radius: rounded-full
  - Font: font-semibold
  - Transition: transition-colors

### Cards
- Background: White or Gray 50
- Border Radius: rounded-2xl
- Shadow: shadow-sm
- Hover Effect: Optional scale or background color change
- Padding: p-8

### Interactive Elements
- Icons: 
  - Background: Orange 100
  - Icon Color: Orange 500
  - Hover: Orange 200
  - Border Radius: rounded-full
- Transitions: All hover effects use transition-colors with duration-300

## Layout

### Spacing
- Section Padding: 96px (py-24)
- Container Max Width: 1280px (max-w-7xl)
- Container Padding: 16px (px-4)
- Grid Gaps: 
  - Default: 32px (gap-8)
  - Large: 48px (gap-12)

### Breakpoints
- Mobile: 0-767px
- Tablet: 768px-1023px (md:)
- Desktop: 1024px+ (lg:)

### Grid System
- Default: 1 column
- Tablet+: 2 columns (md:grid-cols-2)
- Desktop Content Width: 3xl (max-w-3xl)

### Section Structure
- White Sections: `bg-white`
- Alternate Sections: `bg-gray-50`
- Content Max Width: max-w-7xl mx-auto px-4
- Text Container: max-w-3xl (for better readability)

## Design Principles
- Clean, minimal aesthetic
- White space focused layout
- Subtle shadows and depth
- Typography-driven design
- Intuitive interactions

## Color Palette

### Primary Colors
- Background: Pure white (#FFFFFF)
- Text: Rich black (#1F1F1F)

### Neutral Colors
- Light Gray: (#F5F5F5) - Secondary backgrounds
- Mid Gray: (#E5E5E5) - Borders
- Dark Gray: (#737373) - Secondary text

### Accent Colors
- Primary Black: (#1F1F1F) - Primary actions
- Error: (#FF3B30) - Error states
- Success: (#34C759) - Success states

## Typography

### Font Family
- Primary: SF Pro Display
- Headings: SF Pro Display
- Monospace: SF Mono

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600

### Font Sizes
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)

## Spacing System
- Micro: 0.5rem (8px)
- Small: 1rem (16px)
- Medium: 1.5rem (24px)
- Large: 2rem (32px)
- XLarge: 4rem (64px)

## Container Widths
- Default max-width: 1440px
- Content padding:
  - Mobile: 1.5rem (24px)
  - Tablet: 2rem (32px)
  - Desktop: 4rem (64px)

## Shadows
- sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- DEFAULT: `0 1px 3px 0 rgb(0 0 0 / 0.1)`
- md: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- lg: `0 10px 15px -3px rgb(0 0 0 / 0.1)`

## Components

### Buttons
```tsx
// Primary Button (Black)
<Button variant="default" className="bg-[#1F1F1F] text-white hover:bg-[#2F2F2F]">
  Primary Action
</Button>

// Secondary Button (Light Gray)
<Button variant="secondary" className="bg-[#F5F5F5] text-[#1F1F1F] hover:bg-[#E5E5E5]">
  Secondary Action
</Button>

// Ghost Button
<Button variant="ghost" className="text-[#1F1F1F] hover:bg-[#F5F5F5]">
  Subtle Action
</Button>
```

### Cards
```tsx
<Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
  <CardHeader>
    <CardTitle className="text-[#1F1F1F]">Card Title</CardTitle>
    <CardDescription className="text-[#737373]">Card description here.</CardDescription>
  </CardHeader>
  <CardContent>
    Main content
  </CardContent>
</Card>
```

## Layout Best Practices

### White Space
- Use generous white space to create visual hierarchy
- Maintain consistent spacing between sections
- Allow content to breathe with appropriate padding

### Grid System
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>
```

### Responsive Design
```tsx
<section className="container mx-auto py-12 md:py-16 lg:py-24">
  <div className="space-y-8 md:space-y-12">
    {/* Content */}
  </div>
</section>
```

## Accessibility
- Maintain minimum contrast ratio of 4.5:1
- Use semantic HTML elements
- Implement proper focus states
- Support keyboard navigation
- Include ARIA labels where necessary

## Performance
- Optimize image loading
- Implement progressive enhancement
- Use system fonts for better performance
- Minimize layout shifts
- Optimize for Core Web Vitals
