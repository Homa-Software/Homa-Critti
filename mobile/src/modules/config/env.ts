import Constants from 'expo-constants';

type Env = {
  ENV_TEST: string;
  ANDROID_CLIENT_ID: string;
  IOS_CLIENT_ID: string;
  EXPO_CLIENT_ID: string;
};

export const env = <KeyT extends keyof Env>(key: KeyT): Env[KeyT] => {
  return Constants.expoConfig?.extra?.env[key] as Env[KeyT];
};
