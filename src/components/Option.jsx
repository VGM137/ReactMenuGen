import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { unmountComponentAtNode } from 'react-dom';
import { removeOption } from '../actions';
import '../assets/styles/components/Option.scss'

const Option = ({ id, optionText }) => {

  const options = useSelector(state => state.options)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    console.log(e)
    const cadena = e.target.parentElement.outerText
/*     const node = e.target.parentNode */
    const guisado = cadena.slice(0, -2)
    console.log(`guisado ${guisado}`)
    options.forEach(option => {
      if(option === guisado){
        const index = options.indexOf(option)
        /* const node = document.getElementById(option)
        node.remove() */
        dispatch(removeOption(option))
      }
    })
    /* node.remove() */
/*     try{
    }catch(error){
      console.log(error)
    } */
  }

  return (
    <p id={id} className='opcion'>{ optionText }
      <button id='quitar' className='quitar' onClick={handleClick}>
        x
      </button>
    </p>
  )
}

const mapStateToProps = (state) => {
  return {
    options: state.options,
  }
}

/* const dispatchStateToProps = {
  removeOption,
} */

export default connect(mapStateToProps, null)(Option);