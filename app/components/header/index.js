import { HeaderHeight } from 'appearance/constants';
import AppColors from 'appearance/theme/colors';
import useTheme from 'hooks/useTheme';
import React from 'react'
import { View, Text, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const _headerTextStyle = {
    fontSize: 18,
    fontFamily: "Montserrat-Medium"
}

export default function Header({
    hasBackButton = false,
    onBackbuttonPress = () => { },
    backgroundcolor,
    headerTitle = 'Header',
    headerTextStyle = _headerTextStyle,
    showRightIcon,
    onRightIconPress
}) {

    const { themeColors, Fonts, Common } = useTheme()
    return (
        <View style={[{
            height: HeaderHeight, flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 0.2,
            borderBottomColor: AppColors.GRAY1,
            backgroundColor: backgroundcolor || themeColors.HEADER,
        }]}>
            {
                hasBackButton == true && <Icon onPress={onBackbuttonPress} name={'arrow-back'}
                    color={themeColors.TEXT} size={25} style={{ alignSelf: 'center', paddingHorizontal: 8, marginTop: 4 }} />
            }
            <View style={{ flex: 1, paddingHorizontal: hasBackButton == true ? 10 : 16 }}>

                <Text
                    numberOfLines={1}
                    style={[Fonts.titleSmall,{ color: themeColors.TEXT }, headerTextStyle]}>{headerTitle}</Text>
            </View>
            {/* <Icon name={'notifications'} color={'gray'} size={25} style={{ alignSelf: 'center', paddingHorizontal: 8 }} /> */}
            {showRightIcon && <Icon onPress={onRightIconPress} name={'home'} color={'white'} size={22} style={{ alignSelf: 'center', paddingHorizontal: 8 }} />}
        </View>
    )
}
