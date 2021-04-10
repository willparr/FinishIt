import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { theme } from '../constants/theme'
import { Divider } from './Divider'

export interface TodoItemProps {
  title: string
  completed: boolean
  createdAt: number
  onPress: () => void
}

export function TodoItem(props: TodoItemProps): JSX.Element {
  const { onPress, title, completed, createdAt } = props
  return (
    <View style={styles.todoContainerStyle}>
      <Text
        style={{
          color: completed ? 'grey' : 'black',
          fontSize: theme.typography.size.large,
          textDecorationLine: completed ? 'line-through' : 'none',
        }}
      >
        {title}
      </Text>
      <TouchableOpacity onPress={onPress} style={styles.deleteButtonStyle}>
        <FontAwesome name="trash" size={theme.typography.size.large} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  deleteButtonStyle: {
    alignItems: 'flex-end',
    paddingLeft: 10,
  },
  todoContainerStyle: {
    alignItems: 'center',
    backgroundColor: theme.colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.small,
    width: '100%',
  },
})
