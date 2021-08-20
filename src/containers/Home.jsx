import React from 'react';
import { connect } from 'react-redux'
import Interaccion from '../components/Interaccion';
import VistaPrevia from '../components/VistaPrevia';
import '../assets/styles/App.scss'

const Home = () => {


  return (
    <>
    <main id='principal' className='principal'> 
      <VistaPrevia />
      <Interaccion />
    </main>
    </>
  )
};


export default connect(null, null)(Home);
