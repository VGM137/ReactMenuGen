import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { guisadoText, addOption } from "../actions";
import '../assets/styles/components/EnterGuisado.scss'

const CreateImage = (props) => {

  const createImage = async () => {
    const payload = { 
      html: document.getElementById('menu').outerHTML,
      css: `
      body { 
        font-size: 2.2em; 
        font-family: 'Finger Paint'; 
      }
      .menu{
        width: 400px;
        height: 400px;
        margin: auto;
        background: rgb(60,60,60);
        background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(0,0,0,1) 100%);
        display: flex;
        position: relative;
        box-shadow: 0px 0px 16px 0px #333333;
        font-size: .65em;
      }
      .container{
        margin: auto;
        width: 80%;
        display: block;
      }
      .encabezado-container{
        max-width: 100%;
        margin: 0 auto;
      }
      .encabezado{
        color: white;
        display: flex;
        margin: auto;
        text-align: center;
        background-image: linear-gradient(to right, white 50%, rgba(255,255,255,0) 0%);
        background-position: bottom;
        background-size: 10px 2px;
        background-repeat: repeat-x;
      }
      .fecha{
        display: flex;
        height: 1em;
        width: 100%;
        margin: 5px auto;
        text-align-last: justify;
        align-items: center;
        justify-content: center;
      }
      .hoy{
        margin: 5px auto;
        margin-bottom: 15px;
        height: 1em;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .guisados{
        width: auto;
        color: white;
        text-align: center;
        box-sizing: border-box;
        padding: 10px 0 25px 0;
      }
      
      .pie{
        background-image: linear-gradient(90deg,#fff 50%,hsla(0,0%,100%,0) 0);
        background-position: top;
        background-repeat: repeat-x;
        background-size: 10px 2px;
        color: #fff;
        padding: 10px 0;
      }
      .pie-mensaje{
        display: flex;
        height: 1em;
        box-sizing: border-box;
        margin: auto;
        align-items: center;
        justify-content: center;
      }
      .quitar{
        position: absolute;
        background-color: rgba(0,0,0,0);
        border: none;
        color: rgba(0,0,0,0);
        right: 50px;
        height: 20px;
        width: 20px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
      .quitar:hover{
        background-color: rgba(146, 146, 146, 0.5);
        color: rgb(175, 175, 175);
        border: solid 1px white;
      }
      .opcion{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 15px 0 0 0;
        text-transform: uppercase;
        text-align: center;
        line-height: 1em;
      }`, 
      google_fonts: 'Finger Paint'
    };
    console.log(payload)
  
    let headers = { 
      auth: {
        username: '0699a817-edcb-4997-9cf1-4b00ae5f5289',
        password: 'c5cf4969-de5a-4587-ac59-533cc37cd6dd'
      },
      headers: {
        'Content-Type': 'application/json',
        /* "Access-Control-Allow-Origin": "*", */
      }
    }
    try {
      const response = await axios.post('https://hcti.io/v1/image', JSON.stringify(payload), headers );
      console.log(response)
      link.innerHTML = `<a id="linkGo" target='_blank' class="linkGo" href=${response.data.url}>Guardar</a>`;
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div id="downloadBtn" className="downloadBtn">
        <button id="download" className="download btn" onClick={createImage}>Generar imagen</button>
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

export default connect(mapStateToProps, dispatchStateToProps)(CreateImage);