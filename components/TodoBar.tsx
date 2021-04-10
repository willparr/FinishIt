import { FontAwesome } from '@expo/vector-icons'
import { Icon } from 'expo'
import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'

import { TextInput } from './TextInput'

interface TodoBarProps {
  buttonTitle: string
  placeholder: string
  onPress: () => void
}

export function TodoBar(props: TodoBarProps): JSX.Element {
  const { buttonTitle, onPress } = props

  return (
    <View style={styles.parentStyle}>
      <TextInput />
      <FontAwesome.Button
        iconStyle={{
          fontSize: 50,
          marginRight: 0,
        }}
        name="plus-circle"
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  parentStyle: {
    borderColor: 'grey',
    borderWidth: 1,
    flexDirection: 'row',
    paddingTop: 2,
  },
})
