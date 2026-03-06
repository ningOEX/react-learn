import React from 'react'
import "./index.css"

export default function index(props) {

  const defaultProps = {
    bg: "rgba(0,0,0,0.5)"
  }

  const datas = Object.assign({}, defaultProps, props)

  console.log(datas);
  


  if(datas.showModal === false) {
    return null
  }

  const close = (e) => {
    if(e.target.className !== "modal") return null;
    datas.close()
  }


  return (
    <div onClick={close} className='modal' style={{ backgroundColor: datas.bg }}>
      <div className='modal-center'>
        {datas.children}
      </div>
    </div>
  )
}
