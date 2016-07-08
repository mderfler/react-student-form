import React, {Component} from 'react';

const Student = (props)=>{
//console.log(search)
  if (props.length<1) {
    return <div>Searching...</div>;
  }
            
  const student = props.student.map((student) => {
    return (
    <div key={student.id}>
      <h4>
        {student.name}
      </h4>
      <h6>
        {student.teacher}
      </h6>
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