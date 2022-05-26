import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { changeBackgroundColor, changeGradientColor, changeTextColor } from '../actions';
import '../assets/styles/components/ColorPicker.scss'

const ColorPicker = ({section, label}) => { 

  const styles = useSelector(state => state.styles)
  let dispatch = useDispatch()

  let pickerValue = styles.section+'Color'

  const handleClick = (e) => {
    let color = e.target.value
    if( section == 'background' ){
      dispatch(changeBackgroundColor(color))
    }else if( section == 'gradient' ){
      dispatch(changeGradientColor(color))
    }else if( section == 'text' ){
      dispatch(changeTextColor(color))
    }
  }

  return (
    <div className={`colorPicker__container ${section}-colorPicker__container`} >
        <label htmlFor="colorpicker">{label}</label>
        <div className='picker-area' >
          <div className='picker-container'>
            <input 
              type="color" 
              id='colorpicker' 
              value={ section == 'background' && styles.backgroundColor || section == 'gradient' && styles.gradientColor || section == 'text' && styles.textColor  } 
              onChange={handleClick} />
          </div>
        </div>
    </div>
  )
}

const dispatchStateToProps = {
  changeBackgroundColor,
  changeGradientColor,
  changeTextColor
}

export default connect(null, dispatchStateToProps)(ColorPicker)