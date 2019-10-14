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
  position: relative;
  background-color: ${colors.white};;  
  border-radius: 10px;
  margin: ${metrics.baseSpacing(-10)} ${metrics.baseSpacing(4)} ${metrics.baseSpacing(0)} ${metrics.baseSpacing(4)};
  padding: ${metrics.baseSpacing(2)};
  opacity: 0.7;
`

export const MessageText = styled.Text`
  font-size: 24px;
  text-align: center;
  color:  ${colors.black};
`

export const MessageArrow = styled.View`
  position: absolute;
  top: -55px;
  right: 50%;
  width: 0;
  height: 0;
  
  background-color:  ${colors.transparent};
  border-style: solid;
  border-top-width: 40px;
  border-right-width: 16px;
  border-bottom-width: 40px;
  border-left-width: 16px;
  border-top-color: ${colors.transparent};
  border-right-color:  ${colors.transparent};
  border-bottom-color:  ${colors.white};
  border-left-color:  ${colors.transparent};
`