import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const grayColors = [
    "#DCDCDC", // Gainsboro
    "#D3D3D3", // Light Gray
    "#C0C0C0", // Silver
    "#A9A9A9", // Dark Gray
    "#808080", // Gray
    "#696969", // Dim Gray
    "#464646"  // Charcoal
  ];

  const redColors = [
    "#FFD3D3", // Light Red
    "#FFC0C0", // Light Coral
    "#FFAFAF", // Misty Rose
    "#FF8C8C", // Salmon
    "#FF6969", // Coral
    "#FF5050", // Dark Salmon
    "#FF4040", // Light Tomato
    "#FF3333", // Tomato
    "#FF0000", // Red
    "#990000"  // Dark Red
  ];

  const blueColors = [
    "#D3D3FF", // Light Blue
    "#C0C0FF", // Lavender
    "#AFBFFF", // Light Steel Blue
    "#8C8CFF", // Light Slate Blue
    "#6969FF", // Cornflower Blue
    "#5050FF", // Royal Blue
    "#4040FF", // Dodger Blue
    "#3333FF", // Medium Blue
    "#0000FF", // Blue
    "#000099"  // Dark Blue
  ];

  const whiteShades = [
    "#FFFFFF", // White
    "#F8F8F8", // Ghost White
    "#F0F0F0", // White Smoke
  ];

  const blackShades = [
    "#444444", // Super Dark Black
    "#333333", // Extremely Dark Black
    "#222222", // Very Dark Black
    "#111111", // Dark Black
    "#000000"  // Black
  ];

const HomeScreen = () => {
    return (
        <View>
            <FlatList
                data={blackShades}
                renderItem={({ item, index }) => <View
                    style={{ margin: 10, backgroundColor: item, height: 70, width: 70 }}
                />}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})