/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import Route from './src/navigation/index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Route);
