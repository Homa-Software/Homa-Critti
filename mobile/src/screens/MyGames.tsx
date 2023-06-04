import { Box, Center } from 'native-base';
import { getGames } from '@/modules/games/MyGames/GamesTiles/GamesTiles.mocks';
import GameTile from '@/modules/games/MyGames/GamesTiles/GameTile';

export default function MyGames() {
  const games = getGames();

  return (
    <Center>
      <Box bold position="absolute" color="coolGray.50" top="0">
        {games.map((game) => (
          <GameTile gameTileInfo={game} key={game.id} />
        ))}
      </Box>
    </Center>
  );
}
