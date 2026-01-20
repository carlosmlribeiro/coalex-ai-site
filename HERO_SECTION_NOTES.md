# Hero Section Brainstorm & Implementation Notes

## Current Implementation

### Headlines
- **Main**: "Trusted AI with Verifiable Compliance."
- **Subheadline**: "Automatic governance. Automatic compliance."

### Value Props (3 bullets)
1. Three lines of code integration
2. Human-in-the-loop built-in
3. EU AI Act ready

### CTAs
- Primary: "Start Free" → links to #pricing
- Secondary: "Book a Demo" → links to #contact

### Dashboard Mockup
Shows a simulated Coalex dashboard with:
- AI Health Score (94/100)
- Active Agents count (12)
- Pending Reviews (3)
- Agent list with health percentages

### Partner Logos ("Backed by")
Theme-aware logos displayed at bottom:

| Partner | Dark Theme | Light Theme |
|---------|------------|-------------|
| Google for Startups | `google.png` | `google-dark.png` |
| Fintech House | `fintech-house.svg` | same |
| Unicorn Factory Lisboa | `ufl.png` | `ufl-dark.png` |
| NVIDIA Inception | `nvidia.png` | same |
| IPN | `ipn.png` | `ipn-dark.png` |

---

## Design Decisions

### Theme Support
- Dark theme: Default, dark backgrounds with light text
- Light theme: Light backgrounds with dark text
- System preference detection via `next-themes`

### Partner Logo Sizing
- Consistent height: `h-10` (40px)
- Variable widths for visual balance
- `object-contain` to maintain aspect ratios
- Hover effect: opacity 60% → 100%

### Visual Elements
- Badge: "AI Governance Platform" with pulsing dot
- Background: Grid pattern with gradient blurs (primary green, accent purple)
- Glass card effect on dashboard mockup with glow

---

## Previous Copy Iterations

### Original
```
Trusted AI.
Verifiable Compliance.

Auditable governance. Automatic compliance.

- One line of code
- Human-in-the-loop built-in
- EU AI Act ready
```

### Updated (Current)
```
Trusted AI with
Verifiable Compliance.

Automatic governance. Automatic compliance.

- Three lines of code integration
- Human-in-the-loop built-in
- EU AI Act ready
```

---

## File Location
`src/sections/Hero.tsx`

## Related Components
- `src/components/Navbar.tsx` - Theme toggle
- `src/components/ThemeToggle.tsx` - Sun/Moon toggle button
- `src/index.css` - Theme CSS variables
