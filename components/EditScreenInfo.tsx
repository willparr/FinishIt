import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

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
  const [todos, setTodos] = useState<undefined | TodoItemProps[]>([])

  function addTodo() {
    const todo = {
      completed: false,
      createdAt: Date.now(),
      onPress: () => {
        console.log('onPress clicked')
      },
      title: 'New Todo',
    }
    console.log(todos)
    setTodos((prevState) => {
      const newTodos = prevState?.concat(todo)
      return newTodos
    })
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        {todos?.map((todo) => {
          return (
            <TodoItem
              completed={todo.completed}
              createdAt={todo.createdAt}
              key={todo.createdAt}
              onPress={() => {}}
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
