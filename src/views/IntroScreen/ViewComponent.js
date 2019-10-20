import React from 'react'
import { Container, ViewItem, Line, ViewItemTitle, ViewItemSubtitle, Image, ButtonCircle} from './styles'
import PropTypes from 'prop-types'
import AppIntroSlider from 'react-native-app-intro-slider'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const _renderItem = ({item}) => {
  return (
    <ViewItem>
      <Image source={item.image} />
      <Line>
        <ViewItemTitle style={{fontWeight: item.top ? 'bold' : 'normal'}}>{item.title}</ViewItemTitle>
        <ViewItemTitle style={{fontWeight: !item.top ? 'bold' : 'normal'}}>{item.titleDescription}</ViewItemTitle>
      </Line>      
      <ViewItemSubtitle>{item.text}</ViewItemSubtitle>
    </ViewItem>
  );
}

const renderRightButton = () => {
  return <ButtonCircle> 
    <Icon name="arrow-right" size={20} color="white" /> 
  </ButtonCircle>
}

const renderLeftButton = () => {
  return <ButtonCircle> 
    <Icon name={"arrow-left"} size={20} color="white" /> 
  </ButtonCircle>
}

const renderDoneButton = () => {
  return <ButtonCircle> 
    <Icon name={"check"} size={20} color="white" /> 
  </ButtonCircle>
}

const ViewComponent = (props) => {
  const { slides, _onDone, navigation } = props
  return (
    <Container>
      <AppIntroSlider 
        renderItem={_renderItem} 
        slides={slides} 
        onDone={_onDone}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderRightButton}
        renderPrevButton={renderLeftButton}
        dotStyle={{backgroundColor: '#D5D5D5'}	}
        activeDotStyle={{backgroundColor: '#fff'}	}
        showPrevButton
        onDone={()=> navigation.navigate("Home")}
      />
    </Container>
  );
}

ViewComponent.defaultProps = {

}

ViewComponent.propTypes = {

}

export default ViewComponent