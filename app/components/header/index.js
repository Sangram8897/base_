import { HeaderHeight } from 'appearance/constants';
import Colors from 'appearance/theme/colors';
import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const _headerTextStyle = {
    fontSize: 18,
    fontFamily: "Montserrat-Medium"
}

export default function Header({
    hasBackButton = true,
    onBackbuttonPress = () => { },
    backgroundcolor = Colors.COLOR_BLACK1,
    headerTitle = 'Header',
    headerTextStyle = _headerTextStyle,
    showRightIcon,
    onRightIconPress
}) {
    return (
        <View style={{ height: HeaderHeight, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: backgroundcolor }}>
            {
                hasBackButton == true && <Icon onPress={onBackbuttonPress} name={'arrow-back'} color={'white'} size={25} style={{ alignSelf: 'center', paddingHorizontal: 8, marginTop: 4 }} />
            }
            <View style={{ flex: 1, paddingHorizontal: hasBackButton == true ? 10 : 16 }}>

                <Text
                    numberOfLines={1}
                    style={[{ color: 'white' }, headerTextStyle]}>{headerTitle}</Text>
            </View>
            {/* <Icon name={'notifications'} color={'gray'} size={25} style={{ alignSelf: 'center', paddingHorizontal: 8 }} /> */}
            {showRightIcon && <Icon onPress={onRightIconPress} name={'home'} color={'white'} size={22} style={{ alignSelf: 'center', paddingHorizontal: 8 }} />}
        </View>
    )
}
