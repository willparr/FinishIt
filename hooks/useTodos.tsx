import { set } from 'lodash'
import React from 'react'

import { useCache } from './useCache'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTodos() {
  const { cache, setCache } = useCache()

  function addTodo() {
    const todo = {
      completed: false,
      createdAt: Date.now(),
      id: Date.now().toString(),
      title: 'New Todo',
    }
    const nextCache = set(cache, `todos.${todo.id}`, todo)
    setCache(nextCache)
  }

  function completeTodo(todoId: string) {
    console.log('[cache] ', cache)
    console.log('[completetodo] ', todoId)
    const nextCache = set(cache, `todos.${todoId}.completed`, true)
    setCache(nextCache)
  }

  function deleteTodo(todoId: string) {
    const nextCache = set(cache, `todos.${todoId}`, undefined)
    setCache(nextCache)
  }

  function getTodos() {
    return cache?.todos ?? {}
  }

  return { addTodo, completeTodo, deleteTodo, getTodos }
}
