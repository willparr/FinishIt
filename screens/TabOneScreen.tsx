import * as React from 'react'
import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { View } from '../components/Themed'
import { theme } from '../constants/theme'

export default function TabOneScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
