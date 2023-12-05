
import { StyleSheet, Platform } from 'react-native'
import { useSelector } from 'react-redux';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function (mode, themeColors, Layout, Fonts, Gutters) {

  return {

    innerContainer: {
      ...Layout.fill,
      backgroundColor: themeColors.BACKGROUND,
    },

    card: {

      ...Gutters.extraSmallVMargin,
      ...Gutters.regularHPadding,
      ...Gutters.smallVPadding,

      borderRadius: 8,
      backgroundColor: themeColors.CARD,
      ...Platform.select({
        ios: {
          shadowColor: mode == 'light' ? '#CCC' : '#111',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.6,
          shadowRadius: 5,
        },
        android: {
          elevation: 3,
        },
      }),
    },

    cardRow: {
      flexDirection: 'row',
      marginHorizontal: 16,
      marginVertical: 8,
      paddingHorizontal: 16,
      paddingVertical: 20,
      borderRadius: 8,
      backgroundColor: themeColors.CARD,
    },

    listView: {
      ...Layout.fill,
      ...Gutters.regularHMargin,
      ...Gutters.extraSmallVPadding,
    },


    cardTitleText: {
      ...Fonts.titleMediumSmall,
      color: themeColors.TITLE
    },

    cardDescribtionText: {
      ...Fonts.textSmall,
      color: themeColors.DECS
    }

  }
}

