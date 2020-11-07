import React from 'react';
import {connect} from 'react-redux';
import {getAllRestaurants} from '../actions/restaurants';

class Restaurants extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getAllRestaurants);
  }

  render(){
    let restaurants = this.props.resturants;
    console.log("restaurants",restaurants);
    return(
        <div> Restaurants</div>
    )
  }

}

function mapStateToProps(state){
  return{
    restaurants : state.restaurantsReducer.restaurants,
    cities: state.getCitiesReducer.cities
  }
}

export default connect(mapStateToProps)(Restaurants);
