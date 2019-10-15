import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, ViewLists} from './styles'
import HeroDetailsList from '../HeroDetailsList'
import InformationsHeroDetails from '../InformationsHeroDetails'

const ContentScrollHeroDetails = ({hero, comics, series, events, stories }) => (
  <ScrollView>
    {hero.name.length > 0 &&  <InformationsHeroDetails title={"Nome"} value={hero.name}/>}
    {hero.description.length > 0 && <InformationsHeroDetails title={"Descrição"} value={hero.description}/>}
    
    <ViewLists> 
      <HeroDetailsList list={comics} name="comics"/>
      <HeroDetailsList list={series} name="series"/>
      <HeroDetailsList list={events} name="events"/>
      <HeroDetailsList list={stories} name="stories"/>
    </ViewLists>
  </ScrollView>
)

ContentScrollHeroDetails.defaultProps = {
  hero: {},
  comics: [],
  series: [],
  stories: [],
  events: [],
}

const mapStateToProps = state => {
  return {
    hero: state.Marvel.hero,
    comics:  state.MarvelDetails.comics,
    series: state.MarvelDetails.series,
    stories: state.MarvelDetails.stories,
    events: state.MarvelDetails.events,
  }
}

export default connect(
  mapStateToProps,
)(ContentScrollHeroDetails)