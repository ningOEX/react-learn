import React from 'react'
import Pagination from "./index"


export default function test() {
  return (
    <div>
      <Pagination
        currentPage={1}
        pageSize={10}
        total={100}
        onPageChange={(page) => console.log('页码变化:', page)}
        onPageSizeChange={(size) => console.log('每页条数变化:', size)}
      />
    </div>
  )
}

