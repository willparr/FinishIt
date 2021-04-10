import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { TodoBar } from '../../components/TodoBar'
import CenterView from './CenterView'

const todoBarStories = storiesOf('TodoBar', module)

todoBarStories.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
todoBarStories.add('Default', () => (
  <TodoBar
    buttonTitle="AddTodo"
    onPress={() => {
      console.log('ButtonPressed')
    }}
    placeholder="Add To Do"
  />
))
