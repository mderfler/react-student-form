import React, {Component} from 'react';

const Activity = (props)=>{
//console.log(search)
  if (props.length<1) {
    return <div>Searching...</div>;
  }
            
  const activities = props.activities.map((act) => {
    return (
    <div>
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