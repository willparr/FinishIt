import { set } from 'lodash'
import React from 'react'

import { useCache } from './useCache'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTodos() {
  const { cache, setCache } = useCache()

  function addTodo(userInput: string) {
    const todo = {
      completed: false,
      createdAt: Date.now(),
      id: Date.now().toString(),
      title: userInput,
    }
    const nextCache = set(cache, `todos.${todo.id}`, todo)
    console.debug('[addTodo] ', JSON.stringify(nextCache?.todos?.[todo.id]))
    setCache(nextCache)
  }

  function completeTodo(todoId: string) {
    console.debug('[cache] ', JSON.stringify(cache))
    console.log('[completetodo] ', JSON.stringify(cache?.todos?.[todoId]))
    const prevState = cache?.todos?.[todoId].completed
    const nextCache = set(cache, `todos.${todoId}.completed`, !prevState)
    console.log('[completetodo] ', JSON.stringify(nextCache?.todos?.[todoId]))
    setCache(nextCache)
  }

  function deleteTodo(todoId: string) {
    console.log('[deletetodo] ', JSON.stringify(cache?.todos?.[todoId]))
    const nextCache = set(cache, `todos.${todoId}`, undefined)
    console.log('[deletetodo] ', JSON.stringify(nextCache?.todos?.[todoId]))
    setCache(nextCache)
  }

  function getTodos() {
    return cache?.todos ?? {}
  }

  return { addTodo, completeTodo, deleteTodo, getTodos, todos: getTodos() }
}
