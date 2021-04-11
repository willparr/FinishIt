import { FontAwesome } from '@expo/vector-icons'
import { set } from 'lodash'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { theme } from '../constants/theme'
import { useTodos } from '../hooks/useTodos'
import { AddTaskModal } from './AddTaskModal'
import { View } from './Themed'
import { TodoItem } from './TodoItem'

export interface TodoItemProps {
  title: string
  completed: boolean
  createdAt: number
  onPress: () => void
}

export default function EditScreenInfo({
  path,
}: {
  path: string
}): JSX.Element {
  const { addTodo, todos } = useTodos()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  console.log('todos:', JSON.stringify(todos))

  return (
    <View style={styles.listContainer}>
      <ScrollView style={{ flex: 1 }}>
        {!!todos &&
          Object.entries(todos).map(([key, todo]) => {
            if (!todo) {
              return
            }
            return (
              <TodoItem
                completed={todo.completed}
                createdAt={todo.createdAt}
                id={todo.id}
                key={todo.createdAt}
                title={todo.title}
              />
            )
          })}
      </ScrollView>
      <AddTaskModal />
    </View>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#5c8ff7',
    borderRadius: 30,
    bottom: -15,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    width: 60,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
})
