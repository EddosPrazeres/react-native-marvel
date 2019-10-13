import styled from 'styled-components/native'
import { metrics, colors } from '../../../styles'
export const Container = styled.View`  
  flex-direction: row;
  align-items: center;
  width: ${metrics.sizeScreen.width};
  padding: 0 8px;
`

export const TextInput = styled.TextInput`
  background-color: white;
  flex: 1;
  color: ${colors.black};
  height: 30px;
  /* width: ${metrics.sizeScreen.width}; */
  margin-right: 8px;
  border-radius: 4px;
  padding: 0 8px;
`

export const Text = styled.Text`
  color: ${colors.primary};
`

export const TouchableHighlight = styled.TouchableHighlight`
  background-color: transparent;
  padding: 4px;
`