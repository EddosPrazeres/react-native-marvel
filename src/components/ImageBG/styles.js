import styled from 'styled-components/native'
import { colors, metrics } from '../../styles'


export const Container = styled.ImageBackground`
    position: relative;
    top:${metrics.baseSpacing(0)};
    left:${metrics.baseSpacing(0)};
    /* height: 400px;
    width: 100%;
    margin-right: ${metrics.baseSpacing(2)};
    margin-bottom: ${metrics.baseSpacing(1)}; */
`

export const Overlay = styled.View`
    position: absolute;
    top:${metrics.baseSpacing(0)};
    left:${metrics.baseSpacing(0)};
    /* height: 400px;
    width: 100%; */
    background-color: ${colors.black};
    opacity: 0.3;
`