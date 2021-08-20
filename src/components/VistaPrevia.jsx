import React from 'react';
import { connect } from 'react-redux';
import Option from './Option';
import '../assets/styles/components/VistaPrevia.scss';

const Interaccion = (props) => {

  const dateIsEnable = props.date.length > 0
  const options = props.options
  const optionsIsEnable = options.length > 0
  /* const optionsIsEnable = options.length > 0 */ /* || options.length + 1 || options.length - 1 */
  
  return (
    <section id="menu" className="menu">
      <div id="container" className="container">
        <div id="encabezado" className="encabezado">
          {dateIsEnable
            ?
              <div id="encabezado-container" className="encabezado-container">
                <p id="fecha" className="fecha">{props.date}</p>
                <p id="hoy" className="hoy">HOY EN SAGAZ</p>
              </div>
            :
              console.log('Date is not enable')
          }
        </div>
        <div id="guisados" className="guisados">
          {optionsIsEnable
            ?
              options.map(option => 
                <Option id={ option } optionText={ option } key={ option }/>
              )
            :
              console.log('No options listed')
          }
        </div>
        <div id="pie" className="pie">
          <p id="pie-mensaje" className="pie-mensaje">BUEN PROVECHO</p>
        </div>
      </div>
    </section>

  )
};

const mapStateToProps = (state) => {
  return {
    date: state.date,
    options: state.options
  }
}

export default connect(mapStateToProps, null)(Interaccion);