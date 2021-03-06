import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { theme } from '../constants/theme'
import { useTodos } from '../hooks/useTodos'
import { Divider } from './Divider'

export interface TodoItemProps {
  title: string
  completed: boolean
  createdAt: number
  id: string
}

export function TodoItem(props: TodoItemProps): JSX.Element {
  const { title, completed, createdAt, id } = props
  const { deleteTodo, completeTodo } = useTodos()

  return (
    <>
      <Divider />
      <View style={styles.todoContainerStyle}>
        <TouchableOpacity
          onPress={() => completeTodo(id)}
          style={{ width: '90%' }}
        >
          <Text
            style={{
              color: completed ? 'grey' : 'black',
              flexWrap: 'wrap',
              fontSize: theme.typography.size.medium,
              paddingRight: theme.spacing.small,
              textDecorationLine: completed ? 'line-through' : 'none',
            }}
          >
            {title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteTodo(id)}
          style={styles.deleteButtonStyle}
        >
          <FontAwesome name="trash" size={theme.typography.size.large} />
        </TouchableOpacity>
      </View>
      <Divider />
    </>
  )
}

const styles = StyleSheet.create({
  deleteButtonStyle: {
    paddingLeft: theme.spacing.xsmall,
  },
  todoContainerStyle: {
    alignItems: 'center',
    backgroundColor: theme.colors.lightGray,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.medium,
    width: '100%',
  },
})
