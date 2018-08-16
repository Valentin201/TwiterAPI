import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets'


class ViewComponent extends Component {
  

  render() {
    return (
      <div className="App">
<Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'twitterdev'
    }}
    options={{
      username: 'TwitterDev',
      height: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
      </div>
    );
  }
}

export default ViewComponent;