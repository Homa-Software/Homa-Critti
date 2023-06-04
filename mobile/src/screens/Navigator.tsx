import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeBaseProvider } from 'native-base';
import MyGames from './MyGames';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My Games" component={MyGames} />
    </Drawer.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
