import React from 'react'
import { StyleSheet, View } from 'react-native'
import { theme } from '../constants/theme'
export function Divider(): JSX.Element {
  return (
    <View
      style={{
        alignSelf: 'stretch',
        borderBottomColor: theme.colors.gray,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  )
}
