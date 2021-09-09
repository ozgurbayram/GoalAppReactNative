import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { TabStackParamList } from "../types";

const Stack = createNativeStackNavigator<TabStackParamList>();

export default function TabNavigator() {
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