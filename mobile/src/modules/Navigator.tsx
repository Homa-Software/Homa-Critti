import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyGames from './screens/MyGames';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="My Games" component={MyGames} />
    </Drawer.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
