import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from 'components/index'

export const FontSize = [
  12,
  14,
  16,
  20,
  30,
  40,
]/**
 export const FontSize = {
  extraTiny: 12,
  tiny:14,
  small: 16,
  regular: 20,
  medium: 30,
  large: 40,
}
 */

const HomeScreen = () => {
  return (
    <View>
      <Header/>
      <FlatList
        data={FontSize}
        renderItem={({ item, index }) => <View
          style={{ margin: 10, }}
        >
          <Text style={{fontSize:item}}>welcome</Text>
        </View>}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})