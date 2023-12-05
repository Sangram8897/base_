import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MetricsSizes } from 'appearance/constants'

const Spacer = ({ value = 'regular' }) => {
    return (
        <View style={{ height: MetricsSizes[value] }} />
    )
}

export default Spacer

const styles = StyleSheet.create({})