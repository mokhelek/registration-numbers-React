import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/registration-numbers-React/',
})

// if (command !== 'serve') {
//   config.base = '/registration-numbers/'
// }

// return config ;