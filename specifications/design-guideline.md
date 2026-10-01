# WCAG 2.1 Design Guidelines

## Overview

This document establishes design guidelines aligned with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines ensure our digital products are accessible to all users, including those with disabilities, while maintaining a cohesive and professional design system.

---

## 1. Visual Layout

### 1.1 Responsive Design
- **Minimum viewport width**: 320px (mobile) to support small screens
- **Breakpoints**: 
  - Mobile: 320px–479px
  - Tablet: 480px–767px
  - Desktop: 768px and above
- All layouts must be responsive and reflow content linearly without horizontal scrolling at any breakpoint
- Ensure content remains readable and functional on all screen sizes

### 1.2 Safe Margin & Padding
- **Outer margins**: Maintain minimum 16px padding from screen edges on mobile, 20px on tablet/desktop
- **Internal spacing**: Maintain consistent spacing between major content sections (24px, 32px, or 40px depending on hierarchy)
- **Safe areas**: Account for device notches and system UI on mobile devices

### 1.3 Layout Principles
- **Single-column layout** for mobile devices; transition to multi-column at breakpoints
- **Logical reading order**: Content should flow top-to-bottom, left-to-right
- **Touch-friendly interfaces**: Ensure adequate spacing for touch targets
- **Avoid overlapping content**: Prevent text overlap and ensure layering is intentional and accessible

### 1.4 Motion & Animation
- Respect `prefers-reduced-motion` media query for users sensitive to motion
- Keep animations under 300ms for micro-interactions
- Provide static fallbacks for animated content
- Never auto-play videos with sound; always require user initiation

---

## 2. Spacing & Sizing

### 2.1 Spacing Scale
Establish a consistent 8px base unit spacing system:

```
4px   - XS (minimal spacing, tight grouping)
8px   - S  (compact spacing)
12px  - SM (small spacing)
16px  - M  (standard spacing)
24px  - L  (generous spacing)
32px  - XL (large spacing)
40px  - 2XL (extra large spacing)
48px  - 3XL (massive spacing)
```

### 2.2 Component Sizing
- **Icon sizes**: 16px, 20px, 24px, 32px (multiples of 4)
- **Touch target minimum**: 44px × 44px (WCAG 2.1 Level AAA recommendation)
- **Buttons**: Minimum 44px height with adequate padding
- **Input fields**: Minimum 44px height for accessibility
- **Clickable elements**: Maintain 8px minimum spacing between interactive elements

### 2.3 Responsive Sizing
- **Font sizes**: Scale with breakpoints (base sizes, not using pixel-perfect fixed values)
- **Margins/Padding**: Adjust spacing ratios at different breakpoints
- **Component scaling**: Adapt component dimensions while maintaining proportions and readability

### 2.4 Content Width
- **Maximum line length**: 60–80 characters for optimal readability (approximately 600–900px)
- **Container max-width**: 1200px for desktop layouts
- **Narrow screens**: Allow content to expand to full width minus safe margins

---

## 3. Color

### 3.1 Color Palette
Define a primary, secondary, tertiary, and neutral palette:

```
PRIMARY COLOR FAMILY (Deep Blue):
Primary-800: #093C5D (Darkest – Use for text, dark backgrounds)
Primary-600: #2E6FA0 (Dark – Use for hover states, emphasis)
Primary-500: #2F39A9 (Base Primary – Use for CTAs, links, accents)
Primary-400: #49A4BB (Light – Use for secondary UI, borders)
Primary-200: #6FD1D7 (Lighter – Use for backgrounds, subtle elements)
Primary-100: #5DF8D8 (Lightest – Use for highlights, very subtle backgrounds)

SECONDARY COLOR FAMILY (Teal/Cyan):
Secondary-800: #093C5D (Dark – Alternative dark tone)
Secondary-600: #3B7597 (Medium-Dark – Use for secondary actions)
Secondary-500: #49A4BB (Medium – Use for secondary interactive elements)
Secondary-400: #6FD1D7 (Light – Use for secondary backgrounds)
Secondary-300: #5DF8D8 (Lightest – Use for accent highlights)

TERTIARY COLOR (Accent Teal):
Tertiary-500: #15D8B3 (Vibrant Teal – Use for highlights, important accents)

Neutral:     (Grays for text, backgrounds, borders)
Neutral-0:   #FFFFFF
Neutral-50:  #F9F9F9
Neutral-100: #F3F3F3
Neutral-200: #E8E8E8
Neutral-300: #D9D9D9
Neutral-400: #A6A6A6
Neutral-500: #737373
Neutral-600: #595959
Neutral-700: #404040
Neutral-800: #262626
Neutral-900: #000000

Semantic Colors:
Success:     #059669 (Green)
Warning:     #D97706 (Amber)
Error:       #DC2626 (Red)
Info:        #0891B2 (Cyan)
```

### 3.2 Contrast Requirements (WCAG 2.1 Level AA)
- **Normal text**: Minimum 4.5:1 contrast ratio (body copy, form labels)
- **Large text** (18pt+ or 14pt+ bold): Minimum 3:1 contrast ratio
- **UI components & graphical elements**: Minimum 3:1 contrast ratio
- **Never rely on color alone** to convey information; use patterns, icons, or text labels

### 3.3 Color Usage Guidelines
- **Text on backgrounds**: 
  - Dark text (Primary-800, Neutral-800/900) on light backgrounds (Neutral-0/50/100)
  - Light text (Neutral-0/50) on dark backgrounds (Primary-800, Neutral-700/800/900)
- **Interactive elements**: Use Primary-500 (#2F39A9) for primary CTAs and links; Secondary-500 (#49A4BB) or Tertiary-500 (#15D8B3) for secondary interactions
- **Disabled state**: Use Neutral-300/400 with Neutral-200 background, not reduced opacity alone
- **Hover/active states**: 
  - Primary-500 → Primary-600 (darker) on hover
  - Secondary-500 → Secondary-600 on hover
  - Tertiary-500 → Primary-500 (darker teal) on hover
- **Links**: Use Primary-500 (#2F39A9) with underline; visited links use Primary-600 (#2E6FA0)
- **Accent highlights**: Use Tertiary-500 (#15D8B3) for important call-outs, success indicators, or special emphasis
- **Backgrounds**: Use Primary-100 (#5DF8D8) or Secondary-400 (#6FD1D7) for subtle background sections

### 3.4 Dark Mode Support
- Provide CSS custom properties for light and dark themes
- Ensure 4.5:1 contrast in both themes
- Use system preference detection (`prefers-color-scheme`) as default
- Allow manual theme toggle without session reload

### 3.5 Color Blindness Considerations
- Test designs with color blindness simulators (Protanopia, Deuteranopia, Tritanopia)
- Never use red/green combinations exclusively to communicate status
- Use patterns (dashed lines, dots, gradients) in addition to color
- Provide text labels for all color-coded information

---

## 4. Grid System

### 4.1 Grid Foundation
- **Base unit**: 8px
- **Grid columns**:
  - Mobile (320px): 4 columns
  - Tablet (480px–767px): 8 columns
  - Desktop (768px+): 12 columns
- **Column width**: Calculated as (container width - total gutter) / columns
- **Gutter**: 16px between columns (8px on each side of column)

### 4.2 Grid Usage
```
Mobile (4 columns):
Column width = (320px - 16px margin - 24px total gutter) / 4 = ~70px
Gutter = 8px

Tablet (8 columns):
Column width = (480px - 32px margin - 56px total gutter) / 8 = ~55px
Gutter = 8px

Desktop (12 columns):
Column width = (1200px - 40px margin - 88px total gutter) / 12 = ~96px
Gutter = 8px
```

### 4.3 Grid Application
- **Align all major content blocks** to the grid
- **Use grid areas** for layout regions (header, sidebar, main, footer)
- **Nested grids**: Allow sub-grids within grid items for component layouts
- **Flexible grids**: Use CSS Grid's `auto-fit` and `minmax()` for responsive behavior
- **Alignment**: Center align containers; align content to grid lines

### 4.4 Grid Breakpoint Transitions
- Grid configuration changes at breakpoints should not cause jarring shifts
- Use CSS media queries to adjust column count and gutter sizes smoothly
- Test transitions between breakpoints for layout integrity

---

## 5. Typography

### 5.1 Typeface System
- **Headline font**: Bitter (serif) – Used for all headings, display text, and key visual elements
- **Body font**: Raleway (sans-serif) – Used for body text, form labels, captions, and supporting copy
- **Fallback stack**: Ensure system fonts as fallbacks for cross-platform consistency

```css
Headline:  font-family: 'Bitter', 'Georgia', 'Cambria', serif;
Body:      font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
Monospace: font-family: 'Monaco', 'Courier New', monospace;
```

**Font Loading**: Load both fonts with `font-display: swap` to prevent invisible text during font load:
```css
@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;600;700&family=Raleway:wght@400;500;600;700&display=swap');
```

### 5.2 Type Scale
Maintain a consistent, scalable type hierarchy using Bitter for headlines and Raleway for body:

```
Display XL:    48px / 1.2 line-height / 700 weight (Bitter, Hero headlines)
Display L:     40px / 1.2 line-height / 700 weight (Bitter, Page titles)
Heading 1:     32px / 1.3 line-height / 700 weight (Bitter)
Heading 2:     24px / 1.3 line-height / 600 weight (Bitter)
Heading 3:     20px / 1.4 line-height / 600 weight (Bitter)
Heading 4:     16px / 1.4 line-height / 600 weight (Bitter, Subheading)
Body L:        18px / 1.5 line-height / 400 weight (Raleway)
Body M:        16px / 1.5 line-height / 400 weight (Raleway, Standard body)
Body S:        14px / 1.5 line-height / 400 weight (Raleway)
Small:         12px / 1.5 line-height / 400 weight (Raleway)
Caption:       11px / 1.4 line-height / 400 weight (Raleway)
```

### 5.3 Line Height
- **Headlines** (up to 32px): 1.2–1.3 for visual tightness
- **Body text**: 1.5–1.6 for optimal readability (WCAG 2.1 requirement: ≥1.5 in blocks of text)
- **Lists**: Match body line-height for consistency
- **All caps text**: Increase line-height by 10% for readability

### 5.4 Font Weights
- **Regular (400)**: Body text, standard copy
- **Medium (500)**: Secondary emphasis, labels, subheadings
- **Semibold (600)**: Headings, strong emphasis, active states
- **Bold (700)**: Display text, critical emphasis
- **Avoid ultra-light** (<300) for accessibility; use 400 minimum

### 5.5 Letter Spacing
- **Default**: 0 (normal tracking)
- **Headlines**: -0.02em for visual cohesion in large sizes
- **All caps**: +0.05em to +0.10em for legibility
- **Never use negative tracking** for body text below 24px

### 5.6 Text Alignment
- **Left-aligned**: Default for body text and lists (left-to-right languages)
- **Center-aligned**: Use sparingly—only for headlines, calls-to-action, or isolated elements
- **Right-aligned**: Avoid for body text; use only for specific UI patterns (e.g., numbers in tables)
- **Justified**: Avoid without careful hyphenation; can create accessibility issues

### 5.7 Link Styling
- **Default state**: Primary-500 (#2F39A9) color with underline
- **Hover state**: Primary-600 (#2E6FA0) with underline
- **Focus state**: Visible focus ring (2px solid Primary-500 with 2px offset)
- **Visited state**: Primary-600 (#2E6FA0) color with underline
- **Active state**: Primary-800 (#093C5D)
- **No color-only distinction**: Always include underline or icon to indicate links

### 5.8 Emphasis & Semantic Markup
- Use `<strong>` for semantic strong emphasis (bold, 600 weight)
- Use `<em>` for semantic emphasis (italic)
- Use `<mark>` for highlighted text (light background)
- Avoid relying on italic alone for conveying importance; use bold or color
- Use `<code>` with monospace font for inline code snippets

---

## 6. Visual Hierarchy

### 6.1 Hierarchy Principles
- **Primary content** should occupy prominent visual space with larger size, bold weight, and high contrast
- **Secondary content** uses medium size, regular weight, and standard contrast
- **Tertiary content** uses small size, regular weight, or muted color (Neutral-500/600)
- **Visual weight**: Combine size, weight, color, and spacing to establish importance

### 6.2 Establishing Hierarchy
```
Level 1 (Primary):
- Font: Bitter (serif, bold presence)
- Size: 32px+ (Heading 1)
- Weight: 700 (Bold)
- Color: Primary-500 (#2F39A9) or Neutral-900
- Spacing: Generous padding/margins

Level 2 (Secondary):
- Font: Bitter (serif)
- Size: 18px–24px (Heading 2/3, Body L)
- Weight: 600 (Semibold)
- Color: Neutral-800/900 or Primary-600
- Spacing: Standard padding/margins

Level 3 (Tertiary):
- Font: Raleway (sans-serif)
- Size: 14px–16px (Body S/M)
- Weight: 400–500 (Regular to Medium)
- Color: Neutral-600/700 or Tertiary-500
- Spacing: Compact padding/margins

Level 4 (Minimal):
- Font: Raleway (sans-serif)
- Size: 12px–14px (Small, Caption)
- Weight: 400 (Regular)
- Color: Neutral-500
- Spacing: Tight padding/margins
```

### 6.3 Visual Separation
- **Whitespace**: Use generous spacing to separate content blocks
- **Dividers**: Use Neutral-200 lines (1px) to visually separate sections
- **Background colors**: Apply subtle background colors (Neutral-50) to distinguish content zones
- **Borders**: Use 1px borders in Neutral-300 for container definitions
- **Depth**: Use subtle shadows (0 2px 4px rgba(0,0,0,0.1)) for layering

### 6.4 Emphasis Techniques
- **Size variation**: Establish size differences of at least 4px between hierarchy levels
- **Weight variation**: Use font-weight changes (400 → 600 → 700)
- **Color contrast**: Primary and accent colors for key elements
- **Icons**: Use 4px–8px icons adjacent to text to reinforce importance
- **Animation**: Subtle micro-animations to draw attention to interactive elements

### 6.5 Accessibility in Hierarchy
- Hierarchy must not rely on color alone
- Use semantic HTML (`<h1>`, `<h2>`, `<h3>`, etc.) to reinforce hierarchy for screen readers
- Ensure heading structure is logical and sequential (no skipping levels)
- Test with screen readers to verify hierarchy interpretation

---

## 7. Atomic Consistent Components

### 7.1 Component Architecture
Follow the Atomic Design methodology with clear isolation and reusability:

```
ATOMS (Primitive building blocks):
├── Button
├── Icon
├── Badge
├── Label
├── Input
├── Checkbox
├── Radio
└── Link

MOLECULES (Simple component combinations):
├── Input + Label
├── Button + Icon
├── Search Box (Input + Icon + Button)
├── Form Group (Label + Input + Help Text)
├── Tab Group
└── Pagination

ORGANISMS (Complex combinations):
├── Navigation Bar
├── Form
├── Card List
├── Data Table
├── Modal Dialog
└── Sidebar

TEMPLATES (Page-level compositions):
├── Dashboard Layout
├── Form Page
├── List Page
└── Detail Page

PAGES (Specific instances with real content):
├── Home Page
├── User Profile
└── Settings Page
```

### 7.2 Atom: Button Component
```
Variants: Primary (#2F39A9), Secondary (#49A4BB), Tertiary (#15D8B3), Danger (Error)
Sizes: Small (32px), Medium (40px), Large (48px)
States: Default, Hover, Active, Focus, Disabled, Loading
Font: Raleway, 500–600 weight

Button Rules:
- Minimum 44px height for touch accessibility
- Minimum 16px horizontal padding
- Clear, action-oriented labels (no "OK" or "Yes")
- Focus ring: 2px solid Primary-500 (#2F39A9) with 2px offset
- Hover state: Shift Primary color to Primary-600 (#2E6FA0)
- Disabled state: Neutral-300 text on Neutral-200 background (no opacity)
- Use Raleway for button text, 500 weight for clarity
```

### 7.3 Atom: Icon Component
```
Sizes: 16px, 20px, 24px, 32px
Colors: Inherit text color or override with primary/semantic color
Margin: 8px from adjacent text

Icon Rules:
- Use consistent icon set (single provider or curated library)
- Scalable SVG format, not bitmap images
- Meaningful icons that are recognizable across cultures
- Pair with text labels; avoid icon-only interactions without tooltips
- ARIA: Add aria-label or sr-only text for screen readers
```

### 7.4 Atom: Input Component
```
States: Default, Focus, Invalid, Disabled, Filled
Padding: 8px horizontal, 12px vertical (44px total height with label)
Border: 1px Neutral-300, 2px Primary-500 (#2F39A9) on focus
Font: Raleway, 400 weight

Input Rules:
- Minimum 44px height including padding
- Visible focus ring (no outline:none without replacement)
- Clear placeholder text in Neutral-400
- Error messages in Error-500 with icon
- Disabled: Neutral-200 background, Neutral-400 text
- Invalid: Error-300 background, Error-700 border
- Use Raleway for label and input text
```

### 7.5 Molecule: Form Group
```
Structure:
├── Label (Heading 4, 600 weight, Neutral-900, Bitter font)
├── Input (with placeholder, Raleway font)
├── Help Text (Small, Neutral-600, Raleway font)
└── Error Message (Small, Error-500, when present)

Spacing:
- 8px between label and input
- 4px between input and help text
- 4px between input and error message

Font pairing:
- Label: Bitter 600
- Input/Placeholder: Raleway 400
- Help/Error: Raleway 400 Small
```

### 7.6 Organism: Navigation Bar
```
Layout: Horizontal layout, 64px height on desktop, 56px on mobile
Background: Primary-500 (#2F39A9) or Neutral-900
Link colors: 
  - Default: Neutral-0 (white text)
  - Hover: Secondary-400 (#6FD1D7) or Tertiary-500 (#15D8B3)
  - Active: Primary-100 (#5DF8D8) background highlight or Secondary-400 text

Navigation Rules:
- Logo/branding on left (use Bitter for brand name if applicable)
- Menu links centered or right-aligned (Raleway font)
- Active indicator (underline or background highlight in accent color)
- Mobile: Hamburger menu (3-line icon) on right
- Keyboard accessible: Tab through links, Enter to activate
- ARIA: aria-current="page" on active link
```

### 7.7 Organism: Modal Dialog
```
Layout: Centered overlay with 16px–32px margin from viewport edge
Background: White (Neutral-0) with Neutral-900 backdrop (80% opacity)
Minimum dimensions: 320px width (mobile), 480px–600px (desktop)
Title Font: Bitter, 24px, 600 weight

Modal Rules:
- Title (Heading 2, Bitter font) with close button (X icon)
- Content area with scrollable overflow (use Raleway for body content)
- Action buttons (Primary + Secondary) at bottom
- Focus trap: Keyboard focus stays within modal
- Escape key to close
- ARIA: role="dialog", aria-labelledby, aria-modal="true"
```

### 7.8 Component Consistency Checklist
- [ ] All components use the shared spacing scale (8px base unit)
- [ ] Colors strictly follow the palette (no arbitrary colors)
- [ ] Typography adheres to the type scale
- [ ] Touch targets are minimum 44px × 44px
- [ ] Focus states are visible with 2px offset outline
- [ ] Disabled states use Neutral-300/200, no opacity
- [ ] Components use semantic HTML
- [ ] ARIA labels provided where needed
- [ ] Tested with keyboard navigation (Tab, Enter, Escape, Arrow keys)
- [ ] Tested with screen readers (NVDA, JAWS, VoiceOver)
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Responsive behavior at all breakpoints
- [ ] Consistent animation timing (≤300ms)

---

## 8. Implementation Guidelines

### 8.1 CSS Architecture
- Use CSS variables for color, spacing, and typography
- Maintain a component-scoped file structure
- Use BEM or scoped naming conventions
- Test all components with `prefers-reduced-motion` and `prefers-color-scheme`

### 8.2 HTML Semantics
- Use semantic HTML5 elements (`<button>`, `<nav>`, `<main>`, `<article>`, etc.)
- Never use `<div>` for buttons; use `<button>` with proper styling
- Ensure proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`, no skipping)
- Use `<form>` with properly labeled inputs
- Use `<label>` with `for` attribute linked to input `id`

### 8.3 Accessibility Testing
- **Keyboard navigation**: Tab through all interactive elements, verify logical order
- **Screen readers**: Test with NVDA, JAWS, or VoiceOver to verify announcements
- **Color contrast**: Use tools like WebAIM Contrast Checker to verify 4.5:1 ratios
- **Responsive**: Test at 320px, 480px, 768px, and 1200px viewports
- **Focus visibility**: Ensure focus rings are visible on all interactive elements
- **Motion**: Test with `prefers-reduced-motion: reduce` to verify animations respect preference

### 8.4 Performance
- Optimize images and SVGs for accessibility (alt text, meaningful dimensions)
- Load fonts with `font-display: swap` to prevent invisible text
- Lazy-load non-critical components
- Monitor Core Web Vitals for performance impact of design choices

---

## 9. Exceptions & Deviations

Deviations from these guidelines require documented justification:

1. **Color contrast exceptions**: Only when in secondary UI patterns (disabled states, placeholders)
2. **Touch target sizing**: Can be reduced to 36px for inline elements with adequate spacing (8px minimum)
3. **Typography exceptions**: Display/hero text can exceed or fall below standard scale if hierarchy remains clear
4. **Spacing deviations**: May compress spacing in dense data tables or timeline views if readability is maintained
5. **Custom components**: Brand-specific or specialized components may require unique styling if they maintain accessibility standards

All exceptions must be documented in code with comments and tested for accessibility impact.

---

## 10. Resources & References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)
- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [IBM Design: Inclusive Design Principles](https://www.ibm.com/design/language/practices/accessibility)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

---

## Changelog

| Version | Date       | Changes                              |
|---------|------------|--------------------------------------|
| 1.1     | 2026-10-01 | Updated with custom color palette (#2F39A9, #2E6FA0, #49A4BB, #15D8B3, etc.) and font pairing (Bitter for headlines, Raleway for body)  |
| 1.0     | 2026-10-01 | Initial design guidelines document   |

