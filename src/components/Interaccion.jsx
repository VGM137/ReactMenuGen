import React from 'react';
import { connect } from 'react-redux'
import EnterDate from './EnterDate';
import EnterGuisado from './EnterGuisado';
import CreateImage from './CreateImage';
import ColorPicker from './ColorPicker';
import Checkbox from './Checkbox';
import '../assets/styles/components/Interaccion.scss'

const Interaccion = (props) => {

  let isGradient = props.style.backgroundType
  
  return (
    <>
      <section className='edit-styles'>
        <Checkbox />
        {isGradient == 'gradient' 
          ?
            <>
              <ColorPicker section={'background'} label='Color de fondo' />
              <ColorPicker section={'gradient'} label='Color gradiente' />
            </>
          :
            <ColorPicker section={'background'} label='Color de fondo' />
          }
          <ColorPicker section={'text'} label='Color del texto' />
      </section>
    <section id="entradas" className="entradas">  
      <EnterDate />
      <EnterGuisado />
      <CreateImage />
      <div id="link" className="link">
        <a id="linkGo" className="linkGo"></a>
      </div>
    </section>
    </>
  )
};

const mapStateToProps = state => {
  return{
    style: state.styles
  }
}

export default connect(mapStateToProps, null)(Interaccion);