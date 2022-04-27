import React from 'react';
import { connect } from 'react-redux'
import EnterDate from './EnterDate';
import EnterGuisado from './EnterGuisado';
import CreateImage from './CreateImage';
import '../assets/styles/components/Interaccion.scss'

const Interaccion = () => {
  
  return (
    <section id="entradas" className="entradas">  
      <EnterDate />
      <EnterGuisado />
      <CreateImage />
      <div id="link" className="link">
        <a id="linkGo" className="linkGo"></a>
      </div>
    </section>
  )
};

export default connect(null, null)(Interaccion);