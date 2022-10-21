import {createStackNavigator} from 'react-navigation-stack';

import {Page as StarterIntro} from '../screens/StarterIntro/StarterIntro';
import {Page as StarterName} from '../screens/StaterName/StarterName';
import {Page as StartDay} from '../screens/StarterDay/StarterDay';
export default createStackNavigator({
  StarterIntro,
  StarterName,
  StartDay,
});
