/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './AppPass';
import { name as appName } from './app.json';
import AppDice from './src/AppDice';

AppRegistry.registerComponent(appName, () => AppDice);
