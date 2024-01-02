import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native'
import React from 'react'
import useTheme from 'hooks/useTheme'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

        title: 'You Have 5 new Meetings',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'You have 2 expiring Leads',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: '2 Clients have events today',
    },
];

const UpcomingActivities = () => {
    const { themeColors, Gutters, Layout, Common, Fonts } = useTheme()

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <View style={{height:80}}></View>
            <Text style={styles.subTitle}>{'view more ->'}</Text>
        </View>
    );

    return (
        <View style={Layout.fillWidth}>
            <FlatList

                horizontal={true}
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default UpcomingActivities


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        width:150,
        backgroundColor: '#f9c2ff',
        padding: 12,
        borderRadius:20,
        // marginVertical: 8,
        marginHorizontal: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    subTitle: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 14,
    },
    text: {
        fontSize: 16,
    }
});