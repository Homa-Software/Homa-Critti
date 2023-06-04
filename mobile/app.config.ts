import type { ExpoConfig, ConfigContext } from 'expo/config';
import { config } from 'dotenv';
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

config();

export const envSchema = z.object({
  ENV_TEST: z.string(),
  ANDROID_CLIENT_ID: z.string(),
  IOS_CLIENT_ID: z.string(),
  EXPO_CLIENT_ID: z.string(),
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
  scheme: 'homacritti',
  extra: {
    env,
    eas: {
      projectId: '5e84c9ad-c489-4a1e-9785-e75ff6776600',
    },
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
    bundleIdentifier: 'com.homa_critti.app',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.homa_critti.app',
  },
  web: {
    favicon: './assets/favicon.png',
  },
});
