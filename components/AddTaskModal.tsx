import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

import { theme } from '../constants/theme'
import { useTodos } from '../hooks/useTodos'
import { TextInput } from './TextInput'

export const AddTaskModal = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false)
  const [taskInput, setTaskInput] = useState('')
  const { addTodo } = useTodos()

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput onChangeText={(value) => setTaskInput(value)} />
            <Pressable
              onPress={() => {
                addTodo(taskInput)
                setModalVisible(!modalVisible)
              }}
              style={[styles.button, styles.buttonClose]}
            >
              <Text style={styles.textStyle}>Save Task</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={[styles.button, styles.buttonOpen]}
      >
        <FontAwesome
          color="white"
          name="plus-circle"
          size={theme.typography.size.xxlarge}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#5c8ff7',
    borderRadius: 30,
    bottom: -30,
    elevation: 10,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    width: 60,
  },
  buttonClose: {
    backgroundColor: theme.colors.blue,
  },
  buttonOpen: {
    backgroundColor: theme.colors.blue,
  },
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    marginBottom: theme.spacing.xxlarge,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
