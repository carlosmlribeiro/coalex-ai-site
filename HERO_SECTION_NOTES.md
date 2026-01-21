# Hero Section Brainstorm & Implementation Notes

## Current Implementation (Updated with Feedback)

### Philosophy
**Problem first, solution second. Create urgency. Make the buyer feel seen.**

### Badge
"Your AI is in production. Is it under control?" (red, pulsing)

### Headlines
- **Main**: "AI is live. Risk is invisible."
- **Subheadline**: "Make AI behavior visible, controlled, and audit-ready."
- **Supporting**: "Policy enforcement and audit trails for LLM apps."

### Value Props (Outcomes with Verbs)
1. Detect policy violations in real time
2. Route risky outputs for human approval
3. Export audit-ready evidence on demand

### Dashboard Mock (Show Proof)
| Metric | Value | Indicator |
|--------|-------|-----------|
| Violations Detected | 23 | Red - This week |
| Approvals Logged | 847 | Green - 100% tracked |
| Controls Enforced | 12 | Primary - Active policies |
| Evidence Exported | 3 | Blue - Audit reports |

**Recent Activity Feed:**
- Policy violation blocked (Customer Support Bot) - 2m ago
- Human approval completed (Sales Assistant) - 5m ago
- Audit evidence exported (All agents) - 1h ago

---

## Key Feedback Applied

### ❌ Removed (Abstract/Passive)
- "Trusted AI"
- "Verifiable Compliance"
- "Automatic compliance"
- "EU AI Act ready"
- "Three lines of code integration"
- "Human-in-the-loop built-in"

### ✅ Added (Concrete/Active)
- Problem-first headline (risk, exposure)
- Verbs instead of adjectives
- Specific outcomes (detect, route, export)
- Proof metrics in dashboard (violations, approvals, controls, evidence)
- Urgency in badge

### Principles
1. **WHO CARES?** - Tap into customer pain first
2. **Problem → Solution** - Not the other way around
3. **Verbs, not adjectives** - Actions, not descriptions
4. **Show proof** - Violations detected, approvals logged, controls enforced
5. **Kill absolute language** - No "automatic compliance"

---

## Previous Copy (for reference)

```
Badge: AI Governance Platform

Headline: Trusted AI with Verifiable Compliance.

Subhead: Automatic governance. Automatic compliance.

Bullets:
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
