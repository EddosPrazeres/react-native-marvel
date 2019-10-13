import React from 'react'
import { Image } from './styles'
const LogoHeader = () => {
  return (
    <Image source={require('../../../../assets/marvel.png')} resizeMode="contain"/>
  );
}

export default LogoHeader