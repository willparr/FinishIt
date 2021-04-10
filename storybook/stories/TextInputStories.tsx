import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { TextInput } from '../../components/TextInput'
import CenterView from './CenterView'

const textInputStories = storiesOf('TextInput', module)

textInputStories.addDecorator((getStory) => (
  <CenterView>{getStory()}</CenterView>
))
textInputStories.add('Default', () => <TextInput />)
