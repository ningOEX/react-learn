import PropTypes from 'prop-types';

/**
 * 通用的类型定义
 */
export default {
    children: PropTypes.node, // 任何可以被渲染的内容（字符串、数字、元素或数组）
    groupDatas: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })), // 数据源，数组中每个元素包含 label 和 value 属性
    choosesDatas: PropTypes.arrayOf(PropTypes.string), // 选中的数据，数组中每个元素为字符串
}