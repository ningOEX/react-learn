import React from 'react'
import PropTypes from 'prop-types'
import "./index.css"
/**
 * 纯绘制照片列表
 * @returns 
 */
export default function PhotoList({photos}) {
    const list = photos.map(photo => {
        return (
            <div key={photo.id} className="photo-item">
                <p>摄影师：{photo.photographer}</p>
                 <img className="photo-img" src={photo.src.tiny} alt={photo.alt} attributionsrc={photo.photographer_url} />
            </div>
        )
    })
  return (
    <div className="photo-list">
      {list}
    </div>
  )
}

PhotoList.defaultProps = {
  photos: []
}

PhotoList.propTypes = {
 photos: PropTypes.array.isRequired
}
