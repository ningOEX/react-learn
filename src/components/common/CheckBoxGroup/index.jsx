import React from 'react'
import PropTypes from 'prop-types';
import CommonTypes from '../../../utils/commonTypes';

CheckBoxGroup.propTypes = {
    groupDatas: CommonTypes.groupDatas, // 数据源
    chooses: CommonTypes.choosesDatas, // 选中的数据
    onChange: PropTypes.func, // 选项改变时的回调函数，参数为选中的数据数组
}

export default function CheckBoxGroup(props) {
  const { groupDatas, chooses } = props;

  const handleChange = (e) => {
    const { defaultValue } = e.target;
    props.onChange && props.onChange(defaultValue);
  }
 

  const lis = groupDatas.map(item => <label key={item.value}>
    <input type="checkbox"  value={item.value} checked={chooses.includes(item.value)} onChange={handleChange} />
    {item.label}
  </label>)
  return (
    <ul>
      {lis}
    </ul>
  )
}
