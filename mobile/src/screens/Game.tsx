import { Text } from 'native-base';
import { type RouteProp, useRoute } from '@react-navigation/native';
import type { NativeStackParamList } from './Navigator';

export type GameRouteProp = RouteProp<NativeStackParamList, 'Game'>;

export default function GameScreen() {
  const route = useRoute<GameRouteProp>();
  return <Text>{`Game Screen for game of ID: ${route.params.game_id}`}</Text>;
}
