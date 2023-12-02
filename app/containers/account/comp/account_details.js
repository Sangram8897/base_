import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors2 from 'appearance/theme/colors'
import { AppStrings } from 'config/strings'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import useTheme from 'hooks/useTheme';

const AccountDetails = ({  }) => {
    const { themeColors } = useTheme()
  console.log('themeColors',themeColors);  
    return (
        <View style={{ backgroundColor: themeColors.primary, alignItems: 'center' }}>
            <View style={{ marginVertical: 20, alignItems: 'center' }}>
                <Text style={{ color: '#FFF', fontFamily: 'DMSans-Bold', fontSize: 20, }}>{'Sangram Paste'}</Text>
                <Text style={{ color: '#FFF', fontFamily: 'DMSans-Medium', fontSize: 14 }}>{AppStrings.PROFILE_MOB} : +91 {'9021010551'}</Text>
                <Text style={{ color: '#FFF', fontFamily: 'DMSans-Medium', fontSize: 14 }}> {'Kormangala Banglore'}</Text>
            </View>
            <View style={styles.profile_icon}>
                <FontAwesomeIcon name={'user-tie'} size={50} color={'gray'} />
            </View>
        </View>
    )
}

export default AccountDetails

const styles = StyleSheet.create({
    profile_icon: {
      height: 100,
      width: 100,
      marginBottom: -50,
      borderRadius: 50,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center'
    },
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
      color: Colors2.BLACK
    }
  })