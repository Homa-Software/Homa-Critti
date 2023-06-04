import { Box, VStack, Image, Text, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import type { GameTileInfo } from '../MyGames.types';
import type { NavigationProp } from '@react-navigation/native';
import type { NativeStackParamList } from '@/screens/Navigator';

type GameTileProps = {
  gameTileInfo: GameTileInfo;
};

export default function GameTile({ gameTileInfo }: GameTileProps) {
  const navigation = useNavigation<NavigationProp<NativeStackParamList>>();

  return (
    <Box
      backgroundColor="primary.100"
      maxWidth={120}
      maxHeight={220}
      width="full"
      onTouchStart={(event) => {
        navigation.navigate('Game', { game_id: gameTileInfo.id });
      }}>
      <VStack space={1} boxSize="full" p={1} alignItems={'center'}>
        <Image source={{ uri: gameTileInfo.img }} alt="Game Image" h={150} w="full" />
        <Text>{gameTileInfo.name}</Text>
        <HStack space={2} alignItems="center">
          <Image
            source={{ uri: gameTileInfo.platform_logo }}
            alt={gameTileInfo.platform}
            size="4"
          />
          <Text>{gameTileInfo.score}</Text>
        </HStack>
      </VStack>
    </Box>
  );
}
