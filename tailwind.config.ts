import type { Config } from 'tailwindcss';

/**
 * NativeWind v4 configuration for MDLBeast Member App.
 *
 * Tier colour tokens are placeholders — replace with the exact values from
 * Figma → Design System once Dev Mode access is granted (see Developer Guide §2).
 */
const config: Config = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'mdl-black': '#0A0A0A',
        'mdl-gold': '#9A7D3A',
        'pool-blue': '#1A3D6B',
        'prive-dark': '#1C1008',
        'unstable-red': '#8B0000',
      },
      fontFamily: {
        brand: ['MDLBeast-Regular'],
        'brand-bold': ['MDLBeast-Bold'],
      },
    },
  },
  plugins: [],
};

export default config;
