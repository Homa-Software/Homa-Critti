import { create } from 'zustand';

import { decodeGoogleOIDCProfile, type GoogleOIDCProfile } from './token';

type StoreSchema = {
  idToken: string | null;
  profile: GoogleOIDCProfile | null;
  setToken: (token: string | null) => void;
  logout: () => void;
};

export const useAuthStore = create<StoreSchema>((set) => ({
  idToken: null,
  profile: null,
  setToken: (token) =>
    set({
      idToken: token,
      profile: token ? decodeGoogleOIDCProfile(token) : null,
    }),
  logout: () => set({ idToken: null, profile: null }),
}));
