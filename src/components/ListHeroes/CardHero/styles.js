import styled from 'styled-components/native'
import { colors, metrics } from '../../../styles'
export const Container = styled.View`
  height: 170px;
  width: 100%;
  position: relative;
  margin-bottom: ${metrics.baseSpacing(0.25)};
  background-color: ${colors.midlack};
`

export const ImageBGOverlay = styled.View`
  position: absolute;
  top:${metrics.baseSpacing(0)};
  left:${metrics.baseSpacing(0)};
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
  opacity: 0.3;
`

export const ImageBG = styled.ImageBackground`
  position: absolute;
  top:${metrics.baseSpacing(0)};
  left:${metrics.baseSpacing(0)};
  height: 100%;
  width: 100%;
`

export const NameHeroX = styled.View`
  position: absolute;
  left: ${metrics.baseSpacing(4)};
  bottom: ${metrics.baseSpacing(2)};
  width: 125;
  height: 40;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
`

export const NameHeroXRight = styled.View`
  position: absolute;
  top: ${metrics.baseSpacing(0)};
  right: -${metrics.baseSpacing(2)};
  width: 0;
  height: 0;
  
  background-color:  ${colors.transparent};
  border-style: solid;
  border-top-width: 40;
  border-right-width: 16;
  border-bottom-width: 0;
  border-left-width: 0;
  border-top-color: ${colors.white};
  border-right-color:  ${colors.transparent};
  border-bottom-color:  ${colors.transparent};
  border-left-color:  ${colors.transparent};
`

export const NameHeroXLeft = styled.View`
  position: absolute;
  top:${metrics.baseSpacing(0)};
  left: -${metrics.baseSpacing(2)};
  width: 0;
  height: 0;
  background-color:  ${colors.transparent};
  border-style: solid;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 40;
  border-left-width: 16;
  border-top-color:  ${colors.transparent};
  border-right-color:  ${colors.transparent};
  border-bottom-color: ${colors.white};
  border-left-color:  ${colors.transparent};
`

export const NameHeroXContent = styled.Text`
  width: 125;
  font-weight: bold;
  font-size: 12;
  text-align: center;
  color:  ${colors.black}
`
