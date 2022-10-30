import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeStack from './HomeStack';
import WorkoutStack from './WorkoutStack';
import MyWorkoutsStack from './MyWorkoutsStack';

export default createBottomTabNavigator({
  HomeStack,
  WorkoutStack,
  MyWorkoutsStack,
});
