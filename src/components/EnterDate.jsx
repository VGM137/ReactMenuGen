import React from 'react';
import { connect  } from 'react-redux';
import { addDate } from '../actions';
import '../assets/styles/components/EnterDate.scss'

const EnterDate = (props) => { 

  const handleEvent = (e) => {
    const date = e.target.value
    const format = `${date.charAt(8)}${date.charAt(9)}/${date.charAt(5)}${date.charAt(6)}/${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
    props.addDate(format)
  }

  return (
    <div>
      <div id="enter-container" className="enter-container">
        <input
          id="date"
          className='date enter'
          type="date"
          onChange={handleEvent} />
      </div>
      <div id="btn-container" className="btn-container">
        <button id="addDate" className="addDate btn">Actualizar</button>
      </div>
    </div>
  )
}

const dispatchStateToProps = {
  addDate,
}

export default connect(null, dispatchStateToProps)(EnterDate);