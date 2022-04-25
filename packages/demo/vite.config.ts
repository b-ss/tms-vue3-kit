import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'tms-vue3-ui',
          // esModule: true,
          resolveStyle: (name) => {
            if (name === 'json-schema-factory')
              return `tms-vue3-ui/dist/es/json-schema/style/index.css`
            return `tms-vue3-ui/dist/es/${name}/style/index.css`
          },
        },
      ],
    }),
  ],
})