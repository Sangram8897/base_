import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from 'appearance/theme/colors'
import { AppStrings } from 'config/strings'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { toggleTheme } from 'store/slice/themeSlice';
import { useDispatch } from 'react-redux';

const AccountStatistics = ({ navigation }) => {
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
      };

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>

            <TouchableOpacity
                onPress={() => navigation.navigate('CreateAccount')}
                style={styles.box}
            >
                <FontAwesome5 name={'user-edit'} size={20} color={'gray'} />
                <Text style={styles.boxText}>{AppStrings.PROFILE_UPDATE}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={1}
                disabled={true}
                style={styles.box}
            >
                <MaterialCommunityIcons name={'email-outline'} size={22} color={'gray'} />
                <Text style={styles.boxText} numberOfLines={1}>{'sangrampaste8897@gmail.com'}</Text>
            </TouchableOpacity>


            <TouchableOpacity
               
                style={styles.box}
            >
                <AntDesign name={'addfile'} size={22} color={'gray'} />
                <Text style={styles.boxText}>{AppStrings.CREATE_TASK}</Text>
            </TouchableOpacity>


            <TouchableOpacity
                  onPress={handleToggleTheme}
                style={styles.box}
            >
                <MaterialIcons name={'mode-night'} size={22} color={'gray'} />
                <Text style={[styles.boxText]}>{'Toggle Mode'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                //  onPress={logout}
                style={styles.box}
            >
                <AntDesign name={'logout'} size={22} color={'red'} />
                <Text style={[styles.boxText, { color: 'red' }]}>{AppStrings.LOGOUT}</Text>
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
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        marginLeft: 16,
        color: Colors.BLACK
    }
})

