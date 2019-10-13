import React from 'react'
import { Container} from './styles'
import PropTypes from 'prop-types'
import { EmptyRequest } from '../../components'

const ViewComponent = ({title}) => {
  return (
    <Container>
      <EmptyRequest message="Será que ainda existem heróis para serem encontrados?"/>
    </Container>
  );
}

ViewComponent.defaultProps = {

}

ViewComponent.propTypes = {

}

export default ViewComponent