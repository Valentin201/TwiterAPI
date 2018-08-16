import React, { Component } from 'react';


import classes from './ViewComponent.css';
import Clinton from '../../Components/TimeLineOne/TimeLineOne';
import Trump from '../../Components/TimeLineTwo/TimeLineTwo'
import { connect } from 'react-redux';


class ViewComponent extends Component {
  

  render() {
    let timeline = (<p>Error</p>)

    if (this.props.time === true) {
      timeline = (<Trump/>)
     
    } else if(this.props.time === false) {
      timeline = (<Clinton/>)
     
    }


    return (
      <div>
          <div className={classes.container}>
           {timeline}
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



export default connect(mapStateToProps)(ViewComponent);


