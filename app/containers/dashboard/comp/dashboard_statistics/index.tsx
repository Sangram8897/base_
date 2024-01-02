import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native'
import React from 'react'
import useTheme from 'hooks/useTheme'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '26',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '36',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '1.2 Cr',
  },
];

const DashboardStatistics = () => {
  const { themeColors, Gutters, Layout, Common, Fonts } = useTheme()

  const Item = ({ title }) => (
    <View style={styles.item}>
       <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{'Meetings'}</Text>
      <Text style={styles.desc}>{'In-person'}</Text>
      <Text style={styles.subTitle}>{'view more ->'}</Text>
    </View>
  );

  return (
    <View style={Layout.fillWidth}>
      <FlatList
        numColumns={3}
       // horizontal={true}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default DashboardStatistics


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
    // marginVertical: 8,
    marginHorizontal: 4,
    borderRadius:15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
   
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop:16
  },
  desc:{
    fontSize: 14,
  },
  text:{
    fontSize: 16,
  }
});