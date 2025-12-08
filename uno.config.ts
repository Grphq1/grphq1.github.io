import { defineConfig, presetIcons, presetTypography, presetWebFonts, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({}),
    presetWind3(),
    presetTypography(),

    presetWebFonts({
      provider: 'google',
      fonts: {
        secondary: ['Google Sans Flex', 'Vazirmatn'],
        primary: ['Open Sans', 'Vazirmatn'],
      },
    }),
  ],
})
