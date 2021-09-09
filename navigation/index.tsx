import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName} from 'react-native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [is_loged_in, setIs_loged_in] = React.useState<Boolean>(false)
  return (
    <NavigationContainer
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

