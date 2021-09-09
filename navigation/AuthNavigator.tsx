import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import ModalScreen from "../screens/ModalScreen"

const AuthStack = createNativeStackNavigator()

export default function AuthNavigator() {
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name="Modal" component={ModalScreen}/>
    </AuthStack.Navigator>
  )
}
