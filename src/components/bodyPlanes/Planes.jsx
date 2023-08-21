import './Planes.css'
import { AddCircle } from 'iconsax-react'
import React from 'react'
import Button from '../Button/Button'

const Planes = ({
    tittlePlanes,
    styleMbps,
    mbpsLast,
    mbps,
    textPromo,
    imgDgo,
    price,
    timePromo,
    regularPrice,
    onClick,
    icons

}) => {
  return (
    <div className='container-planes'>
      <span className='text-planes'>
        {tittlePlanes}
      </span>
      <span
      className='styles-megas-promo'
      style={styleMbps}
      >
        {mbps} Mbps
        </span>
        {mbpsLast &&
        <p className='styles-megas' style={{
            textDecorationColor: '#ff5a0a',
          }}>
            { mbpsLast } Mbps
        </p>
        }{
            textPromo &&
            <span className='text-promo'>
                {textPromo}
            </span>
        }{
            imgDgo &&
            <div className='aditional'>
                <AddCircle size="32" color="#26aae1" style={ {paddingBottom: '1rem',}}/>
                
                <img className='img-directv' src={imgDgo} alt='iconDGO' />
            </div>
        }

        <div className='container-price'>
            <p className='price'>
                S/ {price} al mes
            </p>
        </div>

        <span className='time-promo'>
        {timePromo}
        </span>

        <span className='regular-price'>
            Precio regular S/ {regularPrice}
        </span>

            <Button text={'Quiero este plan'} onClick={ onClick }/> 
        
        {
            icons &&
            <div className='container-icons'>
                {
                    icons.map((item, index) => (
                        <div className='icons' key={index}>
                            <img src={item.img} alt="iconos-win" />

                            <span className='text-icons'>{item.text}</span>
                        </div>
                    ))
                }
            </div>
        }                                                                                                                                                                   
    </div>
  )
}

export default Planes
