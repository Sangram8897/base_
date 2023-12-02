
import Gutters from 'appearance/gutters';
import { FontSizes, MetricsSizes } from 'appearance/constants';
import layout from 'appearance/layout';
import FontSize from 'appearance/fonts'
import { useSelector } from 'react-redux';
import themes from 'appearance/theme'
import common from 'appearance/common';

const useTheme = () => {
    const themeMode = useSelector((state) => state.theme.mode);
    const Layout = layout();
    const themeColors = themes[themeMode]
    const baseTheme = {
        //Fonts: FontSize(Colors),
        // Gutters: Gutters(MetricsSizes),
        Layout: Layout,
        themeColors: themeColors,
        Common: common(themeColors, Layout),
    }

    return baseTheme
}

export default useTheme