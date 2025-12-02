# Animated Backgrounds

This folder contains all animated background components for the portfolio.

## Available Backgrounds

### 1. GradientBackground

- **File**: `GradientBackground.js`
- **Description**: Smooth animated gradient that cycles through multiple colors
- **Features**:
  - CSS-based gradient animation
  - Customizable colors via CSS variables
  - 15-second animation cycle
  - Optimized for performance

### 2. AnimatedBackground

- **File**: `AnimatedBackground.js`
- **Description**: Complex animated background with multiple layers
- **Features**:
  - Animated gradient waves
  - Floating particles with organized streams
  - Animated lines
  - Gradient orbs
  - Subtle noise overlay

### 3. GhostMouseBackground

- **File**: `GhostMouseBackground.js`
- **Description**: Interactive Three.js shader-based background with mouse-following trails
- **Features**:
  - Mouse-following interactive trails
  - Smooth color transitions (HSB color space)
  - Blur and noise effects
  - WebGL shader-based rendering
  - Responsive to window resize

## How to Use

### In HeroSection.js:

```javascript
// Import backgrounds
import {
  AnimatedBackground,
  GradientBackground,
  GhostMouseBackground,
} from "./backgrounds";

// Select which background to use
const selectedBackground = "ghostMouse"; // Options: 'gradient', 'animated', 'ghostMouse', or null

// In JSX
{
  selectedBackground === "gradient" && <GradientBackground />;
}
{
  selectedBackground === "animated" && <AnimatedBackground />;
}
{
  selectedBackground === "ghostMouse" && <GhostMouseBackground />;
}
```

### Background Options:

- `'gradient'` - Uses the smooth gradient background
- `'animated'` - Uses the complex animated background with particles
- `'ghostMouse'` - Uses the interactive Three.js shader background
- `null` - No background animation

## Creating New Backgrounds

1. Create a new component file in this folder
2. Follow the naming convention: `[Name]Background.js`
3. Export as default
4. Add to `index.js` exports
5. Update HeroSection.js to include the new option

### Example Structure:

```javascript
"use client";
import { motion } from "framer-motion";

export default function NewBackground() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      // Your animation code here
    />
  );
}
```

## CSS Variables

The gradient background uses these CSS variables for customization:

- `--gradient-color-1`: First gradient color
- `--gradient-color-2`: Second gradient color
- `--gradient-color-3`: Third gradient color
- `--gradient-color-4`: Fourth gradient color

You can modify these in `globals.css` or update them dynamically with themes.
