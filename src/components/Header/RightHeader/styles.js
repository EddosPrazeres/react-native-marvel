import styled from 'styled-components/native'
import { colors, metrics } from '../../../styles'
export const Container = styled.View`
  flex-direction: row;
  margin-right: ${metrics.baseSpacing(2)};
`

export const TouchableHighlight = styled.TouchableHighlight`
  background-color: ${colors.transparent};
  padding: ${metrics.baseSpacing(0.5)};
`
