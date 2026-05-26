import React from 'react'
import CheckBoxGroup from './index'

/**
 *  测试组件
 * @param {*} props 
 * @returns 
 */
export default function Test() {
  
  /**
   * 选中的数据
   */
  const [chooses, setChooses] = React.useState([]);

  /**
   * 数据源
   */
  const dataList = [
    { label: '选项1', value: 'option1' },
    { label: '选项2', value: 'option2' },
    { label: '选项3', value: 'option3' },
  ];

  /**
   * 处理选中值变化
   * @param {*} selectedValues 
   */
  const handleChange = (selectedValues) => {
    setChooses(selectedValues);
  }

  /**
   * 渲染组件
   */
  return (
    <div>
        <CheckBoxGroup groupDatas={dataList} chooses={chooses} onChange={handleChange} name="option2" />
    </div>
  )
}
