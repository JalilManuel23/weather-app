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
                        <InfoDia />
                        <hr />
                        <div className="d-flex justify-content-around">
                            {/* <div className="d-flex flex-column align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <FontAwesomeIcon icon={faCloud} className={ color2 } />
                                    <p>Lunes</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="temp-maxima">30°C</p>
                                    <p className="temp-minima align-bottom">15°C</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <FontAwesomeIcon icon={faCloud} className={ color2 } />
                                    <p>Martes</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="temp-maxima">30°C</p>
                                    <p className="temp-minima align-bottom">15°C</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <FontAwesomeIcon icon={faCloud} className={ color2 } />
                                    <p>Miercoles</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="temp-maxima">30°C</p>
                                    <p className="temp-minima align-bottom">15°C</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <div className="d-flex flex-column align-items-center">
                                    <FontAwesomeIcon icon={faCloud} className={ color2 } />
                                    <p>Jueves</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="temp-maxima">30°C</p>
                                    <p className="temp-minima align-bottom">15°C</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
