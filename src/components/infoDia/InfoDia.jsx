import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun } from '@fortawesome/free-solid-svg-icons';

import './infoDia.css';

export const InfoDia = ({ tipoDia }) => {

    let description = 'nublado'; 
    let color = ( tipoDia === 'dia' ) ? 'icono ' : 'icono-semana ';
    let icono = null;

    switch( description ) {
        case 'nublado': {
            color += 'nublado';
            icono = faCloud;
        } break;

        case 'soleado': {
            color += 'soleado';
            icono = faSun;
        } break;
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={ icono } className={ color } />
                <p className="temp-actual">30°C</p>
                <p className="tiempo">Nublado</p>
            </div>
            <p className="ciudad">Durango, Dgo.</p>
            <div className="d-flex align-items-center">
                <p className="temp-maxima">30°C</p>
                <p className="temp-minima align-bottom">15°C</p>
            </div>
        </div>
    )
}

/*versión de los días de la semana
    <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-center">
            <FontAwesomeIcon icon={faCloud} className={ color2 } />
            <p>Lunes</p>
        </div>
        <div className="d-flex align-items-center">
            <p className="temp-maxima">30°C</p>
            <p className="temp-minima align-bottom">15°C</p>
        </div>
    </div>
*/