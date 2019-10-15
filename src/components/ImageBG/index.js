import React from 'react'
import { Container, Overlay} from './styles'
import PropTypes from 'prop-types'


const ImageBG = ({resizeMode, source, height, width, marginLeft, marginRight, marginBottom, marginTop}) => {
  return (
    <Container resizeMode={resizeMode} source={{uri: source}} style={{height, width, marginLeft, marginRight, marginBottom, marginTop}}> 
      <Overlay style={{height, width}}/>
    </Container>
  );
}

ImageBG.defaultProps = {
  resizeMode: "cover",
  source: "",  
  marginLeft: 0,
  marginRight: 0, 
  marginBottom: 0, 
  marginTop: 0,
  height: `100%`,
  width: `100%`
}

ImageBG.propTypes = {
  // height: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
  // width: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
}

export default ImageBG