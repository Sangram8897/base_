
import Gutters from 'appearance/gutters';
import { FontSizes, MetricsSizes } from 'appearance/constants';
import Layout from 'appearance/layout';
import FontSize from 'appearance/fonts'
import { Colors } from 'appearance/theme/colors';
import Common from 'appearance/common'

const useTheme = () => {
    const baseTheme = {
        Fonts: FontSize(Colors),
        Gutters: Gutters(MetricsSizes),
        Common: Common(),
        Layout: Layout()
    }

    return baseTheme
}

export default useTheme