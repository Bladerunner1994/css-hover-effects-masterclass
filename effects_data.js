const HOVER_EFFECTS_DATA = [
    {
        "category":  "1. The Basic",
        "name":  "Left-to-Right Underline",
        "id":  "basic-underline-ltr",
        "css":  ".hover-basic-underline-ltr { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-basic-underline-ltr::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: bottom left; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n.hover-basic-underline-ltr:hover::after { transform: scaleX(1); }",
        "desc":  "Classic bottom underline sliding smoothly from left to right."
    },
    {
        "category":  "1. The Basic",
        "name":  "Right-to-Left Underline",
        "id":  "basic-underline-rtl",
        "css":  ".hover-basic-underline-rtl { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-basic-underline-rtl::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; right: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: bottom right; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n.hover-basic-underline-rtl:hover::after { transform: scaleX(1); }",
        "desc":  "Bottom underline sliding from right to left on hover."
    },
    {
        "category":  "1. The Basic",
        "name":  "Center-Expanding Outward",
        "id":  "basic-underline-center-out",
        "css":  ".hover-basic-underline-center-out { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-basic-underline-center-out::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: bottom center; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n.hover-basic-underline-center-out:hover::after { transform: scaleX(1); }",
        "desc":  "Underline expanding symmetrically from center outward to edges."
    },
    {
        "category":  "1. The Basic",
        "name":  "Edges-Collapsing Inward",
        "id":  "basic-underline-edges-in",
        "css":  ".hover-basic-underline-edges-in { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-basic-underline-edges-in::before, .hover-basic-underline-edges-in::after { content: \u0027\u0027; position: absolute; width: 50%; height: 2px; bottom: 0; background-color: var(--accent-color, #6366f1); transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-basic-underline-edges-in::before { left: 0; transform: translateX(-100%); opacity: 0; }\n.hover-basic-underline-edges-in::after { right: 0; transform: translateX(100%); opacity: 0; }\n.hover-basic-underline-edges-in:hover::before, .hover-basic-underline-edges-in:hover::after { transform: translateX(0); opacity: 1; }",
        "desc":  "Underline starts from outer edges and collapses inward to center."
    },
    {
        "category":  "1. The Basic",
        "name":  "Top-Down Drop Line",
        "id":  "basic-overline-top-down",
        "css":  ".hover-basic-overline-top-down { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-top: 4px; }\n.hover-basic-overline-top-down::before { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; top: 0; left: 0; opacity: 0; background-color: var(--accent-color, #6366f1); transform: translateY(-8px); transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-basic-overline-top-down:hover::before { opacity: 1; transform: translateY(0); }",
        "desc":  "Overline line dropping down onto top edge."
    },
    {
        "category":  "1. The Basic",
        "name":  "Bottom-Up Rise Line",
        "id":  "basic-underline-bottom-up",
        "css":  ".hover-basic-underline-bottom-up { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-basic-underline-bottom-up::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; opacity: 0; background-color: var(--accent-color, #6366f1); transform: translateY(8px); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease; }\n.hover-basic-underline-bottom-up:hover::after { opacity: 1; transform: translateY(0); }",
        "desc":  "Underline rising up from below the element into position."
    },
    {
        "category":  "2. The Continuous",
        "name":  "Slide In Left, Slide Out Right",
        "id":  "continuous-slide-l-r",
        "css":  ".hover-continuous-slide-l-r { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; overflow: hidden; }\n.hover-continuous-slide-l-r::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: bottom right; transition: transform 0.3s ease; }\n.hover-continuous-slide-l-r:hover::after { transform: scaleX(1); transform-origin: bottom left; }",
        "desc":  "Line slides in from left on hover, and exits to right when mouse leaves."
    },
    {
        "category":  "2. The Continuous",
        "name":  "Slide In Right, Slide Out Left",
        "id":  "continuous-slide-r-l",
        "css":  ".hover-continuous-slide-r-l { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; overflow: hidden; }\n.hover-continuous-slide-r-l::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: bottom left; transition: transform 0.3s ease; }\n.hover-continuous-slide-r-l:hover::after { transform: scaleX(1); transform-origin: bottom right; }",
        "desc":  "Line slides in from right on hover, and exits to left when mouse leaves."
    },
    {
        "category":  "2. The Continuous",
        "name":  "Slide In Top, Slide Out Bottom",
        "id":  "continuous-slide-t-b",
        "css":  ".hover-continuous-slide-t-b { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-left: 8px; overflow: hidden; }\n.hover-continuous-slide-t-b::before { content: \u0027\u0027; position: absolute; width: 2px; height: 100%; top: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleY(0); transform-origin: bottom left; transition: transform 0.3s ease; }\n.hover-continuous-slide-t-b:hover::before { transform: scaleY(1); transform-origin: top left; }",
        "desc":  "Vertical line slides in from top, and exits to bottom on hover leave."
    },
    {
        "category":  "2. The Continuous",
        "name":  "Slide In Bottom, Slide Out Top",
        "id":  "continuous-slide-b-t",
        "css":  ".hover-continuous-slide-b-t { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-left: 8px; overflow: hidden; }\n.hover-continuous-slide-b-t::before { content: \u0027\u0027; position: absolute; width: 2px; height: 100%; top: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleY(0); transform-origin: top left; transition: transform 0.3s ease; }\n.hover-continuous-slide-b-t:hover::before { transform: scaleY(1); transform-origin: bottom left; }",
        "desc":  "Vertical line slides in from bottom, and exits to top on hover leave."
    },
    {
        "category":  "3. The Double",
        "name":  "Thick and Thin Bottom Lines",
        "id":  "double-thick-thin-bottom",
        "css":  ".hover-double-thick-thin-bottom { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-double-thick-thin-bottom::before { content: \u0027\u0027; position: absolute; width: 100%; height: 3px; bottom: 4px; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }\n.hover-double-thick-thin-bottom::after { content: \u0027\u0027; position: absolute; width: 100%; height: 1px; bottom: 0; left: 0; background-color: var(--accent-color-light, #818cf8); transform: scaleX(0); transform-origin: right; transition: transform 0.3s ease 0.08s; }\n.hover-double-thick-thin-bottom:hover::before, .hover-double-thick-thin-bottom:hover::after { transform: scaleX(1); }",
        "desc":  "Dual bottom line with a thick primary bar and thin delayed secondary bar."
    },
    {
        "category":  "3. The Double",
        "name":  "Top and Bottom Lines",
        "id":  "double-top-bottom-lines",
        "css":  ".hover-double-top-bottom-lines { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 4px 0; }\n.hover-double-top-bottom-lines::before, .hover-double-top-bottom-lines::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transition: transform 0.3s ease; }\n.hover-double-top-bottom-lines::before { top: 0; transform-origin: left; }\n.hover-double-top-bottom-lines::after { bottom: 0; transform-origin: right; }\n.hover-double-top-bottom-lines:hover::before, .hover-double-top-bottom-lines:hover::after { transform: scaleX(1); }",
        "desc":  "Top overline and bottom underline expanding simultaneously from opposite edges."
    },
    {
        "category":  "3. The Double",
        "name":  "Same-Side Slide In",
        "id":  "double-same-side-slide",
        "css":  ".hover-double-same-side-slide { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-double-same-side-slide::before, .hover-double-same-side-slide::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: left; }\n.hover-double-same-side-slide::before { bottom: 4px; transition: transform 0.25s ease; }\n.hover-double-same-side-slide::after { bottom: 0; transition: transform 0.25s ease 0.08s; }\n.hover-double-same-side-slide:hover::before, .hover-double-same-side-slide:hover::after { transform: scaleX(1); }",
        "desc":  "Two stacked underline bars sliding in from left with staggered timings."
    },
    {
        "category":  "3. The Double",
        "name":  "Opposite-Side Cross",
        "id":  "double-opposite-cross",
        "css":  ".hover-double-opposite-cross { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 0; }\n.hover-double-opposite-cross::before { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; top: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }\n.hover-double-opposite-cross::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; right: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: right; transition: transform 0.3s ease; }\n.hover-double-opposite-cross:hover::before, .hover-double-opposite-cross:hover::after { transform: scaleX(1); }",
        "desc":  "Top line slides left-to-right, bottom line slides right-to-left."
    },
    {
        "category":  "3. The Double",
        "name":  "Expanding Double Center",
        "id":  "double-expanding-center",
        "css":  ".hover-double-expanding-center { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 0; }\n.hover-double-expanding-center::before, .hover-double-expanding-center::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: center; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n.hover-double-expanding-center::before { top: 0; }\n.hover-double-expanding-center::after { bottom: 0; }\n.hover-double-expanding-center:hover::before, .hover-double-expanding-center:hover::after { transform: scaleX(1); }",
        "desc":  "Top and bottom double lines expanding outward from center."
    },
    {
        "category":  "3. The Double",
        "name":  "Collapsing Double Edges",
        "id":  "double-collapsing-edges",
        "css":  ".hover-double-collapsing-edges { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 0; }\n.hover-double-collapsing-edges::before { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; top: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }\n.hover-double-collapsing-edges::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; right: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: right; transition: transform 0.3s ease; }\n.hover-double-collapsing-edges:hover::before, .hover-double-collapsing-edges:hover::after { transform: scaleX(1); }",
        "desc":  "Double lines start from outer edges and collapse inward to middle."
    },
    {
        "category":  "3. The Double",
        "name":  "Parallel Diagonal Lines",
        "id":  "double-parallel-diagonals",
        "css":  ".hover-double-parallel-diagonals { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 12px; overflow: hidden; }\n.hover-double-parallel-diagonals::before, .hover-double-parallel-diagonals::after { content: \u0027\u0027; position: absolute; top: -50%; width: 4px; height: 200%; background-color: var(--accent-color, #6366f1); transform: rotate(25deg) translateX(-100px); transition: transform 0.4s ease; }\n.hover-double-parallel-diagonals::before { left: -10px; }\n.hover-double-parallel-diagonals::after { left: 4px; opacity: 0.5; transition-delay: 0.06s; }\n.hover-double-parallel-diagonals:hover::before, .hover-double-parallel-diagonals:hover::after { transform: rotate(25deg) translateX(300px); }",
        "desc":  "Two angled parallel lines sweeping across element on hover."
    },
    {
        "category":  "3. The Double",
        "name":  "Vertical Left and Right Lines",
        "id":  "double-vertical-left-right",
        "css":  ".hover-double-vertical-left-right { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 4px 12px; }\n.hover-double-vertical-left-right::before, .hover-double-vertical-left-right::after { content: \u0027\u0027; position: absolute; width: 2px; height: 100%; top: 0; background-color: var(--accent-color, #6366f1); transform: scaleY(0); transition: transform 0.3s ease; }\n.hover-double-vertical-left-right::before { left: 0; transform-origin: top; }\n.hover-double-vertical-left-right::after { right: 0; transform-origin: bottom; }\n.hover-double-vertical-left-right:hover::before, .hover-double-vertical-left-right:hover::after { transform: scaleY(1); }",
        "desc":  "Left and right vertical side borders extending downward on hover."
    },
    {
        "category":  "4. The Two Steps",
        "name":  "Drop Down Then Expand",
        "id":  "twostep-drop-then-expand",
        "css":  ".hover-twostep-drop-then-expand { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-twostep-drop-then-expand::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: translateY(-10px) scaleX(0); transition: transform 0.2s ease, opacity 0.2s ease; opacity: 0; }\n.hover-twostep-drop-then-expand:hover::after { opacity: 1; transform: translateY(0) scaleX(1); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s; }",
        "desc":  "Line drops down vertically first, then expands horizontally across bottom."
    },
    {
        "category":  "4. The Two Steps",
        "name":  "Center Dot Then Expand",
        "id":  "twostep-dot-then-expand",
        "css":  ".hover-twostep-dot-then-expand { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-twostep-dot-then-expand::after { content: \u0027\u0027; position: absolute; width: 100%; height: 3px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); border-radius: 50%; transform: scale(0); transition: transform 0.15s ease; }\n.hover-twostep-dot-then-expand:hover::after { border-radius: 0; transform: scaleX(1) scaleY(0.66); transition: border-radius 0.2s ease 0.1s, transform 0.25s ease 0.05s; }",
        "desc":  "A tiny center dot appears first, then stretches out into a full underline."
    },
    {
        "category":  "4. The Two Steps",
        "name":  "Slide Right Then Drop Down",
        "id":  "twostep-slide-right-then-drop",
        "css":  ".hover-twostep-slide-right-then-drop { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 4px 8px; }\n.hover-twostep-slide-right-then-drop::before { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; top: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: left; transition: transform 0.2s ease; }\n.hover-twostep-slide-right-then-drop::after { content: \u0027\u0027; position: absolute; width: 2px; height: 100%; top: 0; right: 0; background-color: var(--accent-color, #6366f1); transform: scaleY(0); transform-origin: top; transition: transform 0.2s ease 0.18s; }\n.hover-twostep-slide-right-then-drop:hover::before { transform: scaleX(1); }\n.hover-twostep-slide-right-then-drop:hover::after { transform: scaleY(1); }",
        "desc":  "Top line slides right, then drops down to form right vertical side line."
    },
    {
        "category":  "4. The Two Steps",
        "name":  "Expand Left Then Fill Up",
        "id":  "twostep-expand-left-then-fill",
        "css":  ".hover-twostep-expand-left-then-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 12px; z-index: 1; }\n.hover-twostep-expand-left-then-fill::before { content: \u0027\u0027; position: absolute; width: 3px; height: 100%; top: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleY(0); transform-origin: top; transition: transform 0.2s ease; z-index: -1; }\n.hover-twostep-expand-left-then-fill::after { content: \u0027\u0027; position: absolute; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(99, 102, 241, 0.15); transform: scaleX(0); transform-origin: left; transition: transform 0.25s ease 0.18s; z-index: -2; }\n.hover-twostep-expand-left-then-fill:hover::before { transform: scaleY(1); }\n.hover-twostep-expand-left-then-fill:hover::after { transform: scaleX(1); }",
        "desc":  "Left border expands downward first, then sweeps background fill across."
    },
    {
        "category":  "4. The Two Steps",
        "name":  "Outline Box Then Fill Center",
        "id":  "twostep-outline-then-fill",
        "css":  ".hover-twostep-outline-then-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 14px; border: 1px solid transparent; transition: border-color 0.2s ease, background-color 0.25s ease 0.15s; }\n.hover-twostep-outline-then-fill:hover { border-color: var(--accent-color, #6366f1); background-color: rgba(99, 102, 241, 0.15); }",
        "desc":  "Border outline appears around element first, followed by translucent fill."
    },
    {
        "category":  "4. The Two Steps",
        "name":  "Top Line Then Bottom Line",
        "id":  "twostep-top-then-bottom",
        "css":  ".hover-twostep-top-then-bottom { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 0; }\n.hover-twostep-top-then-bottom::before, .hover-twostep-top-then-bottom::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: left; }\n.hover-twostep-top-then-bottom::before { top: 0; transition: transform 0.25s ease; }\n.hover-twostep-top-then-bottom::after { bottom: 0; transition: transform 0.25s ease 0.15s; }\n.hover-twostep-top-then-bottom:hover::before, .hover-twostep-top-then-bottom:hover::after { transform: scaleX(1); }",
        "desc":  "Top overline expands first, followed by bottom underline with a distinct delay."
    },
    {
        "category":  "4. The Two Steps",
        "name":  "Pinch Center Then Shoot Edges",
        "id":  "twostep-pinch-center-then-shoot",
        "css":  ".hover-twostep-pinch-center-then-shoot { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-twostep-pinch-center-then-shoot::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: center; transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n.hover-twostep-pinch-center-then-shoot:hover::after { transform: scaleX(1); }",
        "desc":  "Pinches line to center point first, then shoots outward to both edges."
    },
    {
        "category":  "4. The Two Steps",
        "name":  "Fade In Then Slide Right",
        "id":  "twostep-fade-then-slide",
        "css":  ".hover-twostep-fade-then-slide { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-twostep-fade-then-slide::after { content: \u0027\u0027; position: absolute; width: 50%; height: 2px; bottom: 0; left: 0; opacity: 0; background-color: var(--accent-color, #6366f1); transition: opacity 0.15s ease, width 0.25s ease 0.15s; }\n.hover-twostep-fade-then-slide:hover::after { opacity: 1; width: 100%; }",
        "desc":  "Underline fades in at half width, then slides to fill full width."
    },
    {
        "category":  "5. The Unexpected",
        "name":  "Center Expand to Right-Edge Shoot Off",
        "id":  "unexpected-center-expand-shoot",
        "css":  ".hover-unexpected-center-expand-shoot { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; overflow: hidden; }\n.hover-unexpected-center-expand-shoot::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: center; transition: transform 0.25s ease; }\n.hover-unexpected-center-expand-shoot:hover::after { transform: scaleX(1) translateX(20px); transition: transform 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.33); }",
        "desc":  "Line expands from center, then shoots off sharply past the right edge."
    },
    {
        "category":  "5. The Unexpected",
        "name":  "Left Slide to Center Snap",
        "id":  "unexpected-left-slide-snap",
        "css":  ".hover-unexpected-left-slide-snap { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-unexpected-left-slide-snap::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: translateX(-100%); opacity: 0; transition: transform 0.35s cubic-bezier(0.68, -0.6, 0.32, 1.6), opacity 0.2s ease; }\n.hover-unexpected-left-slide-snap:hover::after { transform: translateX(0); opacity: 1; }",
        "desc":  "Line slides in fast from left and snaps elastically into center position."
    },
    {
        "category":  "5. The Unexpected",
        "name":  "Full Width Drop to Tiny Dot",
        "id":  "unexpected-full-drop-to-dot",
        "css":  ".hover-unexpected-full-drop-to-dot { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 6px; }\n.hover-unexpected-full-drop-to-dot::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transition: transform 0.3s ease, width 0.3s ease 0.1s, left 0.3s ease 0.1s, border-radius 0.3s ease; }\n.hover-unexpected-full-drop-to-dot:hover::after { width: 6px; height: 6px; left: calc(50% - 3px); border-radius: 50%; transform: translateY(2px); box-shadow: 0 0 8px var(--accent-color, #6366f1); }",
        "desc":  "Full width line drops down and collapses into a tiny center glowing dot."
    },
    {
        "category":  "5. The Unexpected",
        "name":  "Bottom Rise to Top Vanish",
        "id":  "unexpected-bottom-rise-top-vanish",
        "css":  ".hover-unexpected-bottom-rise-top-vanish { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 4px 0; overflow: hidden; }\n.hover-unexpected-bottom-rise-top-vanish::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: -4px; left: 0; background-color: var(--accent-color, #6366f1); transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }\n.hover-unexpected-bottom-rise-top-vanish:hover::after { transform: translateY(-28px); }",
        "desc":  "Line rises from bottom, sweeps across text, and vanishes upward."
    },
    {
        "category":  "5. The Unexpected",
        "name":  "Slow Slide to Quick Snap",
        "id":  "unexpected-slow-slide-quick-snap",
        "css":  ".hover-unexpected-slow-slide-quick-snap { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-unexpected-slow-slide-quick-snap::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: left; transition: transform 0.5s cubic-bezier(0.9, 0, 0.1, 1); }\n.hover-unexpected-slow-slide-quick-snap:hover::after { transform: scaleX(1); }",
        "desc":  "Line slides slowly to 80% then suddenly snaps to 100% at ultra high speed."
    },
    {
        "category":  "5. The Unexpected",
        "name":  "Double Cross to Single Merge",
        "id":  "unexpected-double-cross-single-merge",
        "css":  ".hover-unexpected-double-cross-single-merge { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-unexpected-double-cross-single-merge::before, .hover-unexpected-double-cross-single-merge::after { content: \u0027\u0027; position: absolute; width: 50%; height: 2px; bottom: 0; background-color: var(--accent-color, #6366f1); transition: transform 0.3s ease, width 0.2s ease 0.2s; }\n.hover-unexpected-double-cross-single-merge::before { left: 0; transform: translateX(-100%); }\n.hover-unexpected-double-cross-single-merge::after { right: 0; transform: translateX(100%); }\n.hover-unexpected-double-cross-single-merge:hover::before { transform: translateX(0); width: 100%; }\n.hover-unexpected-double-cross-single-merge:hover::after { transform: translateX(0); width: 100%; opacity: 0; }",
        "desc":  "Two lines cross from opposite sides and merge into a single glowing line."
    },
    {
        "category":  "6. The Rounded",
        "name":  "Expanding Background Circles",
        "id":  "rounded-expanding-circles",
        "css":  ".hover-rounded-expanding-circles { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 20px; overflow: hidden; z-index: 1; }\n.hover-rounded-expanding-circles::before { content: \u0027\u0027; position: absolute; width: 10px; height: 10px; top: 50%; left: 50%; background-color: var(--accent-color, #6366f1); border-radius: 50%; transform: translate(-50%, -50%) scale(0); transition: transform 0.4s ease; z-index: -1; }\n.hover-rounded-expanding-circles:hover::before { transform: translate(-50%, -50%) scale(25); }\n.hover-rounded-expanding-circles:hover { color: #ffffff; }",
        "desc":  "Radial circular background expanding outwards smoothly."
    },
    {
        "category":  "6. The Rounded",
        "name":  "Hopping Under-Dots",
        "id":  "rounded-hopping-dots",
        "css":  ".hover-rounded-hopping-dots { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 12px; }\n.hover-rounded-hopping-dots::after { content: \u0027â€¢ â€¢ â€¢\u0027; position: absolute; width: 100%; bottom: -2px; left: 0; text-align: center; font-size: 14px; letter-spacing: 4px; color: var(--accent-color, #6366f1); opacity: 0; transform: translateY(6px); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease; }\n.hover-rounded-hopping-dots:hover::after { opacity: 1; transform: translateY(0); }",
        "desc":  "Three rounded dots hop beneath element in a playful sequence."
    },
    {
        "category":  "6. The Rounded",
        "name":  "Pill-Shape Enclosure",
        "id":  "rounded-pill-enclosure",
        "css":  ".hover-rounded-pill-enclosure { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 16px; border-radius: 50px; border: 2px solid transparent; transition: border-color 0.3s ease, transform 0.2s ease; }\n.hover-rounded-pill-enclosure:hover { border-color: var(--accent-color, #6366f1); transform: scale(1.05); }",
        "desc":  "Rounded pill outline shrinks and encapsulates text nicely."
    },
    {
        "category":  "6. The Rounded",
        "name":  "Soft Bubble Overlay",
        "id":  "rounded-soft-bubble",
        "css":  ".hover-rounded-soft-bubble { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 12px; transition: background-color 0.3s ease, box-shadow 0.3s ease; }\n.hover-rounded-soft-bubble:hover { background-color: rgba(99, 102, 241, 0.12); box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2); }",
        "desc":  "Soft translucent glass bubble expands behind element."
    },
    {
        "category":  "6. The Rounded",
        "name":  "Floating Top-Dots",
        "id":  "rounded-floating-top-dots",
        "css":  ".hover-rounded-floating-top-dots { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-top: 8px; }\n.hover-rounded-floating-top-dots::before { content: \u0027\u0027; position: absolute; width: 6px; height: 6px; top: 0; left: 50%; background-color: var(--accent-color, #6366f1); border-radius: 50%; transform: translateX(-50%) translateY(6px); opacity: 0; transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-rounded-floating-top-dots:hover::before { opacity: 1; transform: translateX(-50%) translateY(-2px); }",
        "desc":  "Small glowing rounded circles hover above top border."
    },
    {
        "category":  "6. The Rounded",
        "name":  "Corner-Rounding Background",
        "id":  "rounded-corner-morph",
        "css":  ".hover-rounded-corner-morph { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; background-color: var(--accent-color, #6366f1); color: #fff; border-radius: 0px; transition: border-radius 0.3s ease, transform 0.2s ease; }\n.hover-rounded-corner-morph:hover { border-radius: 24px; transform: translateY(-2px); }",
        "desc":  "Element border-radius morphs smoothly from sharp square to pill shape."
    },
    {
        "category":  "7. The Fading",
        "name":  "Slow Fade In",
        "id":  "fading-slow-fade-in",
        "css":  ".hover-fading-slow-fade-in { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-fading-slow-fade-in::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); opacity: 0; transition: opacity 0.8s ease; }\n.hover-fading-slow-fade-in:hover::after { opacity: 1; }",
        "desc":  "Ultra smooth 0.8s opacity fade in of underline \u0026 glow."
    },
    {
        "category":  "7. The Fading",
        "name":  "Drop Down and Fade Out",
        "id":  "fading-drop-down-fade-out",
        "css":  ".hover-fading-drop-down-fade-out { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-fading-drop-down-fade-out::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); opacity: 1; transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-fading-drop-down-fade-out:hover::after { transform: translateY(10px); opacity: 0; }",
        "desc":  "Line drops down while fading out from view."
    },
    {
        "category":  "7. The Fading",
        "name":  "Blurry Reveal",
        "id":  "fading-blurry-reveal",
        "css":  ".hover-fading-blurry-reveal { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 8px; filter: blur(4px); opacity: 0.7; transition: filter 0.3s ease, opacity 0.3s ease; }\n.hover-fading-blurry-reveal:hover { filter: blur(0px); opacity: 1; }",
        "desc":  "Backdrop filter resolves from blurry 10px to sharp glass on hover."
    },
    {
        "category":  "7. The Fading",
        "name":  "Ghostly Pulse Fade",
        "id":  "fading-ghostly-pulse",
        "css":  ".hover-fading-ghostly-pulse { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 12px; border-radius: 6px; transition: box-shadow 0.4s ease, background-color 0.4s ease; }\n.hover-fading-ghostly-pulse:hover { background-color: rgba(99, 102, 241, 0.1); box-shadow: 0 0 25px rgba(99, 102, 241, 0.4); }",
        "desc":  "Subtle ghostly pulsing aura that fades in smoothly."
    },
    {
        "category":  "8. The Infinite",
        "name":  "Scrolling Barber-Pole Stripe",
        "id":  "infinite-barber-pole",
        "css":  ".hover-infinite-barber-pole { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 6px; }\n.hover-infinite-barber-pole::after { content: \u0027\u0027; position: absolute; width: 100%; height: 4px; bottom: 0; left: 0; background: repeating-linear-gradient(45deg, var(--accent-color, #6366f1), var(--accent-color, #6366f1) 8px, #ffffff 8px, #ffffff 16px); background-size: 200% 100%; opacity: 0; transition: opacity 0.3s ease; }\n.hover-infinite-barber-pole:hover::after { opacity: 1; animation: barberPoleScroll 1s linear infinite; }\n@keyframes barberPoleScroll { 0% { background-position: 0 0; } 100% { background-position: 30px 0; } }",
        "desc":  "Diagonal barber-pole stripes continuously scrolling across underline."
    },
    {
        "category":  "8. The Infinite",
        "name":  "Pulsing Underline",
        "id":  "infinite-pulsing-underline",
        "css":  ".hover-infinite-pulsing-underline { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-infinite-pulsing-underline::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); opacity: 0; }\n.hover-infinite-pulsing-underline:hover::after { opacity: 1; animation: underlinePulse 1.2s ease-in-out infinite alternate; }\n@keyframes underlinePulse { 0% { transform: scaleY(1); opacity: 0.5; } 100% { transform: scaleY(2.5); opacity: 1; box-shadow: 0 0 10px var(--accent-color, #6366f1); } }",
        "desc":  "Underline continuously breathes and pulses in opacity and thickness."
    },
    {
        "category":  "8. The Infinite",
        "name":  "Wavy Ocean Scroll",
        "id":  "infinite-wavy-ocean",
        "css":  ".hover-infinite-wavy-ocean { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-infinite-wavy-ocean::after { content: \u0027\u0027; position: absolute; width: 100%; height: 6px; bottom: 0; left: 0; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\u0027http://www.w3.org/2000/svg\u0027 viewBox=\u00270 0 20 12\u0027%3E%3Cpath d=\u0027M0 6 Q5 0 10 6 T20 6\u0027 fill=\u0027none\u0027 stroke=\u0027%236366f1\u0027 stroke-width=\u00272\u0027/%3E%3C/svg%3E\"); background-size: 20px 6px; background-repeat: repeat-x; opacity: 0; transition: opacity 0.3s ease; }\n.hover-infinite-wavy-ocean:hover::after { opacity: 1; animation: wavyScroll 0.8s linear infinite; }\n@keyframes wavyScroll { from { background-position: 0 0; } to { background-position: 20px 0; } }",
        "desc":  "SVG wavy line scrolling continuously beneath element."
    },
    {
        "category":  "8. The Infinite",
        "name":  "Bouncing Bottom Dot",
        "id":  "infinite-bouncing-dot",
        "css":  ".hover-infinite-bouncing-dot { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-infinite-bouncing-dot::after { content: \u0027\u0027; position: absolute; width: 6px; height: 6px; bottom: 0; left: 50%; background-color: var(--accent-color, #6366f1); border-radius: 50%; transform: translateX(-50%); opacity: 0; }\n.hover-infinite-bouncing-dot:hover::after { opacity: 1; animation: dotBounce 0.6s ease-in-out infinite alternate; }\n@keyframes dotBounce { 0% { transform: translateX(-50%) translateY(0); } 100% { transform: translateX(-50%) translateY(-6px); } }",
        "desc":  "Glowing dot bouncing continuously along bottom border."
    },
    {
        "category":  "8. The Infinite",
        "name":  "Rotating Gradient Border",
        "id":  "infinite-rotating-gradient-border",
        "css":  ".hover-infinite-rotating-gradient-border { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 8px; z-index: 1; overflow: hidden; }\n.hover-infinite-rotating-gradient-border::before { content: \u0027\u0027; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1); opacity: 0; transition: opacity 0.3s ease; z-index: -2; }\n.hover-infinite-rotating-gradient-border::after { content: \u0027\u0027; position: absolute; inset: 2px; background: #0f172a; border-radius: 6px; z-index: -1; }\n.hover-infinite-rotating-gradient-border:hover::before { opacity: 1; animation: rotateGradient 2s linear infinite; }\n@keyframes rotateGradient { to { transform: rotate(360deg); } }",
        "desc":  "Conic gradient border rotating 360 degrees endlessly on hover."
    },
    {
        "category":  "8. The Infinite",
        "name":  "Shimmering Glow Effect",
        "id":  "infinite-shimmering-glow",
        "css":  ".hover-infinite-shimmering-glow { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 6px; overflow: hidden; background-color: rgba(99, 102, 241, 0.1); }\n.hover-infinite-shimmering-glow::after { content: \u0027\u0027; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent); transform: skewX(-20deg); }\n.hover-infinite-shimmering-glow:hover::after { animation: shimmerSweep 1.5s infinite; }\n@keyframes shimmerSweep { 100% { left: 150%; } }",
        "desc":  "Shimmer light beam sweeping endlessly across background."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Clockwise Snake",
        "id":  "allsides-clockwise-snake",
        "css":  ".hover-allsides-clockwise-snake { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-clockwise-snake::before, .hover-allsides-clockwise-snake::after { content: \u0027\u0027; position: absolute; width: 0; height: 0; border: 2px solid transparent; }\n.hover-allsides-clockwise-snake::before { top: 0; left: 0; transition: width 0.15s ease, height 0.15s ease 0.15s; }\n.hover-allsides-clockwise-snake::after { bottom: 0; right: 0; transition: width 0.15s ease 0.3s, height 0.15s ease 0.45s; }\n.hover-allsides-clockwise-snake:hover::before { width: 100%; height: 100%; border-top-color: var(--accent-color, #6366f1); border-right-color: var(--accent-color, #6366f1); }\n.hover-allsides-clockwise-snake:hover::after { width: 100%; height: 100%; border-bottom-color: var(--accent-color, #6366f1); border-left-color: var(--accent-color, #6366f1); }",
        "desc":  "Single line traveling clockwise around all 4 borders."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Counter-Clockwise Snake",
        "id":  "allsides-counter-clockwise-snake",
        "css":  ".hover-allsides-counter-clockwise-snake { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-counter-clockwise-snake::before, .hover-allsides-counter-clockwise-snake::after { content: \u0027\u0027; position: absolute; width: 0; height: 0; border: 2px solid transparent; }\n.hover-allsides-counter-clockwise-snake::before { top: 0; right: 0; transition: width 0.15s ease, height 0.15s ease 0.15s; }\n.hover-allsides-counter-clockwise-snake::after { bottom: 0; left: 0; transition: width 0.15s ease 0.3s, height 0.15s ease 0.45s; }\n.hover-allsides-counter-clockwise-snake:hover::before { width: 100%; height: 100%; border-top-color: var(--accent-color, #6366f1); border-left-color: var(--accent-color, #6366f1); }\n.hover-allsides-counter-clockwise-snake:hover::after { width: 100%; height: 100%; border-bottom-color: var(--accent-color, #6366f1); border-right-color: var(--accent-color, #6366f1); }",
        "desc":  "Line traveling counter-clockwise around all 4 borders."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Center-Out All Sides",
        "id":  "allsides-center-out",
        "css":  ".hover-allsides-center-out { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border: 2px solid transparent; transition: border-color 0.3s ease; }\n.hover-allsides-center-out::before { content: \u0027\u0027; position: absolute; inset: 0; border: 2px solid var(--accent-color, #6366f1); transform: scale(0.5); opacity: 0; transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-allsides-center-out:hover::before { transform: scale(1); opacity: 1; }",
        "desc":  "All 4 borders expanding simultaneously from middle of each edge."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Corners-In All Sides",
        "id":  "allsides-corners-in",
        "css":  ".hover-allsides-corners-in { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-corners-in::before { content: \u0027\u0027; position: absolute; inset: 0; border: 2px solid var(--accent-color, #6366f1); transform: scale(1.3); opacity: 0; transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-allsides-corners-in:hover::before { transform: scale(1); opacity: 1; }",
        "desc":  "All 4 borders sliding from 4 corners inward to edge centers."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Top/Bottom First, Then Sides",
        "id":  "allsides-topbottom-then-sides",
        "css":  ".hover-allsides-topbottom-then-sides { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-topbottom-then-sides::before { content: \u0027\u0027; position: absolute; inset: 0; border-top: 2px solid var(--accent-color, #6366f1); border-bottom: 2px solid var(--accent-color, #6366f1); transform: scaleX(0); transition: transform 0.2s ease; }\n.hover-allsides-topbottom-then-sides::after { content: \u0027\u0027; position: absolute; inset: 0; border-left: 2px solid var(--accent-color, #6366f1); border-right: 2px solid var(--accent-color, #6366f1); transform: scaleY(0); transition: transform 0.2s ease 0.18s; }\n.hover-allsides-topbottom-then-sides:hover::before { transform: scaleX(1); }\n.hover-allsides-topbottom-then-sides:hover::after { transform: scaleY(1); }",
        "desc":  "Top \u0026 bottom borders grow first, followed by left \u0026 right."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Sides First, Then Top/Bottom",
        "id":  "allsides-sides-then-topbottom",
        "css":  ".hover-allsides-sides-then-topbottom { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-sides-then-topbottom::before { content: \u0027\u0027; position: absolute; inset: 0; border-left: 2px solid var(--accent-color, #6366f1); border-right: 2px solid var(--accent-color, #6366f1); transform: scaleY(0); transition: transform 0.2s ease; }\n.hover-allsides-sides-then-topbottom::after { content: \u0027\u0027; position: absolute; inset: 0; border-top: 2px solid var(--accent-color, #6366f1); border-bottom: 2px solid var(--accent-color, #6366f1); transform: scaleX(0); transition: transform 0.2s ease 0.18s; }\n.hover-allsides-sides-then-topbottom:hover::before { transform: scaleY(1); }\n.hover-allsides-sides-then-topbottom:hover::after { transform: scaleX(1); }",
        "desc":  "Left \u0026 right borders grow first, followed by top \u0026 bottom."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Corner Brackets Expand",
        "id":  "allsides-brackets-expand",
        "css":  ".hover-allsides-brackets-expand { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-brackets-expand::before, .hover-allsides-brackets-expand::after { content: \u0027\u0027; position: absolute; width: 10px; height: 10px; border: 2px solid var(--accent-color, #6366f1); transition: width 0.3s ease, height 0.3s ease; }\n.hover-allsides-brackets-expand::before { top: 0; left: 0; border-right: 0; border-bottom: 0; }\n.hover-allsides-brackets-expand::after { bottom: 0; right: 0; border-left: 0; border-top: 0; }\n.hover-allsides-brackets-expand:hover::before, .hover-allsides-brackets-expand:hover::after { width: 100%; height: 100%; }",
        "desc":  "Four corner bracket pairs expanding to encapsulate element."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Corner Brackets Collapse",
        "id":  "allsides-brackets-collapse",
        "css":  ".hover-allsides-brackets-collapse { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-brackets-collapse::before, .hover-allsides-brackets-collapse::after { content: \u0027\u0027; position: absolute; width: 100%; height: 100%; border: 2px solid var(--accent-color, #6366f1); opacity: 0; transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-allsides-brackets-collapse::before { top: -6px; left: -6px; border-right: 0; border-bottom: 0; }\n.hover-allsides-brackets-collapse::after { bottom: -6px; right: -6px; border-left: 0; border-top: 0; }\n.hover-allsides-brackets-collapse:hover::before { transform: translate(6px, 6px); opacity: 1; }\n.hover-allsides-brackets-collapse:hover::after { transform: translate(-6px, -6px); opacity: 1; }",
        "desc":  "Corner brackets collapse inward tightly around text."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Left-Right Meet at Top-Bottom",
        "id":  "allsides-leftright-meet-tb",
        "css":  ".hover-allsides-leftright-meet-tb { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-leftright-meet-tb::before { content: \u0027\u0027; position: absolute; inset: 0; border-left: 2px solid var(--accent-color, #6366f1); border-right: 2px solid var(--accent-color, #6366f1); transform: scaleY(0); transition: transform 0.25s ease; }\n.hover-allsides-leftright-meet-tb::after { content: \u0027\u0027; position: absolute; inset: 0; border-top: 2px solid var(--accent-color, #6366f1); border-bottom: 2px solid var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: center; transition: transform 0.25s ease 0.2s; }\n.hover-allsides-leftright-meet-tb:hover::before { transform: scaleY(1); }\n.hover-allsides-leftright-meet-tb:hover::after { transform: scaleX(1); }",
        "desc":  "Left and right lines grow to corners, then top and bottom lines slide in to meet."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Top-Bottom Meet at Left-Right",
        "id":  "allsides-topbottom-meet-lr",
        "css":  ".hover-allsides-topbottom-meet-lr { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-topbottom-meet-lr::before { content: \u0027\u0027; position: absolute; inset: 0; border-top: 2px solid var(--accent-color, #6366f1); border-bottom: 2px solid var(--accent-color, #6366f1); transform: scaleX(0); transition: transform 0.25s ease; }\n.hover-allsides-topbottom-meet-lr::after { content: \u0027\u0027; position: absolute; inset: 0; border-left: 2px solid var(--accent-color, #6366f1); border-right: 2px solid var(--accent-color, #6366f1); transform: scaleY(0); transform-origin: center; transition: transform 0.25s ease 0.2s; }\n.hover-allsides-topbottom-meet-lr:hover::before { transform: scaleX(1); }\n.hover-allsides-topbottom-meet-lr:hover::after { transform: scaleY(1); }",
        "desc":  "Top and bottom lines meet at corners, then left and right lines complete box."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Diagonal Corner Reveal",
        "id":  "allsides-diagonal-corner-reveal",
        "css":  ".hover-allsides-diagonal-corner-reveal { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; background-color: rgba(99, 102, 241, 0.15); border-radius: 4px; }\n.hover-allsides-diagonal-corner-reveal::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: var(--accent-color, #6366f1); clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); transition: clip-path 0.4s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 4px; }\n.hover-allsides-diagonal-corner-reveal:hover::before { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }\n.hover-allsides-diagonal-corner-reveal:hover { color: #fff; }",
        "desc":  "Diagonal polygon clip-path reveal sweeping from top-left to bottom-right."
    },
    {
        "category":  "9. The All Sides",
        "name":  "Full Box Instant Draw",
        "id":  "allsides-full-box-draw",
        "css":  ".hover-allsides-full-box-draw { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; }\n.hover-allsides-full-box-draw::after { content: \u0027\u0027; position: absolute; inset: 0; border: 2px solid var(--accent-color, #6366f1); clip-path: inset(0 100% 0 0); transition: clip-path 0.35s cubic-bezier(0.4, 0, 0.2, 1); }\n.hover-allsides-full-box-draw:hover::after { clip-path: inset(0 0 0 0); }",
        "desc":  "Full box outline draws around element in one sleek instant motion."
    },
    {
        "category":  "10. The Thick",
        "name":  "Highlighter-Style Left Slide",
        "id":  "thick-highlighter-left-slide",
        "css":  ".hover-thick-highlighter-left-slide { position: relative; text-decoration: none; color: inherit; display: inline-block; z-index: 1; }\n.hover-thick-highlighter-left-slide::before { content: \u0027\u0027; position: absolute; width: 100%; height: 60%; bottom: 0; left: 0; background-color: rgba(99, 102, 241, 0.35); transform: scaleX(0); transform-origin: left; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: -1; }\n.hover-thick-highlighter-left-slide:hover::before { transform: scaleX(1); }",
        "desc":  "Thick neon highlighter block sliding in behind text from left."
    },
    {
        "category":  "10. The Thick",
        "name":  "Highlighter-Style Right Slide",
        "id":  "thick-highlighter-right-slide",
        "css":  ".hover-thick-highlighter-right-slide { position: relative; text-decoration: none; color: inherit; display: inline-block; z-index: 1; }\n.hover-thick-highlighter-right-slide::before { content: \u0027\u0027; position: absolute; width: 100%; height: 60%; bottom: 0; left: 0; background-color: rgba(99, 102, 241, 0.35); transform: scaleX(0); transform-origin: right; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: -1; }\n.hover-thick-highlighter-right-slide:hover::before { transform: scaleX(1); }",
        "desc":  "Thick highlighter block sliding in from right."
    },
    {
        "category":  "10. The Thick",
        "name":  "Bottom-Half Block Rise",
        "id":  "thick-bottom-half-block-rise",
        "css":  ".hover-thick-bottom-half-block-rise { position: relative; text-decoration: none; color: inherit; display: inline-block; z-index: 1; }\n.hover-thick-bottom-half-block-rise::before { content: \u0027\u0027; position: absolute; width: 100%; height: 50%; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleY(0); transform-origin: bottom; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: -1; opacity: 0.8; }\n.hover-thick-bottom-half-block-rise:hover::before { transform: scaleY(1); }",
        "desc":  "50% height thick highlight block rising up from bottom edge."
    },
    {
        "category":  "10. The Thick",
        "name":  "Top-Half Block Drop",
        "id":  "thick-top-half-block-drop",
        "css":  ".hover-thick-top-half-block-drop { position: relative; text-decoration: none; color: inherit; display: inline-block; z-index: 1; }\n.hover-thick-top-half-block-drop::before { content: \u0027\u0027; position: absolute; width: 100%; height: 50%; top: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleY(0); transform-origin: top; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: -1; opacity: 0.8; }\n.hover-thick-top-half-block-drop:hover::before { transform: scaleY(1); }",
        "desc":  "50% height thick block dropping down from top."
    },
    {
        "category":  "10. The Thick",
        "name":  "Center-Split Thick Block",
        "id":  "thick-center-split-block",
        "css":  ".hover-thick-center-split-block { position: relative; text-decoration: none; color: inherit; display: inline-block; z-index: 1; }\n.hover-thick-center-split-block::before { content: \u0027\u0027; position: absolute; width: 100%; height: 60%; bottom: 0; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transform-origin: center; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: -1; opacity: 0.7; }\n.hover-thick-center-split-block:hover::before { transform: scaleX(1); }",
        "desc":  "Thick highlight block opening from middle outwards."
    },
    {
        "category":  "10. The Thick",
        "name":  "Dynamic Color Block",
        "id":  "thick-dynamic-color-block",
        "css":  ".hover-thick-dynamic-color-block { position: relative; text-decoration: none; color: inherit; display: inline-block; z-index: 1; padding: 4px 8px; }\n.hover-thick-dynamic-color-block::before { content: \u0027\u0027; position: absolute; inset: 0; background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899); transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease; z-index: -1; border-radius: 4px; }\n.hover-thick-dynamic-color-block:hover::before { transform: scaleX(1); }\n.hover-thick-dynamic-color-block:hover { color: #ffffff; }",
        "desc":  "Thick block changing color dynamically as it fills text."
    },
    {
        "category":  "10. The Thick",
        "name":  "Step-by-Step Block Build",
        "id":  "thick-step-by-step-block",
        "css":  ".hover-thick-step-by-step-block { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 4px 10px; z-index: 1; }\n.hover-thick-step-by-step-block::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: var(--accent-color, #6366f1); clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); transition: clip-path 0.4s steps(4); z-index: -1; border-radius: 4px; }\n.hover-thick-step-by-step-block:hover::before { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }\n.hover-thick-step-by-step-block:hover { color: #fff; }",
        "desc":  "3 staggered vertical steps building up a thick highlight block."
    },
    {
        "category":  "10. The Thick",
        "name":  "Angled Thick Highlight",
        "id":  "thick-angled-highlight",
        "css":  ".hover-thick-angled-highlight { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 4px 12px; z-index: 1; overflow: hidden; }\n.hover-thick-angled-highlight::before { content: \u0027\u0027; position: absolute; top: 0; left: -20%; width: 140%; height: 100%; background-color: var(--accent-color, #6366f1); transform: skewX(-20deg) scaleX(0); transform-origin: left; transition: transform 0.3s ease; z-index: -1; }\n.hover-thick-angled-highlight:hover::before { transform: skewX(-20deg) scaleX(1); }\n.hover-thick-angled-highlight:hover { color: #fff; }",
        "desc":  "Parallelogram angled 15deg thick highlight block sliding through."
    },
    {
        "category":  "10. The Thick",
        "name":  "Vertical Block Squeeze",
        "id":  "thick-vertical-squeeze",
        "css":  ".hover-thick-vertical-squeeze { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 12px; z-index: 1; }\n.hover-thick-vertical-squeeze::before, .hover-thick-vertical-squeeze::after { content: \u0027\u0027; position: absolute; width: 100%; height: 50%; left: 0; background-color: var(--accent-color, #6366f1); transform: scaleY(0); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: -1; opacity: 0.85; }\n.hover-thick-vertical-squeeze::before { top: 0; transform-origin: top; }\n.hover-thick-vertical-squeeze::after { bottom: 0; transform-origin: bottom; }\n.hover-thick-vertical-squeeze:hover::before, .hover-thick-vertical-squeeze:hover::after { transform: scaleY(1); }\n.hover-thick-vertical-squeeze:hover { color: #fff; }",
        "desc":  "Thick top \u0026 bottom blocks squeezing inward towards center line."
    },
    {
        "category":  "10. The Thick",
        "name":  "Horizontal Block Squeeze",
        "id":  "thick-horizontal-squeeze",
        "css":  ".hover-thick-horizontal-squeeze { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 6px 12px; z-index: 1; }\n.hover-thick-horizontal-squeeze::before, .hover-thick-horizontal-squeeze::after { content: \u0027\u0027; position: absolute; width: 50%; height: 100%; top: 0; background-color: var(--accent-color, #6366f1); transform: scaleX(0); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); z-index: -1; opacity: 0.85; }\n.hover-thick-horizontal-squeeze::before { left: 0; transform-origin: left; }\n.hover-thick-horizontal-squeeze::after { right: 0; transform-origin: right; }\n.hover-thick-horizontal-squeeze:hover::before, .hover-thick-horizontal-squeeze:hover::after { transform: scaleX(1); }\n.hover-thick-horizontal-squeeze:hover { color: #fff; }",
        "desc":  "Thick left \u0026 right blocks squeezing inward horizontally."
    },
    {
        "category":  "11. The Sliding",
        "name":  "Left Slide Fill",
        "id":  "sliding-left-slide-fill",
        "css":  ".hover-sliding-left-slide-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; overflow: hidden; }\n.hover-sliding-left-slide-fill::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: var(--accent-color, #6366f1); transform: translateX(-100%); transition: transform 0.3s ease; z-index: -1; }\n.hover-sliding-left-slide-fill:hover::before { transform: translateX(0); }\n.hover-sliding-left-slide-fill:hover { color: #ffffff; }",
        "desc":  "Solid color background sliding in 100% from left."
    },
    {
        "category":  "11. The Sliding",
        "name":  "Right Slide Fill",
        "id":  "sliding-right-slide-fill",
        "css":  ".hover-sliding-right-slide-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; overflow: hidden; }\n.hover-sliding-right-slide-fill::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: var(--accent-color, #6366f1); transform: translateX(100%); transition: transform 0.3s ease; z-index: -1; }\n.hover-sliding-right-slide-fill:hover::before { transform: translateX(0); }\n.hover-sliding-right-slide-fill:hover { color: #ffffff; }",
        "desc":  "Solid color background sliding in 100% from right."
    },
    {
        "category":  "11. The Sliding",
        "name":  "Top Slide Fill",
        "id":  "sliding-top-slide-fill",
        "css":  ".hover-sliding-top-slide-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; overflow: hidden; }\n.hover-sliding-top-slide-fill::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: var(--accent-color, #6366f1); transform: translateY(-100%); transition: transform 0.3s ease; z-index: -1; }\n.hover-sliding-top-slide-fill:hover::before { transform: translateY(0); }\n.hover-sliding-top-slide-fill:hover { color: #ffffff; }",
        "desc":  "Solid color background sliding in 100% from top."
    },
    {
        "category":  "11. The Sliding",
        "name":  "Bottom Slide Fill",
        "id":  "sliding-bottom-slide-fill",
        "css":  ".hover-sliding-bottom-slide-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; overflow: hidden; }\n.hover-sliding-bottom-slide-fill::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: var(--accent-color, #6366f1); transform: translateY(100%); transition: transform 0.3s ease; z-index: -1; }\n.hover-sliding-bottom-slide-fill:hover::before { transform: translateY(0); }\n.hover-sliding-bottom-slide-fill:hover { color: #ffffff; }",
        "desc":  "Solid color background sliding in 100% from bottom."
    },
    {
        "category":  "11. The Sliding",
        "name":  "Top-Left Diagonal Fill",
        "id":  "sliding-top-left-diagonal-fill",
        "css":  ".hover-sliding-top-left-diagonal-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; overflow: hidden; }\n.hover-sliding-top-left-diagonal-fill::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: var(--accent-color, #6366f1); transform: translate(-100%, -100%); transition: transform 0.35s ease; z-index: -1; }\n.hover-sliding-top-left-diagonal-fill:hover::before { transform: translate(0, 0); }\n.hover-sliding-top-left-diagonal-fill:hover { color: #ffffff; }",
        "desc":  "Diagonal background sweep from top-left corner."
    },
    {
        "category":  "11. The Sliding",
        "name":  "Bottom-Right Diagonal Fill",
        "id":  "sliding-bottom-right-diagonal-fill",
        "css":  ".hover-sliding-bottom-right-diagonal-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; overflow: hidden; }\n.hover-sliding-bottom-right-diagonal-fill::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: var(--accent-color, #6366f1); transform: translate(100%, 100%); transition: transform 0.35s ease; z-index: -1; }\n.hover-sliding-bottom-right-diagonal-fill:hover::before { transform: translate(0, 0); }\n.hover-sliding-bottom-right-diagonal-fill:hover { color: #ffffff; }",
        "desc":  "Diagonal background sweep from bottom-right corner."
    },
    {
        "category":  "11. The Sliding",
        "name":  "Center-Out Background Fill",
        "id":  "sliding-center-out-fill",
        "css":  ".hover-sliding-center-out-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; overflow: hidden; }\n.hover-sliding-center-out-fill::before { content: \u0027\u0027; position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; background-color: var(--accent-color, #6366f1); border-radius: 50%; transform: translate(-50%, -50%) scale(0); transition: transform 0.4s ease; z-index: -1; }\n.hover-sliding-center-out-fill:hover::before { transform: translate(-50%, -50%) scale(2.5); }\n.hover-sliding-center-out-fill:hover { color: #ffffff; }",
        "desc":  "Circle background expanding 100% from center out."
    },
    {
        "category":  "11. The Sliding",
        "name":  "Edges-In Background Fill",
        "id":  "sliding-edges-in-fill",
        "css":  ".hover-sliding-edges-in-fill { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; overflow: hidden; }\n.hover-sliding-edges-in-fill::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: var(--accent-color, #6366f1); clip-path: inset(50% 50% 50% 50%); transition: clip-path 0.35s ease; z-index: -1; }\n.hover-sliding-edges-in-fill:hover::before { clip-path: inset(0 0 0 0); }\n.hover-sliding-edges-in-fill:hover { color: #ffffff; }",
        "desc":  "Background closing in 100% from outside edges inward."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Jagged Zig-Zag Lines",
        "id":  "fancy-jagged-zigzag",
        "css":  ".hover-fancy-jagged-zigzag { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-fancy-jagged-zigzag::after { content: \u0027\u0027; position: absolute; width: 100%; height: 6px; bottom: 0; left: 0; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\u0027http://www.w3.org/2000/svg\u0027 viewBox=\u00270 0 20 10\u0027%3E%3Cpolyline points=\u00270,10 5,0 10,10 15,0 20,10\u0027 fill=\u0027none\u0027 stroke=\u0027%236366f1\u0027 stroke-width=\u00272\u0027/%3E%3C/svg%3E\"); background-size: 16px 6px; background-repeat: repeat-x; opacity: 0; transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-fancy-jagged-zigzag:hover::after { opacity: 1; transform: scaleX(1); }",
        "desc":  "Underline with a jagged zig-zag SVG wave pattern revealing on hover."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Wavy Lines",
        "id":  "fancy-wavy-lines",
        "css":  ".hover-fancy-wavy-lines { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-fancy-wavy-lines::after { content: \u0027\u0027; position: absolute; width: 100%; height: 6px; bottom: 0; left: 0; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\u0027http://www.w3.org/2000/svg\u0027 viewBox=\u00270 0 20 12\u0027%3E%3Cpath d=\u0027M0 6 Q5 0 10 6 T20 6\u0027 fill=\u0027none\u0027 stroke=\u0027%236366f1\u0027 stroke-width=\u00272\u0027/%3E%3C/svg%3E\"); background-size: 20px 6px; background-repeat: repeat-x; opacity: 0; transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-fancy-wavy-lines:hover::after { opacity: 1; transform: scaleX(1); }",
        "desc":  "Smooth sine wavy underline expanding horizontally."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Staggered Stair-Step Blocks",
        "id":  "fancy-stairstep-blocks",
        "css":  ".hover-fancy-stairstep-blocks { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 6px; }\n.hover-fancy-stairstep-blocks::after { content: \u0027\u0027; position: absolute; width: 100%; height: 4px; bottom: 0; left: 0; background: linear-gradient(90deg, #6366f1 25%, transparent 25%, transparent 50%, #6366f1 50%, #6366f1 75%, transparent 75%); background-size: 16px 4px; opacity: 0; transition: opacity 0.3s ease; }\n.hover-fancy-stairstep-blocks:hover::after { opacity: 1; }",
        "desc":  "Stair-step pixelated block building up across bottom."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Dashed Line Run",
        "id":  "fancy-dashed-line-run",
        "css":  ".hover-fancy-dashed-line-run { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-fancy-dashed-line-run::after { content: \u0027\u0027; position: absolute; width: 100%; height: 2px; bottom: 0; left: 0; background: repeating-linear-gradient(90deg, var(--accent-color, #6366f1), var(--accent-color, #6366f1) 6px, transparent 6px, transparent 12px); opacity: 0; transition: opacity 0.3s ease; }\n.hover-fancy-dashed-line-run:hover::after { opacity: 1; animation: dashedRun 0.6s linear infinite; }\n@keyframes dashedRun { to { background-position: 12px 0; } }",
        "desc":  "Dashed underline with dashes running horizontally across."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Dotted Line March",
        "id":  "fancy-dotted-line-march",
        "css":  ".hover-fancy-dotted-line-march { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 4px; }\n.hover-fancy-dotted-line-march::after { content: \u0027\u0027; position: absolute; width: 100%; height: 3px; bottom: 0; left: 0; background: radial-gradient(circle, var(--accent-color, #6366f1) 30%, transparent 35%); background-size: 10px 3px; background-repeat: repeat-x; opacity: 0; transition: opacity 0.3s ease; }\n.hover-fancy-dotted-line-march:hover::after { opacity: 1; animation: dottedMarch 0.5s linear infinite; }\n@keyframes dottedMarch { to { background-position: 10px 0; } }",
        "desc":  "Dotted underline marching in place endlessly."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Arrow-Tip Slide",
        "id":  "fancy-arrow-tip-slide",
        "css":  ".hover-fancy-arrow-tip-slide { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-right: 16px; transition: padding-right 0.3s ease; }\n.hover-fancy-arrow-tip-slide::after { content: \u0027â†’\u0027; position: absolute; right: 0; top: 50%; transform: translateY(-50%) translateX(-6px); opacity: 0; color: var(--accent-color, #6366f1); transition: transform 0.3s ease, opacity 0.3s ease; }\n.hover-fancy-arrow-tip-slide:hover::after { opacity: 1; transform: translateY(-50%) translateX(2px); }",
        "desc":  "Arrowhead tip sliding smoothly under text."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Multiple Stripe Wipe",
        "id":  "fancy-multiple-stripe-wipe",
        "css":  ".hover-fancy-multiple-stripe-wipe { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; overflow: hidden; z-index: 1; }\n.hover-fancy-multiple-stripe-wipe::before { content: \u0027\u0027; position: absolute; inset: 0; background: linear-gradient(90deg, #6366f1 33%, #a855f7 33%, #a855f7 66%, #ec4899 66%); transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease; z-index: -1; }\n.hover-fancy-multiple-stripe-wipe:hover::before { transform: scaleX(1); }\n.hover-fancy-multiple-stripe-wipe:hover { color: #fff; }",
        "desc":  "Multi-color stripes wiping across background."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Checkerboard Reveal",
        "id":  "fancy-checkerboard-reveal",
        "css":  ".hover-fancy-checkerboard-reveal { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; }\n.hover-fancy-checkerboard-reveal::before { content: \u0027\u0027; position: absolute; inset: 0; background-image: conic-gradient(rgba(99, 102, 241, 0.3) 90deg, transparent 90deg 180deg, rgba(99, 102, 241, 0.3) 180deg 270deg, transparent 270deg); background-size: 16px 16px; opacity: 0; transition: opacity 0.3s ease; z-index: -1; border-radius: 4px; }\n.hover-fancy-checkerboard-reveal:hover::before { opacity: 1; }",
        "desc":  "Masked checkerboard grid pattern fading in behind element."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Diagonal Stripes Wipe",
        "id":  "fancy-diagonal-stripes-wipe",
        "css":  ".hover-fancy-diagonal-stripes-wipe { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; overflow: hidden; z-index: 1; }\n.hover-fancy-diagonal-stripes-wipe::before { content: \u0027\u0027; position: absolute; inset: 0; background: repeating-linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0.2) 10px, rgba(99, 102, 241, 0.4) 10px, rgba(99, 102, 241, 0.4) 20px); transform: translateY(100%); transition: transform 0.3s ease; z-index: -1; }\n.hover-fancy-diagonal-stripes-wipe:hover::before { transform: translateY(0); }",
        "desc":  "45-degree diagonal stripes wiping across background."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Scalloped Edge Underline",
        "id":  "fancy-scalloped-edge",
        "css":  ".hover-fancy-scalloped-edge { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-fancy-scalloped-edge::after { content: \u0027\u0027; position: absolute; width: 100%; height: 6px; bottom: 0; left: 0; background-image: radial-gradient(circle at 5px 0, transparent 4px, var(--accent-color, #6366f1) 5px); background-size: 10px 6px; background-repeat: repeat-x; opacity: 0; transition: opacity 0.3s ease; }\n.hover-fancy-scalloped-edge:hover::after { opacity: 1; }",
        "desc":  "Scalloped semi-circle edge under element."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Triangles Pointing Right",
        "id":  "fancy-triangles-pointing-right",
        "css":  ".hover-fancy-triangles-pointing-right { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-fancy-triangles-pointing-right::after { content: \u0027\u0027; position: absolute; width: 100%; height: 6px; bottom: 0; left: 0; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\u0027http://www.w3.org/2000/svg\u0027 viewBox=\u00270 0 10 10\u0027%3E%3Cpolygon points=\u00270,0 10,5 0,10\u0027 fill=\u0027%236366f1\u0027/%3E%3C/svg%3E\"); background-size: 10px 6px; background-repeat: repeat-x; opacity: 0; transition: opacity 0.3s ease; }\n.hover-fancy-triangles-pointing-right:hover::after { opacity: 1; }",
        "desc":  "Row of tiny triangles pointing right sliding under text."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Triangles Pointing Down",
        "id":  "fancy-triangles-pointing-down",
        "css":  ".hover-fancy-triangles-pointing-down { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-fancy-triangles-pointing-down::after { content: \u0027\u0027; position: absolute; width: 100%; height: 6px; bottom: 0; left: 0; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\u0027http://www.w3.org/2000/svg\u0027 viewBox=\u00270 0 10 10\u0027%3E%3Cpolygon points=\u00270,0 10,0 5,10\u0027 fill=\u0027%236366f1\u0027/%3E%3C/svg%3E\"); background-size: 10px 6px; background-repeat: repeat-x; opacity: 0; transition: opacity 0.3s ease; }\n.hover-fancy-triangles-pointing-down:hover::after { opacity: 1; }",
        "desc":  "Triangles pointing down dropping from bottom border."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Intersecting Grid Lines",
        "id":  "fancy-intersecting-grid",
        "css":  ".hover-fancy-intersecting-grid { position: relative; text-decoration: none; color: inherit; display: inline-block; padding: 8px 16px; border-radius: 4px; z-index: 1; }\n.hover-fancy-intersecting-grid::before { content: \u0027\u0027; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px); background-size: 8px 8px; opacity: 0; transition: opacity 0.3s ease; z-index: -1; border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 4px; }\n.hover-fancy-intersecting-grid:hover::before { opacity: 1; }",
        "desc":  "Crosshatch grid lines extending out from element."
    },
    {
        "category":  "12. The Fancy",
        "name":  "Woven Thread Effect",
        "id":  "fancy-woven-thread",
        "css":  ".hover-fancy-woven-thread { position: relative; text-decoration: none; color: inherit; display: inline-block; padding-bottom: 8px; }\n.hover-fancy-woven-thread::after { content: \u0027\u0027; position: absolute; width: 100%; height: 8px; bottom: 0; left: 0; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\u0027http://www.w3.org/2000/svg\u0027 viewBox=\u00270 0 20 12\u0027%3E%3Cpath d=\u0027M0 6 Q5 0 10 6 T20 6\u0027 fill=\u0027none\u0027 stroke=\u0027%236366f1\u0027 stroke-width=\u00271.5\u0027/%3E%3Cpath d=\u0027M0 6 Q5 12 10 6 T20 6\u0027 fill=\u0027none\u0027 stroke=\u0027%23a855f7\u0027 stroke-width=\u00271.5\u0027/%3E%3C/svg%3E\"); background-size: 20px 8px; background-repeat: repeat-x; opacity: 0; transition: opacity 0.3s ease; }\n.hover-fancy-woven-thread:hover::after { opacity: 1; }",
        "desc":  "Two interlaced sine wave lines weaving across each other."
    },
    {
        "category":  "13. The Inverted",
        "name":  "Horizontal Negative-Space Color Flip",
        "id":  "inverted-horizontal-flip",
        "css":  ".hover-inverted-horizontal-flip { position: relative; text-decoration: none; color: #6366f1; display: inline-block; padding: 8px 16px; border: 2px solid #6366f1; border-radius: 4px; z-index: 1; overflow: hidden; transition: color 0.3s ease; }\n.hover-inverted-horizontal-flip::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: #6366f1; transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; z-index: -1; }\n.hover-inverted-horizontal-flip:hover::before { transform: scaleX(1); }\n.hover-inverted-horizontal-flip:hover { color: #ffffff; }",
        "desc":  "Color and text color invert horizontally from left to right."
    },
    {
        "category":  "13. The Inverted",
        "name":  "Vertical Negative-Space Color Flip",
        "id":  "inverted-vertical-flip",
        "css":  ".hover-inverted-vertical-flip { position: relative; text-decoration: none; color: #6366f1; display: inline-block; padding: 8px 16px; border: 2px solid #6366f1; border-radius: 4px; z-index: 1; overflow: hidden; transition: color 0.3s ease; }\n.hover-inverted-vertical-flip::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: #6366f1; transform: scaleY(0); transform-origin: top; transition: transform 0.3s ease; z-index: -1; }\n.hover-inverted-vertical-flip:hover::before { transform: scaleY(1); }\n.hover-inverted-vertical-flip:hover { color: #ffffff; }",
        "desc":  "Color and text invert vertically from top to bottom."
    },
    {
        "category":  "13. The Inverted",
        "name":  "Diagonal Negative-Space Color Flip",
        "id":  "inverted-diagonal-flip",
        "css":  ".hover-inverted-diagonal-flip { position: relative; text-decoration: none; color: #6366f1; display: inline-block; padding: 8px 16px; border: 2px solid #6366f1; border-radius: 4px; z-index: 1; overflow: hidden; transition: color 0.35s ease; }\n.hover-inverted-diagonal-flip::before { content: \u0027\u0027; position: absolute; inset: 0; background-color: #6366f1; transform: translate(-100%, 100%); transition: transform 0.35s ease; z-index: -1; }\n.hover-inverted-diagonal-flip:hover::before { transform: translate(0, 0); }\n.hover-inverted-diagonal-flip:hover { color: #ffffff; }",
        "desc":  "Color and text invert along a 45-degree diagonal wipe."
    },
    {
        "category":  "13. The Inverted",
        "name":  "Center-Expand Negative-Space Color Flip",
        "id":  "inverted-center-expand-flip",
        "css":  ".hover-inverted-center-expand-flip { position: relative; text-decoration: none; color: #6366f1; display: inline-block; padding: 8px 16px; border: 2px solid #6366f1; border-radius: 4px; z-index: 1; overflow: hidden; transition: color 0.4s ease; }\n.hover-inverted-center-expand-flip::before { content: \u0027\u0027; position: absolute; top: 50%; left: 50%; width: 100%; height: 100%; background-color: #6366f1; border-radius: 50%; transform: translate(-50%, -50%) scale(0); transition: transform 0.4s ease; z-index: -1; }\n.hover-inverted-center-expand-flip:hover::before { transform: translate(-50%, -50%) scale(2.5); }\n.hover-inverted-center-expand-flip:hover { color: #ffffff; }",
        "desc":  "Color and text invert expanding in a circle from center."
    },
    {
        "category":  "14. The 3D",
        "name":  "Backward Hinge Flip",
        "id":  "3d-backward-hinge-flip",
        "css":  ".hover-3d-backward-hinge-flip { display: inline-block; perspective: 600px; }\n.hover-3d-backward-hinge-flip-inner { display: inline-block; padding: 8px 16px; background-color: var(--accent-color, #6366f1); color: #ffffff; border-radius: 6px; transform-origin: top; transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n.hover-3d-backward-hinge-flip:hover .hover-3d-backward-hinge-flip-inner { transform: rotateX(-30deg); }",
        "desc":  "3D perspective flip backward around X axis."
    },
    {
        "category":  "14. The 3D",
        "name":  "Forward Hinge Flip",
        "id":  "3d-forward-hinge-flip",
        "css":  ".hover-3d-forward-hinge-flip { display: inline-block; perspective: 600px; }\n.hover-3d-forward-hinge-flip-inner { display: inline-block; padding: 8px 16px; background-color: var(--accent-color, #6366f1); color: #ffffff; border-radius: 6px; transform-origin: bottom; transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n.hover-3d-forward-hinge-flip:hover .hover-3d-forward-hinge-flip-inner { transform: rotateX(30deg); }",
        "desc":  "3D perspective flip forward around X axis."
    },
    {
        "category":  "14. The 3D",
        "name":  "Horizontal Cube Rotate",
        "id":  "3d-horizontal-cube-rotate",
        "css":  ".hover-3d-horizontal-cube-rotate { display: inline-block; perspective: 800px; }\n.hover-3d-horizontal-cube-rotate-inner { display: inline-block; padding: 8px 16px; background-color: var(--accent-color, #6366f1); color: #ffffff; border-radius: 6px; transition: transform 0.4s ease; transform-style: preserve-3d; }\n.hover-3d-horizontal-cube-rotate:hover .hover-3d-horizontal-cube-rotate-inner { transform: rotateX(90deg) translateY(-10px); }",
        "desc":  "3D cube rotation revealing bottom face on hover."
    },
    {
        "category":  "14. The 3D",
        "name":  "Vertical Cube Rotate",
        "id":  "3d-vertical-cube-rotate",
        "css":  ".hover-3d-vertical-cube-rotate { display: inline-block; perspective: 800px; }\n.hover-3d-vertical-cube-rotate-inner { display: inline-block; padding: 8px 16px; background-color: var(--accent-color, #6366f1); color: #ffffff; border-radius: 6px; transition: transform 0.4s ease; transform-style: preserve-3d; }\n.hover-3d-vertical-cube-rotate:hover .hover-3d-vertical-cube-rotate-inner { transform: rotateY(90deg) translateX(10px); }",
        "desc":  "3D cube rotation revealing side face on hover."
    },
    {
        "category":  "14. The 3D",
        "name":  "Physical Key Press Down",
        "id":  "3d-physical-key-press",
        "css":  ".hover-3d-physical-key-press { display: inline-block; padding: 10px 20px; background-color: #6366f1; color: #ffffff; border-radius: 8px; box-shadow: 0 6px 0 #4338ca, 0 10px 15px rgba(0,0,0,0.3); transition: transform 0.1s ease, box-shadow 0.1s ease; cursor: pointer; }\n.hover-3d-physical-key-press:hover { transform: translateY(4px); box-shadow: 0 2px 0 #4338ca, 0 4px 8px rgba(0,0,0,0.2); }",
        "desc":  "Skeuomorphic keyboard key press down with shadow drop."
    },
    {
        "category":  "14. The 3D",
        "name":  "Pop-Out Float Off Page",
        "id":  "3d-pop-out-float",
        "css":  ".hover-3d-pop-out-float { display: inline-block; padding: 10px 20px; background-color: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #ffffff; border-radius: 8px; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease; }\n.hover-3d-pop-out-float:hover { transform: translateY(-6px) scale(1.03); box-shadow: 0 15px 30px rgba(99, 102, 241, 0.3); }",
        "desc":  "Card or button pops out with 3D elevation shadow and scale."
    },
    {
        "category":  "14. The 3D",
        "name":  "Isometric Tilt Left",
        "id":  "3d-isometric-tilt-left",
        "css":  ".hover-3d-isometric-tilt-left { display: inline-block; perspective: 1000px; }\n.hover-3d-isometric-tilt-left-inner { display: inline-block; padding: 10px 20px; background-color: #6366f1; color: #ffffff; border-radius: 8px; transition: transform 0.3s ease, box-shadow 0.3s ease; }\n.hover-3d-isometric-tilt-left:hover .hover-3d-isometric-tilt-left-inner { transform: rotateY(-12deg) rotateX(6deg); box-shadow: -10px 15px 25px rgba(0,0,0,0.3); }",
        "desc":  "3D isometric tilt to the left (-12deg rotateY, +6deg rotateX)."
    },
    {
        "category":  "14. The 3D",
        "name":  "Isometric Tilt Right",
        "id":  "3d-isometric-tilt-right",
        "css":  ".hover-3d-isometric-tilt-right { display: inline-block; perspective: 1000px; }\n.hover-3d-isometric-tilt-right-inner { display: inline-block; padding: 10px 20px; background-color: #6366f1; color: #ffffff; border-radius: 8px; transition: transform 0.3s ease, box-shadow 0.3s ease; }\n.hover-3d-isometric-tilt-right:hover .hover-3d-isometric-tilt-right-inner { transform: rotateY(12deg) rotateX(6deg); box-shadow: 10px 15px 25px rgba(0,0,0,0.3); }",
        "desc":  "Isometric tilt to the right (+12deg rotateY, +6deg rotateX)."
    }
];
