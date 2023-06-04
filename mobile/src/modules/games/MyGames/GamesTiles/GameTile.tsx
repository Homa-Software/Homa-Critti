import { Box, VStack, Image, Text, Row } from 'native-base';
import type { GameTileInfo } from '../MyGames.types';

type GameTileProps = {
  gameTileInfo: GameTileInfo;
};

export default function GameTile({ gameTileInfo }: GameTileProps) {
  return (
    <Box>
      <VStack>
        <Image source={{ uri: gameTileInfo.img }} alt="GAME IMAGE" size="xl" />
        <Box>
          <Row>
            <Text>{gameTileInfo.platform}</Text>
            <Text>{gameTileInfo.name}</Text>
            <Text>{gameTileInfo.score}</Text>
          </Row>
        </Box>
      </VStack>
    </Box>
  );
}
