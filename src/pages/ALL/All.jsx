import React from 'react'
import './all.css'
import Vector from '../ALL/vector.svg'
import { useState } from 'react'

const All = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='wrapper-all'>
        <div className='sidebar'>
            <div className='divider'></div>
            <h3 onClick={(e) => setIsOpen(!isOpen)}>Поколение</h3>
            <img onClick={(e) => setIsOpen(!isOpen)} className='vector' src={Vector} alt='vector'/>
            {isOpen && (
              <div className='label'>
                <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />1-ое</p>
                <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />2-ое</p>
                <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />3-ое</p>
                <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />4-ое</p>
                <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />5-ое</p>
                <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />6-ое</p>
                <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />7-ое</p>
                <p className='label'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />8-ое</p>
                <p className='label new'><input className='radio mb-20 mr-15' type="radio" name='1' value='yes' />9-ое и новее</p>
              </div>
            )
            }
            <div className='tip' onClick={(e) => setIsActive(!isActive)}>
              Тип
            </div>
            <img onClick={(e) => setIsActive(!isActive)} className='vector' src={Vector} alt='vector'/>
            {isActive && (
              <div className='bottom'>
                <div><input type="checkbox" id='checkboxx'/><label for="checkboxx"></label><span>Физические</span></div>
                <div><input className='input' type="checkbox" id='checkboxx' /><label for="checkboxx"></label><span>Специальные</span></div>
              </div>
            )}
            <h4>Физические</h4>
            <img className='vector' src={Vector} alt='vector'/>

            <h4 className='special'>Специальные</h4>
            <img className='vector' src={Vector} alt='vector'/>
        </div>
        <div className='all-pokemons'>
           <div className='round'></div>
           <div className='sorting'>
              <h3>Сортитровать по:</h3>
              <div className='three-sortings'>
                <a>Популярности</a>
                <a>Рейтингу</a>
                <a>Уровню силы</a>
              </div>
           </div>







           
           <div className='pokemons'></div>
        </div>
    </div>
  )
}

export default All