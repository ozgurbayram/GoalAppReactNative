import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Header from "../components/Header"
import TabThreeScreen from "../screens/TabThreeScreen"
import { RootParamList } from "../types"
import TabNavigator from "./TabBarNavigator"
const HomeStack = createNativeStackNavigator<RootParamList>()

export default function HomeNavigator() {
  return(
    <HomeStack.Navigator
      screenOptions={{
      }}
    >
      <HomeStack.Screen 
      options={{
        header:()=><Header/>,
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
