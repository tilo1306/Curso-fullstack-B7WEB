import {createStackNavigator} from 'react-navigation-stack';

import {Page as StarterIntro} from '../screens/StarterIntro/StarterIntro';
import StarterName from '../screens/StaterName/StarterName';
import StarterDay from '../screens/StarterDay';
import StarterNivel from '../screens/StarterNivel';
import StarterRecommendations from '../screens/StarterRecommendations';

export default createStackNavigator({
  StarterIntro,
  StarterName,
  StarterDay,
  StarterNivel,
  StarterRecommendations,
});
