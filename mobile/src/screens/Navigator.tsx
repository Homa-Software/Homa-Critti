import { NavigationContainer } from '@react-navigation/native';
import type { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeBaseProvider } from 'native-base';
import MyGamesScreen from './MyGames';
import GameScreen from './Game';
import type { GameScreenProps } from '@/modules/games/Game/Game.types';

export type DrawerParamList = {
  'My Games': undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My Games" component={MyGamesScreen} />
    </Drawer.Navigator>
  );
}

export type NativeStackParamList = {
  Drawer: NavigatorScreenParams<DrawerParamList>;
  Game: GameScreenProps;
};

const NativeStack = createNativeStackNavigator<NativeStackParamList>();

function NativeStackNavigator() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <NativeStack.Screen name="Game" component={GameScreen} />
    </NativeStack.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NativeStackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
