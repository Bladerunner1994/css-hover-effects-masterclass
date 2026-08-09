<div align="center">

# ✨ 104 CSS Hover Effects Masterclass

<p align="center">
  <b>A curated, production-ready collection of 104 interactive CSS hover animations across 14 distinct categories.</b>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla-ff69b4.svg?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Effects](https://img.shields.io/badge/Effects-104%20Total-6366f1.svg?style=for-the-badge)](#-all-104-hover-effects)
[![Live Demo](https://img.shields.io/badge/Live%20Showcase-Local%20Port%208080-10b981.svg?style=for-the-badge)](#-interactive-live-showcase)

[⚡ Live Showcase](#-interactive-live-showcase) • [📦 Download ZIP](dist/hover-effects-masterclass.zip) • [📖 Quick Start](#-quick-start) • [🎨 All Effects](#-all-104-hover-effects)

---

</div>

## 🌟 Highlights

- **104 Standalone `.css` Files**: Every effect is cleanly isolated in its own file under `dist/css/`.
- **Zero Dependencies**: Pure, modern Vanilla CSS (using CSS variables, `@keyframes`, `transform-origin`, and `clip-path`).
- **Interactive Local Showcase Dashboard**: Built-in dark glassmorphism dashboard with live hover previews, instant 1-click code copy, search bar, and category filters.
- **Plug & Play**: Works seamlessly across HTML, React, Next.js, Vue, Angular, Svelte, and Tailwind CSS.
- **1-Click Download**: Download individual `.css` files or get all 104 effects in a single `hover-effects-masterclass.zip` package.

---

## ⚡ Quick Start

### Option 1: Direct Link in HTML
Simply copy any standalone `.css` file from `dist/css/` into your project and link it:

```html
<link rel="stylesheet" href="css/basic-underline-ltr.css">

<!-- Apply the CSS class to any link or button -->
<a href="#" class="hover-basic-underline-ltr">Hover Me</a>
```

### Option 2: Copy CSS Rule
Each effect is fully self-contained! For example, **Left-to-Right Underline**:

```css
.hover-basic-underline-ltr {
  position: relative;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  padding-bottom: 4px;
}
.hover-basic-underline-ltr::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--accent-color, #6366f1);
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-basic-underline-ltr:hover::after {
  transform: scaleX(1);
}
```

---

## 🖥️ Interactive Live Showcase

Run the included lightweight local server script to test all 104 hover animations live in your browser:

```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```

Open your browser at **`http://localhost:8080/`**.

---

## 🎨 All 104 Hover Effects

<details open>
<summary><b>1. The Basic (6 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Left-to-Right Underline** | `.hover-basic-underline-ltr` | [`dist/css/basic-underline-ltr.css`](dist/css/basic-underline-ltr.css) |
| **Right-to-Left Underline** | `.hover-basic-underline-rtl` | [`dist/css/basic-underline-rtl.css`](dist/css/basic-underline-rtl.css) |
| **Center-Expanding Outward** | `.hover-basic-underline-center-out` | [`dist/css/basic-underline-center-out.css`](dist/css/basic-underline-center-out.css) |
| **Edges-Collapsing Inward** | `.hover-basic-underline-edges-in` | [`dist/css/basic-underline-edges-in.css`](dist/css/basic-underline-edges-in.css) |
| **Top-Down Drop Line** | `.hover-basic-overline-top-down` | [`dist/css/basic-overline-top-down.css`](dist/css/basic-overline-top-down.css) |
| **Bottom-Up Rise Line** | `.hover-basic-underline-bottom-up` | [`dist/css/basic-underline-bottom-up.css`](dist/css/basic-underline-bottom-up.css) |

</details>

<details>
<summary><b>2. The Continuous (4 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Slide In Left, Slide Out Right** | `.hover-continuous-slide-l-r` | [`dist/css/continuous-slide-l-r.css`](dist/css/continuous-slide-l-r.css) |
| **Slide In Right, Slide Out Left** | `.hover-continuous-slide-r-l` | [`dist/css/continuous-slide-r-l.css`](dist/css/continuous-slide-r-l.css) |
| **Slide In Top, Slide Out Bottom** | `.hover-continuous-slide-t-b` | [`dist/css/continuous-slide-t-b.css`](dist/css/continuous-slide-t-b.css) |
| **Slide In Bottom, Slide Out Top** | `.hover-continuous-slide-b-t` | [`dist/css/continuous-slide-b-t.css`](dist/css/continuous-slide-b-t.css) |

</details>

<details>
<summary><b>3. The Double (8 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Thick and Thin Bottom Lines** | `.hover-double-thick-thin-bottom` | [`dist/css/double-thick-thin-bottom.css`](dist/css/double-thick-thin-bottom.css) |
| **Top and Bottom Lines** | `.hover-double-top-bottom-lines` | [`dist/css/double-top-bottom-lines.css`](dist/css/double-top-bottom-lines.css) |
| **Same-Side Slide In** | `.hover-double-same-side-slide` | [`dist/css/double-same-side-slide.css`](dist/css/double-same-side-slide.css) |
| **Opposite-Side Cross** | `.hover-double-opposite-cross` | [`dist/css/double-opposite-cross.css`](dist/css/double-opposite-cross.css) |
| **Expanding Double Center** | `.hover-double-expanding-center` | [`dist/css/double-expanding-center.css`](dist/css/double-expanding-center.css) |
| **Collapsing Double Edges** | `.hover-double-collapsing-edges` | [`dist/css/double-collapsing-edges.css`](dist/css/double-collapsing-edges.css) |
| **Parallel Diagonal Lines** | `.hover-double-parallel-diagonals` | [`dist/css/double-parallel-diagonals.css`](dist/css/double-parallel-diagonals.css) |
| **Vertical Left and Right Lines** | `.hover-double-vertical-left-right` | [`dist/css/double-vertical-left-right.css`](dist/css/double-vertical-left-right.css) |

</details>

<details>
<summary><b>4. The Two Steps (8 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Drop Down Then Expand** | `.hover-twostep-drop-then-expand` | [`dist/css/twostep-drop-then-expand.css`](dist/css/twostep-drop-then-expand.css) |
| **Center Dot Then Expand** | `.hover-twostep-dot-then-expand` | [`dist/css/twostep-dot-then-expand.css`](dist/css/twostep-dot-then-expand.css) |
| **Slide Right Then Drop Down** | `.hover-twostep-slide-right-then-drop` | [`dist/css/twostep-slide-right-then-drop.css`](dist/css/twostep-slide-right-then-drop.css) |
| **Expand Left Then Fill Up** | `.hover-twostep-expand-left-then-fill` | [`dist/css/twostep-expand-left-then-fill.css`](dist/css/twostep-expand-left-then-fill.css) |
| **Outline Box Then Fill Center** | `.hover-twostep-outline-then-fill` | [`dist/css/twostep-outline-then-fill.css`](dist/css/twostep-outline-then-fill.css) |
| **Top Line Then Bottom Line** | `.hover-twostep-top-then-bottom` | [`dist/css/twostep-top-then-bottom.css`](dist/css/twostep-top-then-bottom.css) |
| **Pinch Center Then Shoot Edges** | `.hover-twostep-pinch-center-then-shoot` | [`dist/css/twostep-pinch-center-then-shoot.css`](dist/css/twostep-pinch-center-then-shoot.css) |
| **Fade In Then Slide Right** | `.hover-twostep-fade-then-slide` | [`dist/css/twostep-fade-then-slide.css`](dist/css/twostep-fade-then-slide.css) |

</details>

<details>
<summary><b>5. The Unexpected (6 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Center Expand to Right Shoot** | `.hover-unexpected-center-expand-shoot` | [`dist/css/unexpected-center-expand-shoot.css`](dist/css/unexpected-center-expand-shoot.css) |
| **Left Slide to Center Snap** | `.hover-unexpected-left-slide-snap` | [`dist/css/unexpected-left-slide-snap.css`](dist/css/unexpected-left-slide-snap.css) |
| **Full Width Drop to Tiny Dot** | `.hover-unexpected-full-drop-to-dot` | [`dist/css/unexpected-full-drop-to-dot.css`](dist/css/unexpected-full-drop-to-dot.css) |
| **Bottom Rise to Top Vanish** | `.hover-unexpected-bottom-rise-top-vanish` | [`dist/css/unexpected-bottom-rise-top-vanish.css`](dist/css/unexpected-bottom-rise-top-vanish.css) |
| **Slow Slide to Quick Snap** | `.hover-unexpected-slow-slide-quick-snap` | [`dist/css/unexpected-slow-slide-quick-snap.css`](dist/css/unexpected-slow-slide-quick-snap.css) |
| **Double Cross to Single Merge** | `.hover-unexpected-double-cross-single-merge` | [`dist/css/unexpected-double-cross-single-merge.css`](dist/css/unexpected-double-cross-single-merge.css) |

</details>

<details>
<summary><b>6. The Rounded (6 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Expanding Background Circles** | `.hover-rounded-expanding-circles` | [`dist/css/rounded-expanding-circles.css`](dist/css/rounded-expanding-circles.css) |
| **Hopping Under-Dots** | `.hover-rounded-hopping-dots` | [`dist/css/rounded-hopping-dots.css`](dist/css/rounded-hopping-dots.css) |
| **Pill-Shape Enclosure** | `.hover-rounded-pill-enclosure` | [`dist/css/rounded-pill-enclosure.css`](dist/css/rounded-pill-enclosure.css) |
| **Soft Bubble Overlay** | `.hover-rounded-soft-bubble` | [`dist/css/rounded-soft-bubble.css`](dist/css/rounded-soft-bubble.css) |
| **Floating Top-Dots** | `.hover-rounded-floating-top-dots` | [`dist/css/rounded-floating-top-dots.css`](dist/css/rounded-floating-top-dots.css) |
| **Corner-Rounding Background** | `.hover-rounded-corner-morph` | [`dist/css/rounded-corner-morph.css`](dist/css/rounded-corner-morph.css) |

</details>

<details>
<summary><b>7. The Fading (4 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Slow Fade In** | `.hover-fading-slow-fade-in` | [`dist/css/fading-slow-fade-in.css`](dist/css/fading-slow-fade-in.css) |
| **Drop Down and Fade Out** | `.hover-fading-drop-down-fade-out` | [`dist/css/fading-drop-down-fade-out.css`](dist/css/fading-drop-down-fade-out.css) |
| **Blurry Reveal** | `.hover-fading-blurry-reveal` | [`dist/css/fading-blurry-reveal.css`](dist/css/fading-blurry-reveal.css) |
| **Ghostly Pulse Fade** | `.hover-fading-ghostly-pulse` | [`dist/css/fading-ghostly-pulse.css`](dist/css/fading-ghostly-pulse.css) |

</details>

<details>
<summary><b>8. The Infinite (6 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Scrolling Barber-Pole Stripe** | `.hover-infinite-barber-pole` | [`dist/css/infinite-barber-pole.css`](dist/css/infinite-barber-pole.css) |
| **Pulsing Underline** | `.hover-infinite-pulsing-underline` | [`dist/css/infinite-pulsing-underline.css`](dist/css/infinite-pulsing-underline.css) |
| **Wavy Ocean Scroll** | `.hover-infinite-wavy-ocean` | [`dist/css/infinite-wavy-ocean.css`](dist/css/infinite-wavy-ocean.css) |
| **Bouncing Bottom Dot** | `.hover-infinite-bouncing-dot` | [`dist/css/infinite-bouncing-dot.css`](dist/css/infinite-bouncing-dot.css) |
| **Rotating Gradient Border** | `.hover-infinite-rotating-gradient-border` | [`dist/css/infinite-rotating-gradient-border.css`](dist/css/infinite-rotating-gradient-border.css) |
| **Shimmering Glow Effect** | `.hover-infinite-shimmering-glow` | [`dist/css/infinite-shimmering-glow.css`](dist/css/infinite-shimmering-glow.css) |

</details>

<details>
<summary><b>9. The All Sides (12 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Clockwise Snake** | `.hover-allsides-clockwise-snake` | [`dist/css/allsides-clockwise-snake.css`](dist/css/allsides-clockwise-snake.css) |
| **Counter-Clockwise Snake** | `.hover-allsides-counter-clockwise-snake` | [`dist/css/allsides-counter-clockwise-snake.css`](dist/css/allsides-counter-clockwise-snake.css) |
| **Center-Out All Sides** | `.hover-allsides-center-out` | [`dist/css/allsides-center-out.css`](dist/css/allsides-center-out.css) |
| **Corners-In All Sides** | `.hover-allsides-corners-in` | [`dist/css/allsides-corners-in.css`](dist/css/allsides-corners-in.css) |
| **Top/Bottom First, Then Sides** | `.hover-allsides-topbottom-then-sides` | [`dist/css/allsides-topbottom-then-sides.css`](dist/css/allsides-topbottom-then-sides.css) |
| **Sides First, Then Top/Bottom** | `.hover-allsides-sides-then-topbottom` | [`dist/css/allsides-sides-then-topbottom.css`](dist/css/allsides-sides-then-topbottom.css) |
| **Corner Brackets Expand** | `.hover-allsides-brackets-expand` | [`dist/css/allsides-brackets-expand.css`](dist/css/allsides-brackets-expand.css) |
| **Corner Brackets Collapse** | `.hover-allsides-brackets-collapse` | [`dist/css/allsides-brackets-collapse.css`](dist/css/allsides-brackets-collapse.css) |
| **Left-Right Meet at Top-Bottom** | `.hover-allsides-leftright-meet-tb` | [`dist/css/allsides-leftright-meet-tb.css`](dist/css/allsides-leftright-meet-tb.css) |
| **Top-Bottom Meet at Left-Right** | `.hover-allsides-topbottom-meet-lr` | [`dist/css/allsides-topbottom-meet-lr.css`](dist/css/allsides-topbottom-meet-lr.css) |
| **Diagonal Corner Reveal** | `.hover-allsides-diagonal-corner-reveal` | [`dist/css/allsides-diagonal-corner-reveal.css`](dist/css/allsides-diagonal-corner-reveal.css) |
| **Full Box Instant Draw** | `.hover-allsides-full-box-draw` | [`dist/css/allsides-full-box-draw.css`](dist/css/allsides-full-box-draw.css) |

</details>

<details>
<summary><b>10. The Thick (10 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Highlighter-Style Left Slide** | `.hover-thick-highlighter-left-slide` | [`dist/css/thick-highlighter-left-slide.css`](dist/css/thick-highlighter-left-slide.css) |
| **Highlighter-Style Right Slide** | `.hover-thick-highlighter-right-slide` | [`dist/css/thick-highlighter-right-slide.css`](dist/css/thick-highlighter-right-slide.css) |
| **Bottom-Half Block Rise** | `.hover-thick-bottom-half-block-rise` | [`dist/css/thick-bottom-half-block-rise.css`](dist/css/thick-bottom-half-block-rise.css) |
| **Top-Half Block Drop** | `.hover-thick-top-half-block-drop` | [`dist/css/thick-top-half-block-drop.css`](dist/css/thick-top-half-block-drop.css) |
| **Center-Split Thick Block** | `.hover-thick-center-split-block` | [`dist/css/thick-center-split-block.css`](dist/css/thick-center-split-block.css) |
| **Dynamic Color Block** | `.hover-thick-dynamic-color-block` | [`dist/css/thick-dynamic-color-block.css`](dist/css/thick-dynamic-color-block.css) |
| **Step-by-Step Block Build** | `.hover-thick-step-by-step-block` | [`dist/css/thick-step-by-step-block.css`](dist/css/thick-step-by-step-block.css) |
| **Angled Thick Highlight** | `.hover-thick-angled-highlight` | [`dist/css/thick-angled-highlight.css`](dist/css/thick-angled-highlight.css) |
| **Vertical Block Squeeze** | `.hover-thick-vertical-squeeze` | [`dist/css/thick-vertical-squeeze.css`](dist/css/thick-vertical-squeeze.css) |
| **Horizontal Block Squeeze** | `.hover-thick-horizontal-squeeze` | [`dist/css/thick-horizontal-squeeze.css`](dist/css/thick-horizontal-squeeze.css) |

</details>

<details>
<summary><b>11. The Sliding (8 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Left Slide Fill** | `.hover-sliding-left-slide-fill` | [`dist/css/sliding-left-slide-fill.css`](dist/css/sliding-left-slide-fill.css) |
| **Right Slide Fill** | `.hover-sliding-right-slide-fill` | [`dist/css/sliding-right-slide-fill.css`](dist/css/sliding-right-slide-fill.css) |
| **Top Slide Fill** | `.hover-sliding-top-slide-fill` | [`dist/css/sliding-top-slide-fill.css`](dist/css/sliding-top-slide-fill.css) |
| **Bottom Slide Fill** | `.hover-sliding-bottom-slide-fill` | [`dist/css/sliding-bottom-slide-fill.css`](dist/css/sliding-bottom-slide-fill.css) |
| **Top-Left Diagonal Fill** | `.hover-sliding-top-left-diagonal-fill` | [`dist/css/sliding-top-left-diagonal-fill.css`](dist/css/sliding-top-left-diagonal-fill.css) |
| **Bottom-Right Diagonal Fill** | `.hover-sliding-bottom-right-diagonal-fill` | [`dist/css/sliding-bottom-right-diagonal-fill.css`](dist/css/sliding-bottom-right-diagonal-fill.css) |
| **Center-Out Background Fill** | `.hover-sliding-center-out-fill` | [`dist/css/sliding-center-out-fill.css`](dist/css/sliding-center-out-fill.css) |
| **Edges-In Background Fill** | `.hover-sliding-edges-in-fill` | [`dist/css/sliding-edges-in-fill.css`](dist/css/sliding-edges-in-fill.css) |

</details>

<details>
<summary><b>12. The Fancy (14 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Jagged Zig-Zag Lines** | `.hover-fancy-jagged-zigzag` | [`dist/css/fancy-jagged-zigzag.css`](dist/css/fancy-jagged-zigzag.css) |
| **Wavy Lines** | `.hover-fancy-wavy-lines` | [`dist/css/fancy-wavy-lines.css`](dist/css/fancy-wavy-lines.css) |
| **Staggered Stair-Step Blocks** | `.hover-fancy-stairstep-blocks` | [`dist/css/fancy-stairstep-blocks.css`](dist/css/fancy-stairstep-blocks.css) |
| **Dashed Line Run** | `.hover-fancy-dashed-line-run` | [`dist/css/fancy-dashed-line-run.css`](dist/css/fancy-dashed-line-run.css) |
| **Dotted Line March** | `.hover-fancy-dotted-line-march` | [`dist/css/fancy-dotted-line-march.css`](dist/css/fancy-dotted-line-march.css) |
| **Arrow-Tip Slide** | `.hover-fancy-arrow-tip-slide` | [`dist/css/fancy-arrow-tip-slide.css`](dist/css/fancy-arrow-tip-slide.css) |
| **Multiple Stripe Wipe** | `.hover-fancy-multiple-stripe-wipe` | [`dist/css/fancy-multiple-stripe-wipe.css`](dist/css/fancy-multiple-stripe-wipe.css) |
| **Checkerboard Reveal** | `.hover-fancy-checkerboard-reveal` | [`dist/css/fancy-checkerboard-reveal.css`](dist/css/fancy-checkerboard-reveal.css) |
| **Diagonal Stripes Wipe** | `.hover-fancy-diagonal-stripes-wipe` | [`dist/css/fancy-diagonal-stripes-wipe.css`](dist/css/fancy-diagonal-stripes-wipe.css) |
| **Scalloped Edge Underline** | `.hover-fancy-scalloped-edge` | [`dist/css/fancy-scalloped-edge.css`](dist/css/fancy-scalloped-edge.css) |
| **Triangles Pointing Right** | `.hover-fancy-triangles-pointing-right` | [`dist/css/fancy-triangles-pointing-right.css`](dist/css/fancy-triangles-pointing-right.css) |
| **Triangles Pointing Down** | `.hover-fancy-triangles-pointing-down` | [`dist/css/fancy-triangles-pointing-down.css`](dist/css/fancy-triangles-pointing-down.css) |
| **Intersecting Grid Lines** | `.hover-fancy-intersecting-grid` | [`dist/css/fancy-intersecting-grid.css`](dist/css/fancy-intersecting-grid.css) |
| **Woven Thread Effect** | `.hover-fancy-woven-thread` | [`dist/css/fancy-woven-thread.css`](dist/css/fancy-woven-thread.css) |

</details>

<details>
<summary><b>13. The Inverted (4 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Horizontal Negative Flip** | `.hover-inverted-horizontal-flip` | [`dist/css/inverted-horizontal-flip.css`](dist/css/inverted-horizontal-flip.css) |
| **Vertical Negative Flip** | `.hover-inverted-vertical-flip` | [`dist/css/inverted-vertical-flip.css`](dist/css/inverted-vertical-flip.css) |
| **Diagonal Negative Flip** | `.hover-inverted-diagonal-flip` | [`dist/css/inverted-diagonal-flip.css`](dist/css/inverted-diagonal-flip.css) |
| **Center-Expand Negative Flip** | `.hover-inverted-center-expand-flip` | [`dist/css/inverted-center-expand-flip.css`](dist/css/inverted-center-expand-flip.css) |

</details>

<details>
<summary><b>14. The 3D (8 Variations)</b></summary>

| Effect Name | CSS Class | File Path |
| :--- | :--- | :--- |
| **Backward Hinge Flip** | `.hover-3d-backward-hinge-flip` | [`dist/css/3d-backward-hinge-flip.css`](dist/css/3d-backward-hinge-flip.css) |
| **Forward Hinge Flip** | `.hover-3d-forward-hinge-flip` | [`dist/css/3d-forward-hinge-flip.css`](dist/css/3d-forward-hinge-flip.css) |
| **Horizontal Cube Rotate** | `.hover-3d-horizontal-cube-rotate` | [`dist/css/3d-horizontal-cube-rotate.css`](dist/css/3d-horizontal-cube-rotate.css) |
| **Vertical Cube Rotate** | `.hover-3d-vertical-cube-rotate` | [`dist/css/3d-vertical-cube-rotate.css`](dist/css/3d-vertical-cube-rotate.css) |
| **Physical Key Press Down** | `.hover-3d-physical-key-press` | [`dist/css/3d-physical-key-press.css`](dist/css/3d-physical-key-press.css) |
| **Pop-Out Float Off Page** | `.hover-3d-pop-out-float` | [`dist/css/3d-pop-out-float.css`](dist/css/3d-pop-out-float.css) |
| **Isometric Tilt Left** | `.hover-3d-isometric-tilt-left` | [`dist/css/3d-isometric-tilt-left.css`](dist/css/3d-isometric-tilt-left.css) |
| **Isometric Tilt Right** | `.hover-3d-isometric-tilt-right` | [`dist/css/3d-isometric-tilt-right.css`](dist/css/3d-isometric-tilt-right.css) |

</details>

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
