/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import AppPro from './App1';
import AppChat from './AppChat';
import App2 from './App2';
import AppBgC from './AppBgChanger';

AppRegistry.registerComponent(appName, () => AppBgC);
