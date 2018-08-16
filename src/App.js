import React, { Component } from 'react';
import ViewComponent from './Containers/ViewComponent/ViewComponent'
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import classes from './App.css'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
     <ViewComponent className={classes.view}/>
     <div className={classes.buttoncontainer}>
           <button onClick={this.props.switchTimeLine}>Switch</button>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      time: state.timeline,
    };
}

const mapDispatchToProps = dispatch => {
    return {
      switchTimeLine: () => dispatch({type:actionTypes.SWITCH_TIMELINE})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
