import Constants from 'expo-constants';

type Env = {
  ENV_TEST: string;
};

export const env = <KeyT extends keyof Env>(key: KeyT): Env[KeyT] => {
  return Constants.expoConfig.extra.env[key] as Env[KeyT];
};
