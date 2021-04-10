import React from 'react'
import { StyleSheet, View } from 'react-native'
import { theme } from '../constants/theme'
export function Divider(): JSX.Element {
  return (
    <View
      style={{
        alignSelf: 'stretch',
        padding: 3,
      }}
    />
  )
}
