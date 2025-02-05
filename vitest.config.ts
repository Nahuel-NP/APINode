/// <reference types="vitest/globals"/>
import { defineConfig } from 'vitest/config';
import dotenv from 'dotenv'

if (process.env.VITEST) {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config({ path: '.env' });
}

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
});
