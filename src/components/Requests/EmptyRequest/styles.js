import styled from 'styled-components/native'
import { colors, metrics } from '../../../styles'

export const Container = styled.View`
  flex: 1;
  height: ${metrics.sizeScreen.heightHeader};
  background: ${colors.lightBlack};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ImageBG = styled.Image`
  position: absolute;
  top:${metrics.baseSpacing(0)};
  left:${metrics.baseSpacing(0)};
  height: ${metrics.sizeScreen.heightHeader};
  width: ${metrics.sizeScreen.width};
`

export const Message = styled.View`
  background-color: ${colors.white};;  
  border-radius: 10px;
  margin: ${metrics.baseSpacing(10)} ${metrics.baseSpacing(4)} ${metrics.baseSpacing(0)} ${metrics.baseSpacing(4)};
  padding: ${metrics.baseSpacing(2)};
  opacity: 0.7;
`

export const MessageText = styled.Text`
  color: black;
  font-size: 24px;
  text-align: center;
  color:  ${colors.black}
`