import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Text, View } from 'react-native';

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { TabStackParamList, TabParamList, RootParamList,RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabThreeScreen from '../screens/TabThreeScreen';
import ModalScreen from '../screens/ModalScreen';
import TabNavigator from './TabBarNavigator';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [is_loged_in, setIs_loged_in] = React.useState<Boolean>(false)
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {is_loged_in?
        <AuthNavigator/>
        :
        (
            <HomeNavigator/>
        )
      }
    </NavigationContainer>
  );
}

