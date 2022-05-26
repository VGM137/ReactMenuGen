import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { backgroundType } from '../actions';
import '../assets/styles/components/Checkbox.scss'

const Checkbox = () => { 

  let dispatch = useDispatch()

  const handleChange = (e) => {
        let type = e.target.value
        dispatch(backgroundType(type))
  }

  return (
    <form onChange={(e) => handleChange(e)} className={`checkbox-wrapper`}  >
        <div className='chackbox-container' >
            <label htmlFor='gradient' >Fondo difuminado</label>
            <input name='type' type='radio' defaultChecked value='gradient' id='gradient' />
        </div>
        <div className='chackbox-container' >
            <label htmlFor='solid' >Fondo sólido</label>
            <input name='type' type='radio' value='solid' id='solid' />
        </div>
    </form>
  )
}

export default connect(null, null)(Checkbox)