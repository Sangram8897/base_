import useTheme from 'hooks/useTheme';
import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbeea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-wc605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bwd96-145571e29d72',
        title: 'Third Item',
    },
];



const TestList = () => {
    const { themeColors, Layout, Common } = useTheme()
    const Item = ({ title }) => (
        <View style={Common.card}>
            <Text style={[styles.title, { color: themeColors.text }]}>{title}</Text>
            <Text style={[styles.desc, { color: themeColors.text }]}>{'A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.'}</Text>
        </View>
    );

    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 16,
    },
});

export default TestList;