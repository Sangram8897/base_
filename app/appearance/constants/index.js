import { Platform } from "react-native"

export const HeaderHeight = Platform.OS == 'android' ? 55 : 60;

const tiny = 5 // 5
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const medium = regular * 1.5 // 22.5
const large = regular * 2 // 30

export const MetricsSizes = {
    tiny,
    small,
    regular,
    medium,
    large,
}

export const FontSize = {
    extraTiny: 12,
    tiny: 14,
    small: 16,
    regular: 20,
    medium: 30,
    large: 40,
}