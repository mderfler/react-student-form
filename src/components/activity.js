import React, {Component} from 'react';

const Activity = (props)=>{
  if (props.length<1) {
    return <div>Searching...</div>;
  }
            
  const activities = props.activities.map((act,index) => {
    return (
    <div key={index}>
     {act}
    </div>
    );
  });

return (
<div >
    {activities}
     
    
</div>
  );

}

export default Activity;