import React from 'react';

/**
 * 分页组件
 * @param currentPage	number	1	当前页码
 * @param pageSize	number	10	每页条数
 * @param total	number	0	数据总量
 * @param onPageChange	function	-	页码变化回调
 * @param onPageSizeChange	function	-	每页条数变化回调
 * @param pageSizeOptions	array	[10,20,50,100]	容量选项
 * @returns 
 */
const Pagination = ({ 
  currentPage = 1, 
  pageSize = 10, 
  total = 0, 
  onPageChange, 
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100]
}) => {
  const totalPages = Math.ceil(total / pageSize);

  // 生成要显示的页码数组
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, currentPage + 2);
      
      if (start === 1) end = maxVisible;
      if (end === totalPages) start = totalPages - maxVisible + 1;
      
      for (let i = start; i <= end; i++) pages.push(i);
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    onPageSizeChange(newSize);
    onPageChange(1);
  };

  if (total === 0) return null;

  // 基础按钮样式 - 全部使用非简写属性
  const baseButtonStyle = {
    padding: '6px 12px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#d9d9d9',
    backgroundColor: '#fff',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '14px',
    transition: 'all 0.3s',
    minWidth: '56px'
  };

  // 激活状态样式
  const activeButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: '#1677ff',
    borderColor: '#1677ff',
    color: '#fff'
  };

  // 禁用状态样式
  const disabledButtonStyle = {
    ...baseButtonStyle,
    cursor: 'not-allowed',
    opacity: 0.6
  };

  // 获取按钮样式
  const getButtonStyle = (disabled, isActive) => {
    if (disabled) return disabledButtonStyle;
    if (isActive) return activeButtonStyle;
    return baseButtonStyle;
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
      padding: '16px 0',
      marginTop: '20px'
    }}>
      {/* 左侧：容量选择 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{
          fontSize: '14px',
          color: '#666'
        }}>每页显示：</span>
        <select 
          value={pageSize} 
          onChange={handlePageSizeChange}
          style={{
            padding: '4px 8px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#d9d9d9',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {pageSizeOptions.map(size => (
            <option key={size} value={size}>{size} 条</option>
          ))}
        </select>
      </div>

      {/* 右侧：分页按钮 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
        {/* 首页 */}
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          style={getButtonStyle(currentPage === 1, false)}
        >
          首页
        </button>

        {/* 上一页 */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={getButtonStyle(currentPage === 1, false)}
        >
          上一页
        </button>

        {/* 页码按钮 */}
        {getPageNumbers().map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={getButtonStyle(false, currentPage === page)}
          >
            {page}
          </button>
        ))}

        {/* 下一页 */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={getButtonStyle(currentPage === totalPages, false)}
        >
          下一页
        </button>

        {/* 尾页 */}
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          style={getButtonStyle(currentPage === totalPages, false)}
        >
          尾页
        </button>

        {/* 信息显示 */}
        <span style={{
          fontSize: '14px',
          color: '#666',
          marginLeft: '8px'
        }}>
          第 {currentPage} / {totalPages} 页，共 {total} 条
        </span>
      </div>
    </div>
  );
};

export default Pagination;