import styled from 'styled-components/native'
import { colors, metrics } from '../../../styles'

export const Container = styled.View`
  padding: ${metrics.baseSpacing(1)} ${metrics.baseSpacing(2)} ;
  margin-bottom: ${metrics.baseSpacing(1)};
`

export const Title = styled.Text`
  color: ${colors.primary};
  font-size: 13px;
  margin-bottom: ${metrics.baseSpacing(1)};
  font-weight: bold;
  text-transform: uppercase;
`

export const Description = styled.Text`
  color: ${colors.white};
  font-size: 14px;
`