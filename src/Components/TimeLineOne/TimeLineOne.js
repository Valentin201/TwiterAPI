import React from 'react';
import { Timeline } from 'react-twitter-widgets';



const clinton = () => {
return (
	<div >

	<Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'HillaryClinton'
    }}
    options={{
      username: 'HillaryClinton',
      height: '650',
      width: '750'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
     />
 </div>
)
}

export default clinton;
