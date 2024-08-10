import { 
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        breakpoints: {
            // ... media queries
        },
        colors: {
          // ...
        }
    },
    rules: [
        // ...
    ],
    presets: [
        presetAttributify({ /* preset options */}),
        presetUno({ /* preset options */}),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
              },
        }),
      ],
})