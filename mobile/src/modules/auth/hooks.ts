import { useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { ResponseType } from 'expo-auth-session';

import { env } from '@/modules/config/env';
import { useAuthStore } from '@/modules/auth/store';
import type { GoogleOIDCProfile } from '@/modules/auth/token';

export const useAuth = () => {
  const [, response, promptAsync] = Google.useAuthRequest({
    androidClientId: env('ANDROID_CLIENT_ID'),
    iosClientId: env('IOS_CLIENT_ID'),
    expoClientId: env('EXPO_CLIENT_ID'),
    usePKCE: true,
    // This will cause the access token not to be returned, which
    // is not ideal, and there should be better ways to do this
    responseType: ResponseType.IdToken,
  });
  const { profile, idToken, setToken, logout } = useAuthStore();

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response.params.id_token);
    }
  }, [response, setToken]);

  const isSignedIn = response?.type === 'success';

  const common = {
    idToken,
    logout,
    login: () => promptAsync(),
  } as const;

  if (isSignedIn) {
    return {
      ...common,
      isSignedIn: true,
      profile: profile as GoogleOIDCProfile,
    } as const;
  }

  return {
    ...common,
    isSignedIn: false,
    profile: profile as null,
  } as const;
};
