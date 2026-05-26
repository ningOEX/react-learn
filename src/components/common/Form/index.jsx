import React, { Component } from 'react'
import {Provider} from "./FormContext"
import FormInput from './FormInput'
import propsTypes from "prop-types"
import FormButton from './FormButton'

/**
 * 表单上下文
 */
export default class Form extends Component {

  state = {
    formData:{},
    changeFormData:(name,value)=>{
      this.setState({
        formData:{
          ...this.state.formData,
          [name]:value
        }
      })
    },
    onSubmit:()=>{
        this.props.onSubmit && this.props.onSubmit(this.state.formData)
    }
  }

  static propsTypes = {
    onSubmit: propsTypes.func
  }


  render() {
    return (
       <Provider value={this.state}>
            {this.props.children}
      </Provider>
    )
  }
}

Form.Input = FormInput
Form.Button = FormButton