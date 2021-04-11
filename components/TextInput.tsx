import React, { useState } from 'react'
import { TextInput as RNTextInput, TextInputProps } from 'react-native'
import { theme } from '../constants/theme'

export interface WrappedTextInputProps
  extends Omit<TextInputProps, 'onChange'> {
  errors?: boolean
  value?: string
}

export function TextInput(props: WrappedTextInputProps): JSX.Element {
  // focused will be used for errors
  const [focused, setFocused] = useState<boolean>(false)

  const { errors, multiline = false, value, placeholder, ...otherProps } = props

  const style = {
    backgroundColor: theme.colors.lightGray,
    borderColor: theme.colors.lightGray,
    borderRadius: 8,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingTop: theme.spacing.large,
    paddingVertical: 20,
    width: '100%',
  }

  return (
    <RNTextInput
      multiline={multiline}
      onBlur={() => setFocused(false)}
      onFocus={() => setFocused(true)}
      placeholder={placeholder}
      style={style}
      value={value}
      {...otherProps}
    />
  )
}
