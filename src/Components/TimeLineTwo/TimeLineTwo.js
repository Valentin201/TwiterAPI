import React from 'react';
import { Timeline } from 'react-twitter-widgets';



const trump = () => (
	<div >

	<Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'realDonaldTrump'
    }}
    options={{
      username: 'Donald J. Trump',
      height: '650',
      width: '750'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
     />
 </div>

)

export default trump;
