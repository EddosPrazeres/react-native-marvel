import styled from 'styled-components/native'
import { metrics, colors } from '../../../styles'
export const Container = styled.View`  
  flex-direction: row;
  align-items: center;
  width: ${metrics.sizeScreen.width};
  padding: ${metrics.baseSpacing(0)} ${metrics.baseSpacing(1)};
`

export const TextInput = styled.TextInput`
  background-color: white;
  flex: 1;
  color: ${colors.black};
  height: 30px;
  margin-right: ${metrics.baseSpacing(1)};
  border-radius: 4px;
  padding: ${metrics.baseSpacing(0)} ${metrics.baseSpacing(1)};
`

export const Text = styled.Text`
  color: ${colors.primary};
`

export const TouchableHighlight = styled.TouchableHighlight`
  background-color: transparent;
  padding: ${metrics.baseSpacing(0.5)};
`