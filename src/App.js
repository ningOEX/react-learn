import React from 'react'
import ThreeLayout from './components/common/ThreeLayout'


export default function App() {
  return (
    <div>
        <ThreeLayout left={<h1>左侧区域</h1>} right={<h1>右侧区域</h1>}>
            <div>
                <h1>主区域</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit, quos vitae cum enim veniam. Expedita, nisi sapiente. Tempora tenetur molestiae et rem quos accusantium reprehenderit assumenda quo cum commodi?
                Culpa quibusdam obcaecati, quod facere nobis pariatur, necessitatibus quos, possimus expedita ipsa ex minus autem perspiciatis mollitia excepturi dolores tempore minima distinctio rerum odio est aut porro praesentium. Laboriosam, aspernatur.
            </div>
        </ThreeLayout>
    </div>
  )
}
