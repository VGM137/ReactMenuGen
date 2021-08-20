import React from 'react';
import { connect } from 'react-redux'
import EnterDate from './EnterDate';
import EnterGuisado from './EnterGuisado';
import '../assets/styles/components/Interaccion.scss'

const Interaccion = () => {
  
  return (
    <section id="entradas" className="entradas">  
      <EnterDate />
      <EnterGuisado />
      <div id="downloadBtn" className="downloadBtn">
        <button id="download" className="download btn">Generar imagen</button>
      </div>
      <div id="link" className="link">
        <a id="linkGo" className="linkGo"></a>
      </div>
    </section>
  )
};

export default connect(null, null)(Interaccion);