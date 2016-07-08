import React, {Component} from 'react';

const Dropdown = (props)=>{
  if (props.length<1) {
    return <div>Searching...</div>;
  }
            
  const items = props.items.map((item,index) => {
    return (
    <option key={index}>
     {item.name}
    </option>
    );
  });

return (
<select >
    {items}
</select>
  );

}

export default Dropdown;