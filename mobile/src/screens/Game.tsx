import { Text } from 'native-base';
import type { GameScreenProps } from '@/modules/games/Game/Game.types';

export default function GameScreen({ game_id }: GameScreenProps) {
  return <Text>{`Game Screen for game of ID: ${game_id}`}</Text>;
}
