/* eslint-disable react/display-name */
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import TabOneScreen from '../screens/TabOneScreen'
import { default as Storybook } from '../storybook'
import { BottomTabParamList, TabOneParamList } from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator(): JSX.Element {
  const colorScheme = 'light'

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        component={TabOneNavigator}
        name="TabOne"
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon color={color} name="ios-code" />
          ),
        }}
      />
      <BottomTab.Screen
        component={Storybook}
        name="TabThree"
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon color={color} name="ios-code" />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name']
  color: string
}) {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        component={TabOneScreen}
        name="TabOneScreen"
        options={{ headerShown: false }}
      />
    </TabOneStack.Navigator>
  )
}
