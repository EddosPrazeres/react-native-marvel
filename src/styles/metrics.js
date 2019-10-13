import { Platform, Dimensions } from 'react-native'
import { Header } from 'react-navigation-stack';

const sizeScreen = {
    heightHeader: `${Dimensions.get('window').height - Header.HEIGHT}px`,
    height: `${Dimensions.get('window').height}`,
    width: `${Dimensions.get('window').width}`
}

const baseSpacing = (number = 1) => {
    return `${number * 8}px`; 
}

export default {
    baseSpacing,
    sizeScreen
}
