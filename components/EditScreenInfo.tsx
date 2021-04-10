import { set } from 'lodash'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { useTodos } from '../hooks/useTodos'
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
  const { addTodo, getTodos } = useTodos()
  const todos = getTodos()

  console.log(JSON.stringify(todos))

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
      }}
    >
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
      <TouchableOpacity
        onPress={() => {
          addTodo()
        }}
        style={styles.floatingButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    alignSelf: 'center',
    backgroundColor: '#ee6e73',
    borderRadius: 30,
    bottom: -15,
    height: 60,
    position: 'absolute',
    width: 60,
  },
})
