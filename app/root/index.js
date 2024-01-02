import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigationStack from './navigation'
import { store } from '../store/configure_store'
import { Provider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppNavigationStack />
      </Provider>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})