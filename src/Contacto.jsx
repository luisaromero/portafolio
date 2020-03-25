import React from 'react';
import './Contacto.css';
import AOS from 'aos';

AOS.init();
function Contacto(props){
        return(
            <div id="Icons">
                <a href="https://www.linkedin.com/in/luisa-romero-cotrena/"target='_blank' className="BtnContact"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/luisaromero" target='_blank' className="BtnContact"><i className="fa fa-github-alt"></i></a>
                <a className="BtnContact" target='_blank'><i className="fa fa-code"></i></a>
                <a className="BtnContact" target='_blank'><i className="fa fa-envelope"></i></a>         
              </div>
            )
        }

  export default Contacto;