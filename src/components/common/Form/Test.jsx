import React, { Component } from 'react'
import Form from './index'

export default class Text extends Component {

  submitHandle = (data)=>{
    console.log("提交了",data)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitHandle}>
          <div>
            账号：<Form.Input name="loginId" />
          </div>
           <div>
            密码：<Form.Input name="pwdId" type="password" />
          </div>
          <div>
            <Form.Button>提交</Form.Button>
          </div>
        </Form>
      </div>
    )
  }
}
