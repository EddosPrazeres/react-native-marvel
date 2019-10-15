import styled from 'styled-components/native'
import { colors, metrics } from '../../../styles'
export const Container = styled.View`

`

export const Title = styled.Text`
  justify-content: center;
  align-items: center;
  text-align: center;
  /* height: ; */
  width: 100px;
  height: 100px;
  background-color: ${colors.black};
  color: white;
  font-size: 10px;
  margin-right: ${metrics.baseSpacing(0.25)};
  padding: ${metrics.baseSpacing(1)}
`