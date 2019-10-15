import styled from 'styled-components/native'
import { colors, metrics } from '../../../styles'
export const Container = styled.View`

`

export const Title = styled.Text`
  padding: ${metrics.baseSpacing(0)} ${metrics.baseSpacing(2)};
  color: ${colors.primary};
  font-size: 12px;
  margin-bottom: ${metrics.baseSpacing(1)};
  font-weight: bold;
  text-transform: uppercase;
`

export const FlatList = styled.FlatList` 
  background-color: ${colors.midlack};
  flex-grow: 0;
  margin-bottom: ${metrics.baseSpacing(2)};
`
