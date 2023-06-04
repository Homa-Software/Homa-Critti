import { Flex } from 'native-base';
import { getGames } from '@/modules/games/MyGames/GamesTiles/GamesTiles.mocks';
import GameTile from '@/modules/games/MyGames/GamesTiles/GameTile';

export default function MyGamesScreen() {
  const games = getGames();

  return (
    <Flex flexDirection="row" flexWrap={'wrap'} gap="1" justifyContent={'center'}>
      {games.map((game) => (
        <GameTile gameTileInfo={game} key={game.id} />
      ))}
    </Flex>
  );
}
