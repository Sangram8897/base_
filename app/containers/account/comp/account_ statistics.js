import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { AppStrings } from 'config/strings'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { toggleTheme } from 'store/slice/themeSlice';
import { useDispatch } from 'react-redux';
import useTheme from 'hooks/useTheme';

const AccountStatistics = ({ navigation }) => {
    const dispatch = useDispatch();
    const { themeColors, Gutters, Layout, Common, Fonts } = useTheme()

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <View style={Layout.fill}>

            <TouchableOpacity
                onPress={() => navigation.navigate('CreateAccount')}
                style={Common.cardRow}
            >
                <FontAwesome5 name={'user-edit'} size={20} color={'gray'} />
                <Text style={[Gutters.mediumLMargin, Common.cardDescribtionText]}>{AppStrings.PROFILE_UPDATE}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={1}
                disabled={true}
                style={Common.cardRow}
            >
                <MaterialCommunityIcons name={'email-outline'} size={22} color={'gray'} />
                <Text style={[Gutters.mediumLMargin, Common.cardDescribtionText]} numberOfLines={1}>{'sangrampaste8897@gmail.com'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Common.cardRow}
            >
                <AntDesign name={'addfile'} size={22} color={'gray'} />
                <Text style={[styles.boxText, Common.cardDescribtionText]}>{AppStrings.CREATE_TASK}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={handleToggleTheme}
                style={Common.cardRow}
            >
                <MaterialIcons name={'mode-night'} size={22} color={'gray'} />
                <Text style={[styles.boxText, Common.cardDescribtionText]}>{'Toggle Mode'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Common.cardRow}
            >
                <AntDesign name={'logout'} size={22} color={'red'} />
                <Text style={[styles.boxText, Common.cardDescribtionText, { color: 'red' }]}>{AppStrings.LOGOUT}</Text>
            </TouchableOpacity>

        </View>
    )
}

export default AccountStatistics

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        padding: 16,
        marginVertical: 8,
        width: '92%',
        backgroundColor: '#FFF',
        borderRadius: 4
    },
    boxText: {
        marginLeft: 16,
    }
})

