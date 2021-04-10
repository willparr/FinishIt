import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { TodoItem } from '../../components/TodoItem'
import CenterView from './CenterView'

const todoItemStories = storiesOf('todoItem', module)

todoItemStories.addDecorator((getStory) => (
  <CenterView>{getStory()}</CenterView>
))

todoItemStories.add('Default', () => (
  <TodoItem
    completed={false}
    createdAt={Date.now()}
    onPress={() => console.log('onPressClicked')}
    title="My First Todo"
  />
))
todoItemStories.add('Completed To Do', () => (
  <TodoItem
    completed={true}
    createdAt={Date.now()}
    onPress={() => console.log('onPressClicked')}
    title="My First Todo"
  />
))
