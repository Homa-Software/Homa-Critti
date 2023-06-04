export type Platform = 'PlayStation' | 'XBox' | 'Nintendo' | 'Wii' | 'PC';

export type GameTileInfo = {
  id: number;
  name: string;
  platform: Platform;
  platform_logo: string;
  score: number;
  img: string;
};