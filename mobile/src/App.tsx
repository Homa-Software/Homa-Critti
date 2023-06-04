import { registerRootComponent } from 'expo';
import MyNavigator from './screens/Navigator';

import { env } from '@/modules/config/env';

export default function App() {
  console.log(env('ENV_TEST'));
  return <MyNavigator />;
}

registerRootComponent(App);
