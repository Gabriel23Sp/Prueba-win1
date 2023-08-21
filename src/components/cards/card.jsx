import React from 'react'
import './Card.css'

const Card = ({
    title,
    children,
    styles
}) => {
  return (
    <div className='container-card'>
        <div className='border-card' style={styles}>
            <span className='text-card'>
                { title }
            </span>
            <div
             className='content-card'
            >
                { children }
            </div>
        </div>
    </div>
  )
}

export default Card
