import type { ExpoConfig, ConfigContext } from 'expo/config';
import { config } from 'dotenv';
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

config();

export const envSchema = z.object({
  ENV_TEST: z.string(),
});

export const env = createEnv({
  clientPrefix: '',
  client: envSchema.shape,
  server: {},
  runtimeEnv: process.env,
});

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Homa-Critti',
  slug: 'Homa-Critti',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  extra: {
    env,
  },
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
});
