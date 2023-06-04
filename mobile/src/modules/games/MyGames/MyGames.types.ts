export type Platform = 'PlayStation' | 'XBox' | 'Nintendo' | 'Wii' | 'PC';

export type GameTileInfo = {
  id: number;
  name: string;
  platform: Platform;
  score: number;
  img: string;
};