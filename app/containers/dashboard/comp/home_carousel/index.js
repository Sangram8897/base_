import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React from 'react'
import useTheme from 'hooks/useTheme';

const HomeCarousel = () => {
    const { themeColors, Layout, Common } = useTheme()
    const width = Dimensions.get('window').width - 34;
    return (
        <View style={[{ padding: 15, alignItems: 'center' }]}>
            <Carousel
                loop
                width={width}
                height={width / 4}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default HomeCarousel

const styles = StyleSheet.create({})