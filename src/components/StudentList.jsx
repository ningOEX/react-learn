import React, { Component } from 'react'
import Student from "./Student"

export default class StudentList extends Component {
  render() {
    const studentAll = this.props.studentList.map(item=><Student key={item.id} {...item}></Student>)
    return (
      <>
        <ul>
            {studentAll}
        </ul>
      </>
    )
  }
}
