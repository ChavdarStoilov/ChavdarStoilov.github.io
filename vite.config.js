// import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/dschinni-gh-page/'
//   // plugins: [react()],
//   // server: {
//   //   host: true,
//   //   port: 3000, 
//   //    watch: {
//   //      usePolling: true
//   //    }
//   // }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/'
  }

  return config
})