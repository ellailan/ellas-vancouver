import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// IMPORTANT: change this to match your GitHub repository name.
// If your repo is https://github.com/<user>/ellas-vancouver, base should be '/ellas-vancouver/'.
// If you are deploying to a <user>.github.io root repo, set base to '/'.
export default defineConfig({
    plugins: [react()],
    base: '/ellas-vancouver/',
});
