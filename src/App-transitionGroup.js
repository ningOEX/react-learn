import React, { useState,useRef,createRef } from "react";
import FadeTransition from "./components/fadeTransition";
import {TransitionGroup} from "react-transition-group"
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [task, setTask] = useState([
    {id:uuidv4(), name: '任务1',nodeRef: createRef(null)},
    {id:uuidv4(), name: '任务2',nodeRef: createRef(null)},
    {id:uuidv4(), name: '任务3',nodeRef: createRef(null)},
  ]);
  return (
    <div>
      <TransitionGroup>
        {task.map(({id, name, nodeRef}) =>{
          return (
            <FadeTransition nodeRef={nodeRef} key={id}>
              <div ref={nodeRef}>
                {name}
                <button onClick={() => setTask(task.filter(item => item.id !== id))}>删除</button>
              </div>
            </FadeTransition>
          )
        })} 
      </TransitionGroup>
      <button onClick={() => {
        const name = window.prompt('请输入任务名称');
        setTask([...task, {id:uuidv4(), name,nodeRef: createRef(null)}])
      }}>添加</button>
    </div>
  );
}
