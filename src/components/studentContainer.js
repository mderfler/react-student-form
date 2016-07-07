import React, {Component} from 'react';

const Student = (props)=>{
//console.log(search)
  if (props.length<1) {
    return <div>Searching...</div>;
  }
            
  const student = props.student.map((student) => {
    return (
    <div key={student.id}>
  
        {student.name}
      
    </div>
    );
  });

return (
<div>
      {student}
</div>
  );

}

export default Student;