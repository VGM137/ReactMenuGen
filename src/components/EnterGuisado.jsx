import React from "react";
import { connect } from "react-redux";
import { guisadoText, addOption } from "../actions";
import '../assets/styles/components/EnterGuisado.scss'

const EnterGuisado = (props) => {

  const guisadoText = (e) => {
    const text = e.target.value
    const upperCaseText = text.toUpperCase()
    props.guisadoText(upperCaseText);
  }

  const handleEvent = (e) => {
    if(e.code === 'Enter') {
      const optionText = props.optionText;
      if(optionText.length > 0){
        props.addOption(optionText)
        e.target.value = ''
        props.guisadoText('') 
      }
    }
  }

  const handleClick = () => {
    const optionText = props.optionText
    if(optionText.length > 0){
      props.addOption(optionText)
      const guisadoInput = document.getElementById('guisado')
      guisadoInput.value = ''
      props.guisadoText('') 
    }
  }

  return(
    <div className="container__wrapper">
      <div id="enter-container" className="enter-container">
        <input
          id="guisado"
          className="guisado"
          type="text"
          placeholder="Ingresar guisado"
          autoFocus
          onKeyDown={handleEvent}
          onChange={guisadoText} />
      </div>
      <div id="btn-container" className="btn-container">
        <button
          id="addFood"
          className="addFood btn"
          onClick={handleClick}>
            Agregar
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    optionText: state.optionText,
  }
}

const dispatchStateToProps = {
  guisadoText,
  addOption,
}

export default connect(mapStateToProps, dispatchStateToProps)(EnterGuisado);