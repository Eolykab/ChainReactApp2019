import React from "react"
import { createStackNavigator } from "react-navigation"
import { MainNavigator } from "./main-navigator"
import { WelcomeScreen } from "../views/screens/welcome-screen"
import { View } from "react-native"

const gantScreen = () => <View style={{ backgroundColor: "red", flex: 1 }} />

export const RootNavigator = createStackNavigator({
  gant: { screen: gantScreen },
})

// export const RootNavigator = createStackNavigator(
//   {
//     welcome: { screen: WelcomeScreen },
//     mainStack: { screen: MainNavigator },
//   },
//   {
//     initialRouteName: "welcome",
//     headerMode: "none",
//     navigationOptions: { gesturesEnabled: false },
//     cardStyle: { shadowColor: "transparent" },
//   },
// )
