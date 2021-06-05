import React from 'react';
import { Navbar } from '../navbar/Navbar';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun } from '@fortawesome/free-solid-svg-icons';

import { InfoDia } from '../infoDia/InfoDia';


export const Home = () => {

    let description = 'nublado';
    let color = 'icono ';
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
        <>
            <Navbar />
            <div className="container">
                <div className="row min-h-100">
                    <div className="col-md-6 form1 d-flex flex-column justify-content-center">
                        <h3>Consulta el clima:</h3>
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Busca una ciudad" aria-label="Busca una ciudad" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <InfoDia tipoDia="dia" />
                        <hr />
                        <div className="d-flex justify-content-around">
                            <InfoDia tipoDia="semana" />
                            <InfoDia tipoDia="semana" />
                            <InfoDia tipoDia="semana" />
                            <InfoDia tipoDia="semana" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
