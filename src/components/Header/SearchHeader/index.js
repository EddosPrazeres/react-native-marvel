import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Creators as MarvelActions} from '../../../redux/reducers/Marvel'
import PropTypes from 'prop-types'
import ViewComponent from './ViewComponent'
import { withNavigation } from 'react-navigation';
class SearchHeader extends Component {
    state = {
        querySearch: '',
        name: '',
        typing: false,
        typingTimeout: 0    
    }

    componentDidMount = () => this.count = null

    queryUpdate(querySearch) {
        self = this;

        clearTimeout(this.count);

        this.setState({ querySearch: querySearch });
        this.count = setTimeout( () => self.updateSearch(querySearch), 1000);
    }

    updateSearch(query) {
        if (query.length > 0) {
            this.props.setFeedbacksSearch(true)
            this.props.updateSearchQuery(query).then(()=> {
                this.props.setFeedbacksSearch(false)
            })
        } else {
            this.props.clearSearchQuery();
        }
    } 

    onPress = () => {
        this.props.clearSearchQuery();
        this.props.navigation.goBack();
    }
    render(){
        const { querySearch } = this.state;
        return(
            <ViewComponent onPress={()=> this.onPress()} querySearch={querySearch} {...this.props} queryUpdate={(data)=> this.queryUpdate(data)} />
        )
    }
}

SearchHeader.defaultProps = {

}

SearchHeader.propTypes = {

}


const mapStateToProps = state => {
  return {
    loadingSearch: state.Marvel.loadingSearch,
  }
}

export default connect(
  mapStateToProps,
  {...MarvelActions}
)(withNavigation(SearchHeader))