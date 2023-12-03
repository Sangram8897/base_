
import Gutters_ from 'appearance/gutters';
import Layout_ from 'appearance/layout';
import Fonts_ from 'appearance/fonts'
import { useSelector } from 'react-redux';
import themes from 'appearance/theme'
import common from 'appearance/common';

const useTheme = () => {

    const themeMode = useSelector((state) => state.theme.mode);

    const themeColors = themes[themeMode]
    const Layout = Layout_();
    const Fonts = Fonts_(themeColors);
    const Gutters = Gutters_();

    const baseTheme = {
        Fonts: Fonts,
        Gutters: Gutters,
        Layout: Layout,
        themeColors: themeColors,
        Common: common(themeMode, themeColors, Layout, Fonts, Gutters),
    }

    return baseTheme
}

export default useTheme