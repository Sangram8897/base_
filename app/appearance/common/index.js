
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function (themeColors, Layout, Gutters, DualTheme,) {

  return {
    card: {
      marginHorizontal: 8,
      marginVertical: 8,
      padding: 16,
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: "red"
    },
    innerContainer: {
      ...Layout.fill,
      backgroundColor: themeColors.background,
    }
  }
}
