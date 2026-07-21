import React from 'react'
import {usePrompt} from "../../hooks/usePrompt"
import {useState} from "react"
export default function StudentList() {
  const [username, setUsername] = useState('');

  usePrompt(username !== '', {
    title: '确认离开',
    content: '有未保存的内容，确定要离开吗？',
    okText: '确定离开',
    cancelText: '继续编辑',
  });

  return (
    <div>
      <h1>学生列表</h1>
      <input 
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='用户名'/>
    </div>
  )
}
  