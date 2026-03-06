import React from 'react'
import "./Movie.css"

export default function Movie(props) {
  return (
    <li className='item_li'>
      <span className='movie_name'>电影【{props.movie_name}】</span>
      <span className='movie_money'>票房：{props.sum_box_desc}</span>
      <span>{props.release_info}</span>
    </li>
  )
}
