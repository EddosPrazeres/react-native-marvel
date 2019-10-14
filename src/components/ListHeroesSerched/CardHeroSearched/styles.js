import styled from 'styled-components/native'
import { colors, metrics } from '../../../styles'
export const Container = styled.View`
  height: 60px;
  width: 100%;
  position: relative;
  flex-direction: row;
  margin-bottom: ${metrics.baseSpacing(0.25)};
  background-color: ${colors.midlack};
`

export const ImageBGOverlay = styled.View`
  position: absolute;
  top:${metrics.baseSpacing(0)};
  left:${metrics.baseSpacing(0)};
  height: 100%;
  width: 60px;
  background-color: ${colors.black};
  opacity: 0.3;
`

export const ImageBG = styled.ImageBackground`
  position: relative;
  top:${metrics.baseSpacing(0)};
  left:${metrics.baseSpacing(0)};
  height: 100%;
  width: 60px;
  margin-right: ${metrics.baseSpacing(2)};
`

export const Name = styled.Text`
  margin-top: 8px;
  font-weight: bold;
  text-align: left;
  color:  ${colors.white}
`