import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, View } from 'react-native';

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { TabStackParamList, TabParamList, RootParamList,RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabThreeScreen from '../screens/TabThreeScreen';
import { Ionicons } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<HomeNavigator/>
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}
const HomeStack = createNativeStackNavigator<RootParamList>()

function HomeNavigator({navigation}) {
  return(
    <HomeStack.Navigator
      screenOptions={{
      }}
    >
      <HomeStack.Screen 
      options={{
        // headerRight:({navigator})=>                <Pressable
        // >
        //     <Ionicons name="settings-outline" size={24} color="#fff"/>
        // </Pressable>,
        header:(navigation)=><Header/>,
        headerStyle:{}
      }}
      name="Home" component={TabNavigator}/>
      <HomeStack.Screen
        options={{
          headerTransparent:true,
          
          headerStyle:{
            backgroundColor:"#fff",
          }
        }}
        name="Settings"
        component={TabThreeScreen}/>
    </HomeStack.Navigator>
  )
}
const Stack = createNativeStackNavigator<TabStackParamList>();

function TabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={MyTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const inset = useSafeAreaInsets()
  return (
      
      <Tab.Navigator
      screenOptions={{
        tabBarStyle:{
          backgroundColor:"#EB5757",
          // marginTop:inset.top
        },
        tabBarLabelStyle:{
          color:'#fff'
        },
        tabBarIndicatorStyle:{
          borderColor:"#fff",
          backgroundColor:'#fff'
        },
      }}
    >
				
      <Tab.Screen name="Goals" component={TabOneScreen} />
      <Tab.Screen name="Achieved" component={TabTwoScreen} />
    </Tab.Navigator>
  );
}

