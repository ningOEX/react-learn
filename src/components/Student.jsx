import React from 'react'

export default function Student(props) {
  return (
    <div>
      【姓名】{props.name}
      【年龄】{props.age}
      【email】{props.email}
    </div>
  )
}
