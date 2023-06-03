import { registerRootComponent } from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';

import { env } from '@/modules/config/env';

export default function App() {
  console.log(env('ENV_TEST'));
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app hh!</Text>
      <Button title="Press me" onPress={() => console.log('Pressed!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App);
